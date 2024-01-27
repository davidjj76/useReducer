// creating the state
const [state, dispatch] = useReducer(reducer, {
  isLoading: false,
  data: null,
  error: null,
});

// dispatching actions
dispatch({ type: 'pending' });
dispatch({ type: 'fulfilled', payload: data });
dispatch({ type: 'rejected', payload: error });
