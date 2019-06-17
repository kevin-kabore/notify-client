export default function reducer(state, action) {
  switch (action.type) {
    case 'GET_CONTENT':
      return {
        ...state,
        contents: action.payload
      };
    case 'SET_CARDS':
      return {
        ...state,
        cards: action.payload
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        showModal: !state.showModal
      };
    default:
      return state;
  }
}
