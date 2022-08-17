class Controls {
  constructor() {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;

    this.#addKeyBoardListener();
  }
  #addKeyBoardListener() {
    document.onkeydown = (e) => {
      switch (e.key) {
        case "w":
          this.forward = true;
          break;
        case "a":
          this.left = true;
          break;
        case "d":
          this.right = true;
          break;
        case "s":
          this.reverse = true;
          break;
      }
    };
    document.onkeyup = (e) => {
      switch (e.key) {
        case "w":
          this.forward = false;
          break;
        case "a":
          this.left = false;
          break;
        case "d":
          this.right = false;
          break;
        case "s":
          this.reverse = false;
          break;
      }
    };
  }
}
