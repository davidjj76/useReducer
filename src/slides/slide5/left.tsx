// here, the action will be the event from input
function reducer(state, event) {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
}
