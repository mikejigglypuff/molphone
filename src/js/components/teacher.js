class Teacher {
  #pos
  #size
  #dir

  constructor(pos, size, dir) {
    this.#pos = pos;
    this.#size = size;
    this.#dir = dir;
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