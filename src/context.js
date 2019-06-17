import React from 'react';

const ContentContext = React.createContext({
  contents: '',
  header: '',
  cards: [],
  showModal: false
});

export default ContentContext;
