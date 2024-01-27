// defining the reducer, no action needed
function reducer(state) {
  if (state === 'red') return 'green';
  if (state === 'green') return 'amber';
  if (state === 'amber') return 'red';
  return state;
}
