import React, {
  useEffect, useState, useReducer, useContext
}
from 'react';
import Nav from './components/Nav';
import Modal from './components/Modal';

import ContentContext from './context';
import reducer from './reducer';

const useAPI = endpoint => {
  const [data, setData] = useState('');


  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const response = await fetch(endpoint).then(res => res.text());
    console.log(response)

    setData(response);
  };

  return data;
};

export default function App() {
  const initialState = useContext(ContentContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const apiContents = useAPI('http://localhost:3005/api/');
  console.log(apiContents);

  useEffect(() => {
    dispatch({
      type: 'GET_CONTENT',
      payload: apiContents
    });
  }, [apiContents]);

  // console.log(myData);

  return ( < ContentContext.Provider value = {
      {
        state, dispatch
      }
    } >
    < Nav / >
    < Modal / >
    < /ContentContext.Provider>
  );
}
