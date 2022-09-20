export class Smartphone {
  #pos
  #size
  #display
  //0: pos, 1: size, 2: turning on|off
  #apps
  //0: pos, 1: size, 2: color, 3: margin, 4: font, 5: text, 6: textcolor

  constructor(pos, size, display, apps) {
    this.#pos = pos;
    this.#size = size;
    this.#display = display;
    this.#apps = apps;
  }

  get getApps() { return this.#apps; }

  appclicked(x, y) {
    var i;
    for(i = 0; i < this.#apps[0][0].length; i++) {
      if(x > this.#apps[0][0][i] && x < this.#apps[0][0][i] + this.#apps[1][0] &&
        y > this.#apps[0][1][i] && y < this.#apps[0][1][i] + this.#apps[1][1]) {
          return i;
      }
    }
    return -1;
  }

  turning() { this.#display[2] = !this.#display[2]; }

  drawPhone(ctx, curfunny) {
    ctx.beginPath();
    ctx.fillStyle = 'Black';
    ctx.rect(this.#pos[0], this.#pos[1], this.#size[0], this.#size[1]);
    ctx.fill();
    ctx.closePath();

    if(this.#display[2]) {
      ctx.beginPath();
      ctx.fillStyle = 'LightGreen';
      ctx.rect(this.#display[0][0], this.#display[0][1], 
        this.#display[1][0], this.#display[1][1]);
      ctx.fill();
      ctx.closePath();

      switch(curfunny) {
        default:
          var i;
          for(i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.fillStyle = this.#apps[2][i];
            ctx.rect(this.#apps[0][0][i], this.#apps[0][1][i], 
              this.#apps[1][0], this.#apps[1][1]);
            ctx.fill();
            ctx.closePath();
            ctx.font = this.#apps[4];
            ctx.fillStyle = this.#apps[6];
            ctx.textAlign = "center";
            ctx.fillText(this.#apps[5][i], this.#apps[0][0][i] + Math.floor(this.#apps[1][0] / 2),
            this.#apps[0][1][i] + this.#apps[1][1] + this.#apps[3]);
          }
          break;
        
      }
    }
  }

}