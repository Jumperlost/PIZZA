"use client";
import React, { useState } from "react";
import Button from "./button";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";

const Counter = () => {
  const [isVisible, setVisible] = useState(false);
  const handClick = () => {
    setVisible(true);
  };

  const [count, setCount] = useState(1);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 0));
  const reset = () => setCount((prevCount) => prevCount - prevCount);
  return (
    <div>
      {isVisible || count === 0 ? (
        <Button onClick={handClick}></Button>
      ) : (
        <div className="flex flex-row gap-2  justify-center items-center">
          <button onClick={decrement}>
            <CiCircleMinus className="hover:scale-125" />
          </button>
          <span className="select-none">{count}</span>
          <button onClick={increment}>
            <IoAddCircleOutline className="hover:scale-125" />
          </button>
          <button
            className="px-3 py-3 h-max rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 focus:ring focus:outline-none ease-in duration-300"
            onClick={reset}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Counter;
