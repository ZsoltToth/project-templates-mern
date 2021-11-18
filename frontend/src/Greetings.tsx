import React from 'react';

interface GreetingsProps {
  name: string
}

const Greetings:React.FC<GreetingsProps> = (props: GreetingsProps) => {
  return (
        <div>Hello {props.name}</div>
  );
};

export default Greetings;
