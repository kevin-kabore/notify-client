export default function reducer(state, action) {
  switch (action.type) {
    case 'GET_CONTENT':
      return {
        ...state,
        contents: action.payload
      };
    default:
      return state;
  }
}
