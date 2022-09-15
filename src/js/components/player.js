export class Player {
  #pos;
  #size;
  #playing;

  constructor(pos, size, playing) {
    this.#pos = pos;
    this.#size = size;
    this.#playing = playing;
  }

  get getPos() { return this.#pos; }
  get getPlaying() { return this.#playing; }  

  togglePlaying() {
    this.#playing = !this.#playing;
  }

  drawplayer(ctx) {
    ctx.beginPath();
    ctx.fillStyle = (this.#playing === true) ? 'IndianRed' : 'LightSkyBlue';
    ctx.rect(this.#pos[0], this.#pos[1], this.#size[0], this.#size[1]);
    ctx.fill();
    ctx.closePath();
  }
}