import { useRef, useEffect, useState, useCallback, useMemo } from 'react';

import Player from '../hooks/Player';
import Teacher from '../hooks/Teacher';
import { checkCollision } from '../Utilities';
import { draw } from '../draw';
import { Smartphone, appclicked } from '../hooks/smartphone';

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

  const [phone, setPhone] = Smartphone({
    pos: { x: 400, y: 550 },
    size: { width: 90, height: 150 },
    display: {
      pos: { x: 405, y: 555 },
      size: { width: 80, height: 140 },
      turning: true,
    },
    apps: {
      pos: { x: [410, 429, 448, 467], y: [560, 560, 560, 560] },
      size: { width: 15, height: 15 },
      color: ['LightSkyBlue', 'Crimson', 'MediumSlateBlue', 'LightSeaGreen'],
      margin: 4,
      font: '6px Arial',
      text: ['인터넷', '우두부', '라인언', '게임'],
      textcolor: '#FFFFFF',
    },
  });

  const [keyinputs, setKeyinputs] = useState({ pressed: false, key: null, });
  const [mouseinputs, setMouseinputs] = useState({ x: null, y: null, });
  const [zoommoved, setZoommoved] = useState(false);
  const canvas = useRef(null);
  const canvasimage = null;

  useEffect(() => {
    document.addEventListener('keydown', keydownhandle);
    document.addEventListener('keyup', keyuphandle);
  }, []);

  const keydownhandle = (e) => {
    setKeyinputs(() => ({ pressed: true, key: e.keyCode, }));
  }; //이벤트 리스너 콜백 함수에선 state 최신 값을 읽어올 수 없으므로 set으로만 state에 접근해야 함

  const keyuphandle = (e) => {
    if(e.keyCode === 90) {
      togglePlaying();
    }
    setKeyinputs(() => ({ presseded: false, key: null, }));
  }

  const mousedownhandle = (e) => {
    setMouseinputs({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    var ctx = canvas.current.getContext('2d');

    if(keyinputs.pressed) {
      console.log(keyinputs.key);
      if(keyinputs.key >= 49 && keyinputs.key <= 52) {
        changeFunnies(keyinputs.key - 49, player, funnies);
      } else if(keyinputs.key === 90 && !zoommoved) {
        setZoommoved(true);
        ctx.translate(100, 100);
        console.log('moved');
      }
    } //이벤트 리스너 대신 useEffect에서 state에 접근
    else if(zoommoved) {
      setZoommoved(false);
      ctx.translate(-100, -100);
    }

    if(mouseinputs.x && mouseinputs.y) {
      const num = appclicked(phone, mouseinputs.x, mouseinputs.y);
      if(num > -1) { changeFunnies(num, player, funnies); }
      setMouseinputs(() => ({ x: null, y: null }));
    }

    draw(canvas, ctx, player, funnies, teacher, vision, phone, canvasimage);

  }, [player, teacher, funnies, vision, keyinputs, mouseinputs]);

  return (
    <div>
      <canvas
        ref={canvas}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={mousedownhandle}
      ></canvas>
    </div>
  );
}

export default Game;