import { Player } from './components/player';
import { Funny } from './components/funny';
import { Teacher } from './components/teacher';
import { Vision } from './components/vision';
import { Smartphone, Smartphone } from './components/smartphone';

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
