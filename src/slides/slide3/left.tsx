// defining the reducer
function reducer(state, action) {
  if (action.type === 'pending') {
    return { ...state, isLoading: true };
  }
  if (action.type === 'fulfilled') {
    return { ...state, isLoading: false, data: action.payload };
  }
  if (action.type === 'rejected') {
    return { ...state, isLoading: false, error: action.payload };
  }
  return state;
}
