import React, {
  useState, useContext, useEffect
}
from 'react';
import ReactMarkdown from 'react-markdown';


import ContentContext from '../context';

export default function Modal() {
  const [content, setContent] = useState('');

  const {
    state: {
      contents
    }
  } = useContext(ContentContext);

  console.log(contents);
  var contentArr = contents.split('\n')

  console.log(contentArr);

  return ( 
    < div >
      {contentArr.map((line, i) => {
        if (line.startsWith('###')) {
          return <h3><ReactMarkdown source={line}/></h3>
        } else if (line.startsWith('###')) {
          return <h2><ReactMarkdown source={line}/></h2>
        } else if (line.startsWith('#')) {
          return <h1><ReactMarkdown source={line}/></h1>
        } else {
          return <p>{line}</p>
        }
      } 
      )}
    < h1 > {
      contents
    } < /h1>  < /div > );
}
