export function checkCollision(rect1, rect2) {
  //rect 0: x, 1: y, 2: width, 3: height
  if(rect1[0] + rect1[2] > rect2[0] && rect1[0] < rect2[0] + rect2[2] &&
    rect1[1] + rect1[3] > rect2[1] && rect1[1] < rect2[1] + rect2[3]) {
      return true;
  }
  return false;
}