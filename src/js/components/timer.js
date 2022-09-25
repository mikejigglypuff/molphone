export class Timer {
  #pos;
  #size;
  #time;
  #curtime;

  constructor(pos, size, time) {
    this.#pos = pos;
    this.#size = size;
    this.#time = time;
    this.#curtime = this.#time
  }

  get getTime() { return this.#time; }

  drawTimer(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "000000";
    ctx.arc(this.#pos[0], this.#pos[1], this.#size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "FFFFFF";
    ctx.arc(this.#pos[0], this.#pos[1], this.#size, 0, 
      2 * Math.PI * (this.#curtime / this.#time));
    ctx.fill();
    ctx.closePath();

    ctx.font = "16px Arial";
    ctx.fillStyle = "#888888";
    ctx.fillText("Time: " + this.#curtime, this.#pos[0], this.#pos[1]);

    this.#curtime -= 1;
  }
}