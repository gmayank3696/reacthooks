import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  if (action === "increament") {
    return state + 1;
  } else if (action === "decreament") {
    return state - 1;
  } else if (action === "reset") {
    return initialState;
  } else {
    return state;
  }
};

function CounterOneUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Counter :- {count}
      <br />
      <button onClick={() => dispatch("increament")}>Increament</button>
      <button onClick={() => dispatch("decreament")}>Decreament</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterOneUseReducer;
