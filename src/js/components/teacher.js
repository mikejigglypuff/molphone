import { Vision } from './vision.js';

export class Teacher {
  #pos;
  #size;
  #dir;
  #vis;
  #curdelay;
  #delay;
  // 딜레이
  #min_delay;
  #max_delay;
  // 딜레이의 최소/최대 길이

  get getVisionRect() { return this.#vis.getRect; }

  constructor(pos, size, dir, vis, min_delay, max_delay) {
    this.#pos = pos;
    this.#size = size;
    this.#dir = dir;
    this.#vis = new Vision(vis[0], vis[1], vis[2]);
    this.#min_delay = min_delay;
    this.#max_delay = max_delay;
    this.#delay = Math.floor((Math.random() * 
      (this.#max_delay - this.#min_delay) + this.#min_delay));
    this.#curdelay = 0;
  }

  get getDir() { return this.#dir; }

  drawTeacher(ctx) {
    ctx.beginPath();
    ctx.rect(this.#pos[0], this.#pos[1], this.#size[0], this.#size[1]);
    ctx.fillStyle = (this.#dir === true) ? 'Blue' : 'DarkBlue';
    ctx.fill();
    ctx.closePath();
    if(this.#dir === true){
      this.#vis.drawvision(ctx);
    }
    this.#curdelay += 1;
    this.Flip();
  }

  Flip() {
    if(this.#curdelay >= this.#delay) {
      console.log(this.#delay);
      this.toggleDir();
      this.#delay = Math.floor((Math.random() * 
      (this.#max_delay - this.#min_delay) + this.#min_delay));
      this.#curdelay = 0;
    }
  }

  toggleDir() { this.#dir = !this.#dir; }
}