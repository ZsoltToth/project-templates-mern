import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

const Counter:React.FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `${counter}`;
  });

  return (
      <div>
          <h2>Counter: {counter}</h2>
          <Button
              variant={'contained'}
              onClick={() => { setCounter(counter + 1); }}
          >Increase</Button>
          <Button
              variant={'contained'}
              color={'secondary'}
              onClick={() => { setCounter(counter - 1); }}
          >Decrease</Button>
      </div>

  );
};

export default Counter;
