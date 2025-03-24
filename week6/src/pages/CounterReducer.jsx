import React, { use, useReducer, useState } from "react";

function CounterReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { count: state.count + 1 };
      case "dec":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <div className="row">
        <span>{state.count}</span>
      </div>
      <div className="row">
        <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
        <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
      </div>
    </div>
  );
}

export default CounterReducer;
