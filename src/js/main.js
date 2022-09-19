import { Player } from './components/player.js';
import { Funny } from './components/funny.js';
import { Teacher } from './components/teacher.js';
import { Smartphone } from './components/smartphone.js';

const player = new Player([400, 300], [100, 100], false);
const funny = new Funny(-1, [20, 20, 20, 20], [100, 100, 100, 100], 
  [30, 20], [400, 30, 10]);
const teacher = new Teacher([200, 250], [90, 90], 1, 
  [[300, 250], [150, 150], [235, 285, 10, 10]]);
const smartphone = new Smartphone([400, 550], [90, 150], 
  [[405, 555], [80, 140], true], 
  [[[410, 429, 448, 467], [560, 560, 560, 560]], [15, 15], 
  ['LightSkyBlue', 'Crimson', 'MediumSlateBlue', 'LightSeaGreen'],
  4, '6px Arial', ['인터넷', '우두부', '라인언', '게임'], '#FFFFFF']);

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let zoommoved = false;

document.addEventListener('keydown', KeyDownHandle, false);
document.addEventListener('keyup', KeyUpHandle, false);
document.addEventListener('mousedown', MouseHandle, false);

function KeyDownHandle(e) {

}

function KeyUpHandle(e) {
  const key = e.keyCode;
  if(key === 90) {
    player.togglePlaying();
    if(!zoommoved) {
      zoommoved = true;
      ctx.translate(125, 125);
      ctx.scale(1.25, 1.25);
      ctx.translate(-200, -200);
      console.log('moved');
    }
    else {
      zoommoved = false;
      ctx.translate(200, 200);
      ctx.scale(0.8, 0.8);
      ctx.translate(-125, -125);
      console.log('moved');
    }
  }
  else if(key >= 49 && key <= 52) {
    funny.setCurfunny(key - 49);
    funny.changeFunnies(5);
  }
  
}

function MouseHandle(e) {
  const num = smartphone.appclicked(e.ClientX, e.ClientY);
  if(num > -1) {
    funny.setCurfunny(num);
    funny.changeFunnies(5);
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.drawplayer(ctx);
  funny.drawFunnies(ctx);
  teacher.drawTeacher(ctx);
  smartphone.drawPhone(ctx);

  requestAnimationFrame(draw);
}

draw();