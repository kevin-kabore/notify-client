import React, {useContext} from 'react';
import ReactMarkdown from 'react-markdown';

import ContentContext from '../context';
import '../css/Modal.css';

export default function Modal() {
  const {
    state: {cards}
  } = useContext(ContentContext);

  return (
    <div className="Modal">
      <div className="modal-header"> New Notifications </div> <hr />{' '}
      {cards.map((c, i) => {
        return (
          <div className="card">
            <div className="card-header">
              <ReactMarkdown
                style={{
                  margin: 0
                }}
                className="card-title"
                key={c.id + `-title`}
                source={c.title}
              />{' '}
              <ReactMarkdown
                style={{
                  margin: 0
                }}
                className="card-date"
                key={c.id + `-date}`}
                source={c.date}
              />{' '}
            </div>{' '}
            <ReactMarkdown
              style={{
                margin: 0
              }}
              className="card-description"
              key={c.id + `-desc`}
              source={c.desc}
            />{' '}
          </div>
        );
      })}{' '}
    </div>
  );
}
