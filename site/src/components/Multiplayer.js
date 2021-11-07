import React from 'react';
import MultiplayerBlue from '../assets/Multiplayer-blue.svg';
import MultiplayerPink from '../assets/Multiplayer-pink.svg';
import MultiplayerPurple from '../assets/Multiplayer-purple.svg';
import MultiplayerGreen from '../assets/Multiplayer-green.svg';
import MultiplayerRed from '../assets/Multiplayer-red.svg';
import PropTypes from 'prop-types';

export default function Multiplayer({ children }) {
  return (
    <div className='arrows'>
      {[
        MultiplayerBlue,
        MultiplayerPurple,
        MultiplayerPink,
        MultiplayerGreen,
        MultiplayerRed,
      ].map((player, id) => {
        return (
          <img
            key={id}
            src={player}
            alt='multiplayer-cursor'
            className={`multiplayer-${id + 1} multiplayer`}
          />
        );
      })}

      {children}
    </div>
  );
}

Multiplayer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};
