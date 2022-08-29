export const checkCollision = (player, dir, vision) => {
  if(dir === 1) {
    if(player.pos.x + player.size.width < vision.pos.x ||
      player.pos.x > vision.pos.x + vision.size.width || 
      player.pos.y + player.size.height < vision.pos.y || 
      player.pos.y > vision.pos.y + vision.size.height) {
        return false;
    } else { return true; }
  } else { return; }

};

export const apps = ['internet', 'streaming', 'messenger', 'game'];