import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "../redux/actions";

const ReduxCombined = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.myCount);
  const isLogged = useSelector((state) => state.isUser);

  const [incrementBy, setIncrementBy] = useState("");
  const [decrementBy, setDecrementBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h3>Redux_Combined</h3>
      <h4>Counter : {counter}</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="incrementBy"
          value={incrementBy}
          placeholder="Increment By"
          onChange={(e) => {
            setIncrementBy(e.target.value);
          }}
        />
        <input
          type="number"
          name="decrementBy"
          value={decrementBy}
          placeholder="Decrement By"
          onChange={(e) => {
            setDecrementBy(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => dispatch(increment(Number(incrementBy)))}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement(Number(decrementBy)))}>
        Decrement
      </button>
      <button onClick={() => dispatch(login())}>LOGIN</button>

      {isLogged && <h4>Some Private Info. Only when user logged in</h4>}
    </div>
  );
};

export default ReduxCombined;
