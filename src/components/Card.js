import React, { useState, useContext } from 'react';

import ContentContext from '../context';

import ReactMarkdown from 'react-markdown';

export default function Card() {
  const {
    state: { cards },
    dispatch
  } = useContext(ContentContext);

  return <div> {cards.map(card => console.log(card))} </div>;
}
