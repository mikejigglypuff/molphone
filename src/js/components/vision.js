export class Vision {
  #pos;
  #size;
  #start;
  //index 0: start.x, 1: start.y, 2: start.width, 3: start.height

  constructor(pos, size, start) {
    this.#pos = pos;
    this.#size = size;
    this.#start = start;
  }

  get getPos() { return this.#pos; }
  get getSize() { return this.#size; }
  get getStart() { return this.#start; }
  get getRect() { return this.#pos.concat(this.#size); }

  setPos(x, y) {
    this.#pos[0] = x;
    this.#pos[1] = y;
  }

  setSize(w, h) {
    this.#size[0] = w;
    this.#size[1] = h;
  }

  setStart(args) {
    var i, l = args.length;
    for(i = 0; i < l; i++) {
      this.#start[i] = args[i];
    }
  }

  drawvision(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
    ctx.rect(this.#start[0], this.#start[1], this.#start[2], this.#start[3]);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(this.#pos[0], this.#pos[1], this.#size[0], this.#size[1]);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.#start[0], this.#start[1]);
    ctx.lineTo(this.#pos[0], this.#pos[1]);
    ctx.lineTo(this.#pos[0] + this.#size[0], this.#pos[1]);
    ctx.lineTo(this.#start[0] + this.#start[2], this.#start[1]);
    ctx.lineTo(this.#start[0], this.#start[1]);
    ctx.fill();
    ctx.closePath();

    if(this.#start[0] + this.#start[2] / 2 > this.#pos[0] + this.#size[0] / 2) {
      ctx.moveTo(this.#start[0] + this.#start[2], this.#start[1]);
      ctx.lineTo(this.#pos[0] + this.#size[0], this.#pos[1]);
      ctx.lineTo(this.#pos[0] + this.#size[0], this.#pos[1] + this.#size[1]);
      ctx.lineTo(this.#start[0] + this.#start[2], this.#start[1] + this.#start[3]);
      ctx.lineTo(this.#start[0] + this.#start[2], this.#start[1]);
    } else if(this.#start[0] + this.#start[2] / 2 < this.#pos[0] + this.#size[0] / 2) {
      ctx.moveTo(this.#start[0], this.#start[1]);
      ctx.lineTo(this.#pos[0], this.#pos[1]);
      ctx.lineTo(this.#pos[0], this.#pos[1] + this.#size[1]);
      ctx.lineTo(this.#start[0], this.#start[1] + this.#start[3]);
      ctx.lineTo(this.#start[0], this.#start[1]);
    }
    ctx.fill();
    ctx.closePath();
  }
}