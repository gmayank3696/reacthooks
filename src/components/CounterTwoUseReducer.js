import React, { useReducer } from "react";

const initialState = {
    firstCounter:0
};

const reducer = (state, action) => {
  if (action.type === "increament") {
    return { firstCounter: state.firstCounter + action.value}
  } else if (action.type === "decreament") {
    return {firstCounter: state.firstCounter - action.value};
  } else if (action.type === "reset") {
    return initialState;
  } else {
    return {firstCounter: state.firstCounter};
  }
};

function CounterTwoUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Counter :- {count.firstCounter}
      <br />
      <button onClick={() => dispatch({type: "increament", value: 10})}>Increament</button>
      <button onClick={() => dispatch({type: "decreament", value: 10})}>Decreament</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  );
}

export default CounterTwoUseReducer;
