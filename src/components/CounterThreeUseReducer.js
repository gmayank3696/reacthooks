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

function CounterThreeUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
        Counter using multiple useReducer Calls
      <div>Counter :- {count}</div>
      <button onClick={() => dispatch("increament")}>Increament</button>
      <button onClick={() => dispatch("decreament")}>Decreament</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>
        Counter 2 :- {count2}
        <br />
        <button onClick={() => dispatch2("increament")}>Increament</button>
        <button onClick={() => dispatch2("decreament")}>Decreament</button>
        <button onClick={() => dispatch2("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThreeUseReducer;
