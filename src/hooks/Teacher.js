import { useState } from 'react';

const Teacher = () => {
  const [teacher, setTeacher] = useState({
    pos: {
      x: 0,
      y: 0,
    },
    size: {
      width: 0,
      height: 0,
    },
    dir: -1,
  });

  const [vision, setVision] = useState({
    pos: {
      x: 0,
      y: 0,
    },
    size: {
      width: 0,
      height: 0,
    },
    start: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  });

  return [teacher, setTeacher, vision, setVision];
};

export default Teacher;