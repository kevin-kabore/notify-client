import React, { useContext } from 'react';
import ContentContext from '../context';

export default function Nav() {
  const { dispatch } = useContext(ContentContext);
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      <h1> Notify </h1>{' '}
      <button
        onClick={() =>
          dispatch({
            type: 'TOGGLE_MODAL'
          })
        }>
        <img src="https://icon.now.sh/face" alt="Avatar Icon" className="h-6" />
      </button>{' '}
    </nav>
  );
}
