import { useRef, useEffect } from 'react';

import Player from '../hooks/Player';
import Teacher from '../hooks/Teacher';
import { checkCollision } from '../Utilities';

const apps = ['internet', 'streaming', 'messenger', 'game'];

const Game = () => {
  const [player, setPlayer, funnies, setFunnies] = Player();
  const [teacher, setTeacher, vision, setVision] = Teacher();
  const canvas = useRef(null);

  useEffect(() => {
    setPlayer({
      pos: { x: 450, y: 550, }, 
      size: { width: 80, height: 90, },
      playing: false,
    });

    setFunnies({
      curfunny: null,
      funny: [0, 0, 0, 0],
      maxfunny: [100, 100, 100, 100],
      pos: { x: 25, y: 10, }, 
      size: { width: 400, height: 50, },
    });

    setTeacher({
      pos: { x: 150, y: 180, }, 
      size: { width: 90, height: 95, },
      dir: 1,
    });

    setVision({
      pos: { x: 400, y: 500, },
      size: { width: 150, height: 200, },
      start: { x: 185, y: 219, width: 20, height: 16, },
    });

    document.addEventListener('keydown', keydownhandle, false);
    document.addEventListener('keyup', keyuphandle, false);
  }, []);

  const keydownhandle = (e) => {
    if(player.playing === true) {
      if(e.keyCode >= 49 && e.keyCode <= 52) {
        const k = e.keyCode - 49;
        setFunnies((cur) => ({
          ...cur,
          funny: (() => {
            return [
              ...cur.funny.slice(0, k),
              ...[cur.funny[k] + 1],
              ...cur.funny.slice(Math.min((k + 1), 3)),
            ];
          }),
          playing: apps[k],
        }));
      }
    }
  };

  const keyuphandle = (e) => {
    if(e.keyCode === 90) {
      setPlayer((cur) => ({
        ...cur,
        playing: !cur.playing,
      }));
      console.log(player.playing);
      if(checkCollision(player, teacher.dir, vision)) {
        console.log('collided');
      }
    }
    
  }

  const drawplayer = (ctx) => {
    ctx.beginPath();
    ctx.rect(player.pos.x, player.pos.y, player.size.width, player.size.height);
    ctx.fillStyle = (player.playing === true) ? 'IndianRed' : 'LightSkyBlue';
    ctx.fill();
    ctx.closePath();
  };

  const drawteacher = (ctx) => {
    ctx.beginPath();
    ctx.rect(teacher.pos.x, teacher.pos.y, teacher.size.width, teacher.size.height);
    ctx.fillStyle = (teacher.dir === 1) ? 'Blue' : 'DarkBlue';
    ctx.fill();
    ctx.closePath();
  };

  const drawvision = (ctx) => {
    if(teacher.dir === 1) {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
      ctx.rect(vision.pos.x, vision.pos.y, vision.size.width, vision.size.height);
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(vision.start.x, vision.start.y, vision.start.width, vision.start.height);
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(vision.start.x, vision.start.y);
      ctx.lineTo(vision.pos.x, vision.pos.y);
      ctx.lineTo(vision.pos.x + vision.size.width, vision.pos.y);
      ctx.lineTo(vision.start.x + vision.start.width, vision.start.y);
      ctx.lineTo(vision.start.x, vision.start.y);
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      if(vision.start.x + vision.start.width / 2 > vision.pos.x + vision.size.width / 2) {
        ctx.moveTo(vision.start.x + vision.start.width, vision.start.y);
        ctx.lineTo(vision.pos.x + vision.size.width, vision.pos.y);
        ctx.lineTo(vision.pos.x + vision.size.width, vision.pos.y + vision.size.height);
        ctx.lineTo(vision.start.x + vision.start.width, vision.start.y + vision.start.height);
        ctx.lineTo(vision.start.x + vision.start.width, vision.start.y);
      } else if(vision.start.x + vision.start.width / 2 < vision.pos.x + vision.size.width / 2) {
        ctx.moveTo(vision.start.x, vision.start.y);
        ctx.lineTo(vision.pos.x, vision.pos.y);
        ctx.lineTo(vision.pos.x, vision.pos.y + vision.size.height);
        ctx.lineTo(vision.start.x, vision.start.y + vision.start.height);
        ctx.lineTo(vision.start.x, vision.start.y);
      }
      ctx.fill();
      ctx.closePath();
    }
  };

  const draw = (ctx) => {
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    drawplayer(ctx);
    drawteacher(ctx);
    drawvision(ctx);
  };

  useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    draw(ctx);

  }, [player, teacher]);

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