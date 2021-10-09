import React from 'react';
import MultiplayerBlue from '../assets/Multiplayer-blue.svg';
import MultiplayerPink from '../assets/Multiplayer-pink.svg';
import MultiplayerPurple from '../assets/Multiplayer-purple.svg';
import MultiplayerGreen from '../assets/Multiplayer-green.svg';
import MultiplayerRed from '../assets/Multiplayer-red.svg';

export default function Multiplayer({ children }) {
  return (
    <div className='arrows'>
      <img
        src={MultiplayerBlue}
        alt='multiplayer-cursor'
        className='multiplayer-1 multiplayer'
      />
      <img
        src={MultiplayerPurple}
        alt='multiplayer-cursor'
        className='multiplayer-2 multiplayer'
      />
      <img
        src={MultiplayerPink}
        alt='multiplayer-cursor'
        className='multiplayer-3 multiplayer'
      />
      <img
        src={MultiplayerGreen}
        alt='multiplayer-cursor'
        className='multiplayer-4 multiplayer'
      />
      <img
        src={MultiplayerRed}
        alt='multiplayer-cursor'
        className='multiplayer-5 multiplayer'
      />

      {children}
    </div>
  );
}
