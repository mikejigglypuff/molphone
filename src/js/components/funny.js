export class Funny {
  #curfunny;
  //-1 = 플레이 X, 0 = 인터넷, 1 = 유튜브, 2 = 카톡, 3 = 게임
  #funnies;
  #maxfunnies;
  #pos;
  #size;

  constructor(curfunny, funnies, maxfunnies, pos, size) {
    this.#curfunny = curfunny;
    this.#funnies = funnies;
    this.#maxfunnies = maxfunnies;
    this.#pos = pos;
    this.#size = size;
  }

  get getFunnies() { return this.#funnies; }
  get getCurfunny() { return this.#curfunny; }
  setCurfunny(n) { this.#curfunny = n; }

  changeFunnies(n) {
    var cur = this.#curfunny;
    if(cur >= 0 && cur <= 3) {
      this.#funnies[cur] = Math.min(this.#maxfunnies[cur], this.#funnies[cur] + n);
    }
  }

  drawFunnies(ctx) {
    var i;
    for(i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'DodgerBlue';
      ctx.strokeStyle = 'MidnightBlue';
      ctx.rect(this.#pos[0], this.#pos[1] + (this.#size[1] + this.#size[2]) * i, 
        this.#size[0], this.#size[1]);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.fillStyle = 'DarkTurquoise';
      ctx.rect(this.#pos[0], this.#pos[1] + (this.#size[1] + this.#size[2]) * i,
        Math.floor(this.#size[0] * this.#funnies[i] / this.#maxfunnies[i]), this.#size[1]);
      ctx.fill();
      ctx.closePath();
    }
  }
}