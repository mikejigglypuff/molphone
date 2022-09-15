import { Vision } from "./vision";

export class Teacher {
  #pos
  #size
  #dir
  #vis

  constructor(pos, size, dir, vis) {
    this.#pos = pos;
    this.#size = size;
    this.#dir = dir;
    this.#vis = new Vision(vis[0], vis[1], vis[2]);
  }

  get getDir() { return this.#dir; }

  drawTeacher(ctx) {
    ctx.beginPath();
    ctx.rect(this.#pos[0], this.#pos[1], this.#size[0], this.#size[1]);
    ctx.fillStyle = (this.#dir === 1) ? 'Blue' : 'DarkBlue';
    ctx.fill();
    ctx.closePath();
  }

  toggleDir() { this.#dir = !this.#dir; }
}