export default function reducer(state, action) {
  switch (action.type) {
    case 'GET_CONTENT':
      return {
        ...state,
        contents: action.payload
      };
    // case 'SET_HEADER':
    //   return {
    //     ...state,
    //     header: action.payload
    //   };
    case 'SET_CARDS':
      return {
        ...state,
        cards: action.payload
      };
    default:
      return state;
  }
}
