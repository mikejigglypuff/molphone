import { useState } from 'react';

export const Smartphone = props => {
  const [phone, setPhone] = useState({
    pos: { x: props.pos.x, y: props.pos.y },
    size: { width: props.size.width, height: props.size.height },
    display: {
      pos: { x: props.display.pos.x, y: props.display.pos.y },
      size: { width: props.display.size.width, height: props.display.size.height },
      turning: props.display.turning,
    },
    apps: {
      pos: { x: props.apps.pos.x, y: props.apps.pos.y },
      size: { width: props.apps.size.width, height: props.apps.size.height },
      color: props.apps.color,
      margin: props.apps.margin,
    },
  });

  return [phone, setPhone];
}

export const appclicked = (phone, x, y) => {
  var i;
  for(i = 0; i < phone.apps.pos.x.length; i++) {
    if(x > phone.apps.pos.x[i] && x < phone.apps.pos.x[i] + phone.apps.size.width &&
      y > phone.apps.pos.y[i] && y < phone.apps.pos.y[i] + phone.apps.size.height) {
        return i;
    }
  }
  return -1;
};