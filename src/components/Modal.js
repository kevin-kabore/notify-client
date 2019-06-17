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
      <div className="modal-header"> New Notifications </div>{' '}
      {cards.map((c, i) => {
        return (
          <div>
            <ReactMarkdown key={c.id + `-title`} source={c.title} />{' '}
            <ReactMarkdown key={c.id + `-date}`} source={c.date} />{' '}
            <ReactMarkdown key={c.id + `-desc`} source={c.desc} />{' '}
          </div>
        );
      })}{' '}
    </div>
  );
}
