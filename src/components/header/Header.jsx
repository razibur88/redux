import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../sliceCount";

const Header = () => {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.Counter.counter);
  let handleIncrement = () => {
    dispatch(increment());
  };
  let handledecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="text-center">
      <button onClick={handleIncrement}>+</button>
      <div className="">
        <span>{data}</span>
      </div>
      <button onClick={handledecrement}>-</button>
    </div>
  );
};

export default Header;
