import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div onClick={() => setCounter(c => c + 1)}>
      Counter: {counter}
    </div>
  );
}
