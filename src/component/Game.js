import { useRef, useEffect, useState } from 'react';

import Player from '../hooks/Player';
import Teacher from '../hooks/Teacher';
import { checkCollision } from '../Utilities';
import { draw } from '../draw';

const Game = () => {
  const [player, setPlayer, funnies, setFunnies, 
    togglePlaying, changeFunnies] = Player({
      player: {
        pos: { x: 400, y: 300, }, 
        size: { width: 100, height: 100, },
        playing: false,
      },
      funnies: {
        curfunny: null,
        funny: [20, 20, 20, 20],
        maxfunny: [100, 100, 100, 100],
        pos: { x: 30, y: 20, },
        size: { width: 400, height: 30, margin: 10, },
      },
    });
  const [teacher, setTeacher, vision, setVision] = Teacher({
    teacher: {
      pos: { x: 200, y: 250, },
      size: { width: 90, height: 90, },
      dir: 1,
    },
    vision: {
      pos: { x: 300, y: 250, },
      size: { width: 150, height: 150, },
      start: { x: 235, y: 285, width: 10, height: 10, },
    },
  });
  const [inputs, setInputs] = useState({
    inputed: false,
    key: null,
  });
  const canvas = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', keydownhandle);
    document.addEventListener('keyup', keyuphandle);
  }, []);

  const keydownhandle = (e) => {
    if(e.keyCode >= 49 && e.keyCode <= 52) {
      const k = e.keyCode - 49;
      setInputs(() => ({ inputed: true, key: k, }));
    }
    
  }; //이벤트 리스너 콜백 함수에선 state 최신 값을 읽어올 수 없으므로 set으로만 state에 접근해야 함

  const keyuphandle = (e) => {
    if(e.keyCode === 90) {
      togglePlaying();
      console.log(checkCollision(player, teacher.dir, vision));
    }
    
  }

  useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    if(inputs.inputed) {
      changeFunnies(inputs.key, funnies);
      setInputs((cur) => ({ inputed: !cur.inputed, key: null}));
    } //이벤트 리스너 대신 useEffect에서 state에 접근

    draw(canvas, ctx, player, funnies, teacher, vision);

  }, [player, teacher, funnies, vision, inputs]);

  return (
    <div>
      <canvas
        ref={canvas}
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
    </div>
  );
}

export default Game;