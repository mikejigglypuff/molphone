class Vision {
  #pos
  #size
  #start 
  //index 0: start.x, 1: start.y, 2: start.width, 3: start.height

  constructor(pos, size, start) {
    this.#pos = pos;
    this.#size = size;
    this.#start = start;
  }

  get getPos() { return this.#pos; }
  get getSize() { return this.#size; }
  get getStart() { return this.#start; }

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

  
}