// creating the state
const [light, change] = useReducer(reducer, 'red');

// "change" has a stable reference so
// can pass down the tree without wrapping in useCallback

change(); // will change to "green"
change(); // will change to "amber"
change(); // will change to "red"

// GREAT! is not possible "green" after "amber"
