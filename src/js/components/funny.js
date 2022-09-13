class Funny {
  #curfunny
  #funnies
  #maxfunnies
  #pos
  #size

  constructor(curfunny, funnies, maxfunnies, pos, size) {
    this.#curfunny = curfunny;
    this.#funnies = funnies;
    this.#maxfunnies = maxfunnies;
    this.#pos = pos;
    this.#size = size;
  }

  get getFunnies() { return this.#funnies; }
  set setCurfunny(n) { this.#curfunny = n; }

  changeFunnies(n) {
    var cur = this.#curfunny;
    if(cur >= 1 && cur <= 4) {
      this.#funnies[cur] = Math.min(this.#maxfunnies[cur], this.#funnies[cur] + n);
    }
  }

  drawFunnies(ctx) {
    var i;
    for(i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'DodgerBlue';
      ctx.strokeStyle = 'MidnightBlue';
      ctx.rect(this.#pos[i][0], this.#pos[i][1] + (this.#size[1] + this.#size[2]) * i, 
        this.#size[0], this.#size[1]);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.fillStyle = 'DarkTurquoise';
      ctx.rect(this.#pos[i][0], this.#pos[i][1] + (this.#size[1] + this.#size[2]) * i,
        Math.floor(this.#size[0] * this.#funnies[i] / this.#maxfunnies[i]), this.#size[1]);
      ctx.fill();
      ctx.closePath();
    }
  }
}