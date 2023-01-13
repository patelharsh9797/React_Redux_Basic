import React from "react";
import { createStore } from "redux";

const SimpleRedux = () => {
  // TODO ACTIONS:
  const increment = () => {
    return {
      type: "INCREMENT",
    };
  };
  const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };

  // TODO REDUCER
  const counter = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;

      case "DECREMENT":
        return state - 1;

      default:
        return state;
    }
  };

  //   TODO Creating STORE
  let store = createStore(counter);
  store.subscribe(() => console.log(store.getState()));

  //   TODO Dispatch
  //   store.dispatch({ type: "INCREMENT" });
  //   store.dispatch({ type: "DECREMENT" });
  //   store.dispatch(increment());
  //   store.dispatch(decrement());
  //   store.dispatch(decrement());

  return (
    <div>
      <h1>SimpleRedux</h1>
    </div>
  );
};

export default SimpleRedux;
