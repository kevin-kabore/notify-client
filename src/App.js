import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const useAPI = endpoint => {
    const [data, setData] = useState([]);

    useEffect(() => {
      getData();
    });

    const getData = async () => {
      const response = await fetch(endpoint).then(res => res.json());

      setData(response);
    };

    return data;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.{' '}
        </p>{' '}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React{' '}
        </a>{' '}
      </header>{' '}
    </div>
  );
}

export default App;
