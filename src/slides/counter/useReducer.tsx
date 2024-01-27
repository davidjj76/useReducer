import { useReducer } from 'react';

const reducer = (c: number) => c + 1;

export default function Counter() {
  const [counter, increment] = useReducer(reducer, 0);

  return (
    <div onClick={increment}>Counter: {counter}</div>
  );
}
