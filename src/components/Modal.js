import React, { useContext } from 'react';
// import Card from './Card';
import ReactMarkdown from 'react-markdown';

import ContentContext from '../context';

export default function Modal() {
  const {
    state: { cards, showModal }
  } = useContext(ContentContext);

  if (!showModal) {
    return null;
  } else {
    return (
      <div>
        {' '}
        {cards.map(c => {
          return (
            <div>
              <ReactMarkdown source={c.title} />{' '}
              <ReactMarkdown source={c.date} />{' '}
              <ReactMarkdown source={c.desc} />{' '}
            </div>
          );
        })}{' '}
      </div>
    );
  }
}
