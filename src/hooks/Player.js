import { useState } from 'react';
import { apps } from '../Utilities';

const Player = props => {
  const [player, setPlayer] = useState({
    pos: {
      x: props.player.pos.x,
      y: props.player.pos.y,
    },
    size: {
      width: props.player.size.width,
      height: props.player.size.height,
    },
    playing: props.player.playing,
  });

  const [funnies, setFunnies] = useState({
    curfunny: props.funnies.curfunny,
    funny: props.funnies.funny,
    maxfunny: props.funnies.maxfunny,
    pos: {
      x: props.funnies.pos.x,
      y: props.funnies.pos.y,
    },
    size: {
      width: props.funnies.size.width,
      height: props.funnies.size.height,
      margin: props.funnies.size.margin,
    },
  });

  const togglePlaying = () => {
    setPlayer((cur) => ({
      ...cur,
      playing: !cur.playing,
    }));
  };

  const changeFunnies = (num, player, funnies) => {
    if(player.playing) {
      const newfunny = funnies.funny.slice();
      newfunny[num] = Math.min(newfunny[num] + 5, funnies.maxfunny[num]);

      setFunnies((cur) => ({
        ...cur,
        funny: newfunny,
        curfunny: apps[num],
      }));
    }
  };

  return [player, setPlayer, funnies, setFunnies, 
    togglePlaying, changeFunnies];
}

export default Player;