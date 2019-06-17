import React, {useContext} from 'react';

import ContentContext from '../context';
import userIcon from '../img/user.png';
import '../css/Nav.css';

export default function Nav() {
  const {state, dispatch} = useContext(ContentContext);
  return (
    <nav>
      <h1> Changelog </h1>{' '}
      <div>
        <div
          className="avatar-icon"
          onClick={() =>
            dispatch({
              type: 'TOGGLE_MODAL'
            })
          }
        >
          <img src={userIcon} alt="User Icon" />
        </div>{' '}
        {state.cards.length > 0 ? (
          <div className="notification-icon">
            {' '}
            <span> {state.cards.length} </span>{' '}
          </div>
        ) : null}{' '}
      </div>{' '}
    </nav>
  );
}
