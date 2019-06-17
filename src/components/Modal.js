import React, { useContext, useEffect } from 'react';
import Card from './Card';

import ContentContext from '../context';

export default function Modal() {
  const {
    state: { header, cards }
  } = useContext(ContentContext);

  console.log(cards);
  return <div />;
}
