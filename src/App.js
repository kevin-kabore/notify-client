import React, {useEffect, useState, useReducer, useContext} from 'react';
import uuidv4 from 'uuid/v4';
import reducer from './reducer';
import ContentContext from './context';

import Nav from './components/Nav';
import Modal from './components/Modal';
import crown from './img/crown.png';

import './css/App.css';

const useAPI = endpoint => {
  const [data, setData] = useState('');

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const response = await fetch(endpoint).then(res => res.text());

    setData(response);
  };

  return data;
};

export default function App() {
  const initialState = useContext(ContentContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [header, setHeader] = useState('');

  const apiContents = useAPI('http://localhost:3005/api/');

  useEffect(
    () => {
      dispatch({
        type: 'GET_CONTENT',
        payload: apiContents
      });
    },
    [apiContents]
  );

  useEffect(
    () => {
      const createCards = content => {
        let cards = [],
          newCard = {},
          description = '',
          lines = content.split('\n');

        for (var i = 0; i < lines.length; i++) {
          if (lines[i].startsWith('###')) {
            newCard.date = lines[i];
          } else if (lines[i].startsWith('##')) {
            newCard.title = lines[i];
          } else if (lines[i].startsWith('#')) {
            setHeader(lines[i]);
          } else {
            if (
              lines[i].length > 0 &&
              (lines[i + 1] && lines[i + 1].startsWith('#'))
            ) {
              description = description + ` \n ${lines[i]}`;
              newCard.desc = description;
              description = '';
            } else if (lines[i].length > 0) {
              description = description + ` ${lines[i]}`;
              if (!lines[i + 1]) newCard.desc = description;
            }
          }
          if (newCard.title && newCard.date && newCard.desc) {
            newCard.id = uuidv4();
            cards.push(newCard);
            newCard = {};
          }
        }
        return cards;
      };
      const apiCards = createCards(state.contents);
      console.log(apiCards);
      dispatch({
        type: 'SET_CARDS',
        payload: apiCards
      });
    },
    [header, state.contents]
  );

  return (
    <div className="App">
      <ContentContext.Provider
        value={{
          state,
          dispatch
        }}
      >
        <Nav /> {state.showModal ? <Modal /> : null}{' '}
        <div className="App-body">
          <div className="App-header-img">
            <img src={crown} alt="Crown" />
          </div>{' '}
          <div className="App-header">
            You Have{' '}
            {state.cards.length > 0 ? (
              <>
                <span className="notification-count-red">
                  {' '}
                  {state.cards.length}{' '}
                </span>
                Royally Important Notifications{' '}
              </>
            ) : (
              <>
                <span className="notification-count-green"> 0 </span>
                Notifications{' '}
              </>
            )}{' '}
          </div>{' '}
          <div>
            {' '}
            {state.cards.length > 0 ? (
              <button
                className="btn-notification"
                onClick={() =>
                  dispatch({
                    type: 'TOGGLE_MODAL'
                  })
                }
              >
                {' '}
                {state.showModal
                  ? 'Hide Notifications'
                  : 'View Notifications'}{' '}
              </button>
            ) : null}{' '}
          </div>{' '}
        </div>{' '}
      </ContentContext.Provider>{' '}
    </div>
  );
}
