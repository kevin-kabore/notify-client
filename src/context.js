import React from 'react';

const ContentContext = React.createContext({
  contents: '',
  header: '',
  cards: []
});

export default ContentContext;
