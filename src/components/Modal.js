import React, {
  useState, useContext, useEffect
}
from 'react';

import ContentContext from '../context';

export default function Modal() {
  const [content, setContent] = useState('');

  const {
    state: {
      contents
    },
    dispatch
  } = useContext(ContentContext);


  var contentArr = contents.split('\n');

  console.log(contentArr);

  return ( < div >
    < h1 > {
      contents
    } < /h1>  < /div > );
}
