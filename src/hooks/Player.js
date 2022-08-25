import { useState } from "react";

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
  });

  return [player, setPlayer, funnies, setFunnies];
}

export default Player;