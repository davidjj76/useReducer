// creating the state
const [values, onChange] = useReducer(reducer, {
  username: '',
  password: ''
});

const {username, password} = values;

// "onChange" is stable, no need for useCallback
<input name="username" value={username} onChange={onChange} />
<input name="password" value={password} onChange={onChange} />
