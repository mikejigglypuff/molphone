import { useState, useRef } from 'react';

const Teacher = props => {
  const [teacher, setTeacher] = useState({
    pos: {
      x: props.teacher.pos.x,
      y: props.teacher.pos.y,
    },
    size: {
      width: props.teacher.size.width,
      height: props.teacher.size.height,
    },
    dir: props.teacher.dir,
  });

  const [vision, setVision] = useState({
    pos: {
      x: props.vision.pos.x,
      y: props.vision.pos.y,
    },
    size: {
      width: props.vision.size.width,
      height: props.vision.size.height,
    },
    start: {
      x: props.vision.start.x,
      y: props.vision.start.y,
      width: props.vision.start.width,
      height: props.vision.start.height,
    },
  });

  return [teacher, setTeacher, vision, setVision];
};

export default Teacher;