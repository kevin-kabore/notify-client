import React, { useEffect, useState, useReducer, useContext } from 'react';
import Nav from './components/Nav';
import Modal from './components/Modal';

import ContentContext from './context';
import reducer from './reducer';

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
          lines = content.split('\n');
        lines.forEach(line => {
          if (line.startsWith('###')) {
            newCard.date = line;
          } else if (line.startsWith('##')) {
            newCard.title = line;
          } else if (line.startsWith('#')) {
            setHeader(line);
            console.log(header);
          } else {
            if (line.length > 0) newCard.desc = line;
          }

          if (newCard.title && newCard.date && newCard.desc) {
            cards.push(newCard);
            newCard = {};
          }
        });
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
    <ContentContext.Provider
      value={{
        state,
        dispatch
      }}>
      <Nav />
      <div> {header.length > 0 ? `${header}` : 'Waiting....'} </div> <Modal />
    </ContentContext.Provider>
  );
}
