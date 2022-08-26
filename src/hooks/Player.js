import { useState } from 'react';
import { apps } from '../Utilities';

const Player = () => {
  const [player, setPlayer] = useState({
    pos: {
      x: 0,
      y: 0,
    },
    size: {
      width: 0,
      height: 0,
    },
    playing: false,
  });

  const [funnies, setFunnies] = useState({
    curfunny: null,
    funny: [0, 0, 0, 0],
    maxfunny: [0, 0, 0, 0],
    pos: {
      x: 0,
      y: 0,
    },
    size: {
      width: 0,
      height: 0,
    },
    margin: 0,
  });

  const togglePlaying = () => {
    setPlayer((cur) => ({
      ...cur,
      playing: !cur.playing,
    }));
  };

  const changeFunnies = (k) => {
    setFunnies((cur) => ({
      ...cur,
      funny: (() => {
        const newfunny = cur.funny.slice();
        
      }),
      playing: apps[k],
    }));
  };

  return [player, setPlayer, funnies, setFunnies, 
    togglePlaying, changeFunnies];
}

export default Player;