import { Fragment, useReducer, useState } from "react"

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set_value_to_add';
const ADD_VALUE_TO_COUNT = 'add_value_to_count'
const reducer = (state, action) => {
  if (action.type === INCREMENT_COUNT){
    return {
      ...state,
      count: state.count + 1
    }
  }
  if (action.type === DECREMENT_COUNT){
    return {
      ...state,
      count: state.count - 1
    }
  }
  if (action.type === SET_VALUE_TO_ADD){
    return {
      ...state,
      valueToAdd: action.payload
    }
  }

  if (action.type === ADD_VALUE_TO_COUNT){
    return {
      ...state,
      count: state.count + state.valueToAdd,
      valueToAdd: 0
    }
  }

  return state;
}
const Counter = ({initialCount}) => {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type:  INCREMENT_COUNT
    });
  }

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type:  DECREMENT_COUNT
    });
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  }

  return<Fragment>
    <div>Counter : {state.count}</div>
    <div><button onClick={increment}>Increment</button> <button onClick={decrement}>Decrement</button></div>

    <form onSubmit={handleSubmit}>
    <div>Add a lot</div>
    <div>
    <input
      value={state.valueToAdd || ''}
      onChange={handleChange}
     type="number"></input>
    </div>
    <div>
    <button type="submit">Add it!</button>
    </div>
    </form>
  </Fragment>
}

export default Counter;