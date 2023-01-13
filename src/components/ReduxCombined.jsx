import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "../redux/actions";

const ReduxCombined = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.myCount);
  const isLogged = useSelector((state) => state.isUser);

  return (
    <div>
      <h3>Redux_Combined</h3>
      <h4>Counter : {counter}</h4>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(2))}>Decrement</button>
      <button onClick={() => dispatch(login())}>LOGIN</button>

      {isLogged && <h4>Some Private Info. Only when user logged in</h4>}
    </div>
  );
};

export default ReduxCombined;
