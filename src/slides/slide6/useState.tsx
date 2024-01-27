import { useReducer } from 'react';

function reducer(state, newState) {
  return typeof newState === 'function' ? newState(state) : newState;
}

export function useState(initialState) {
  return useReducer(reducer, initialState);
}
