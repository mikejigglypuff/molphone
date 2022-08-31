const drawplayer = (ctx, player) => {
  ctx.beginPath();
  ctx.rect(player.pos.x, player.pos.y, player.size.width, player.size.height);
  ctx.fillStyle = (player.playing === true) ? 'IndianRed' : 'LightSkyBlue';
  ctx.fill();
  ctx.closePath();
};

const drawteacher = (ctx, teacher) => {
  ctx.beginPath();
  ctx.rect(teacher.pos.x, teacher.pos.y, teacher.size.width, teacher.size.height);
  ctx.fillStyle = (teacher.dir === 1) ? 'Blue' : 'DarkBlue';
  ctx.fill();
  ctx.closePath();
};

const drawvision = (ctx, vision, dir) => {
  if(dir === 1) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
    ctx.rect(vision.pos.x, vision.pos.y, vision.size.width, vision.size.height);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(vision.start.x, vision.start.y, vision.start.width, vision.start.height);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(vision.start.x, vision.start.y);
    ctx.lineTo(vision.pos.x, vision.pos.y);
    ctx.lineTo(vision.pos.x + vision.size.width, vision.pos.y);
    ctx.lineTo(vision.start.x + vision.start.width, vision.start.y);
    ctx.lineTo(vision.start.x, vision.start.y);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    if(vision.start.x + vision.start.width / 2 > vision.pos.x + vision.size.width / 2) {
      ctx.moveTo(vision.start.x + vision.start.width, vision.start.y);
      ctx.lineTo(vision.pos.x + vision.size.width, vision.pos.y);
      ctx.lineTo(vision.pos.x + vision.size.width, vision.pos.y + vision.size.height);
      ctx.lineTo(vision.start.x + vision.start.width, vision.start.y + vision.start.height);
      ctx.lineTo(vision.start.x + vision.start.width, vision.start.y);
    } else if(vision.start.x + vision.start.width / 2 < vision.pos.x + vision.size.width / 2) {
      ctx.moveTo(vision.start.x, vision.start.y);
      ctx.lineTo(vision.pos.x, vision.pos.y);
      ctx.lineTo(vision.pos.x, vision.pos.y + vision.size.height);
      ctx.lineTo(vision.start.x, vision.start.y + vision.start.height);
      ctx.lineTo(vision.start.x, vision.start.y);
    }
    ctx.fill();
    ctx.closePath();
  }
};

const drawfunny = (ctx, funnies) => {
  var i;
  for(i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'DodgerBlue';
    ctx.strokeStyle = 'MidnightBlue';
    ctx.rect(funnies.pos.x, funnies.pos.y + (funnies.size.height + funnies.size.margin) * i, 
      funnies.size.width, funnies.size.height);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'DarkTurquoise';
    ctx.rect(funnies.pos.x, funnies.pos.y + (funnies.size.height + funnies.size.margin) * i, 
      Math.floor(funnies.size.width * funnies.funny[i] / funnies.maxfunny[i]), funnies.size.height);
    ctx.fill();
    ctx.closePath();
  }
};

const drawphone = (ctx, player, phone) => {
  if(player.playing) {
    ctx.beginPath();
    ctx.fillStyle = 'Black';
    ctx.rect(phone.pos.x, phone.pos.y, phone.size.width, phone.size.height);
    ctx.fill();
    ctx.closePath();

    if(phone.display.turning) {
      ctx.beginPath();
      ctx.fillStyle = 'LightGreen';
      ctx.rect(phone.display.pos.x, phone.display.pos.y, 
        phone.display.size.width, phone.display.size.height);
      ctx.fill();
      ctx.closePath();

      var i;
      for(i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.fillStyle = phone.apps.color[i];
        ctx.rect(phone.apps.pos.x[i], phone.apps.pos.y[i], 
          phone.apps.size.width, phone.apps.size.height);
        ctx.fill();
        ctx.closePath();
        ctx.font = phone.apps.font;
        ctx.fillStyle = phone.apps.textcolor;
        ctx.textAlign = "center";
        ctx.fillText(phone.apps.text[i], phone.apps.pos.x[i] + Math.floor(phone.apps.size.width / 2),
        phone.apps.pos.y[i] + phone.apps.size.height + phone.apps.margin);
      }
    }
  }
};

export const draw = (canvas, ctx, player, funnies, teacher, vision, phone, canvasimage) => {
  var context = document.createElement('canvas').getContext('2d');
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;
  drawplayer(context, player);
  drawteacher(context, teacher);
  drawvision(context, vision, teacher.dir);
  drawfunny(context, funnies);
  drawphone(context, player, phone);
  canvasimage = new Image();
  canvasimage.src = context.canvas.toDataURL('image/png');
  context = null;
  canvasimage.onload = () => {
    ctx.drawImage(canvasimage, 0, 0, 500, 500, 0, 0, 300, 300);
    console.log('printed');
  }
};