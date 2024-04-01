"use client";
import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";
import { NavLink } from "react-router-dom";

//Counter

export const Counter = () => {
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

//Add card button

export const Button = () => {
  const [isVisible, setVisible] = useState(true);
  const handClick = () => {
    setVisible(false);
  };
  return (
    <>
      {isVisible === true ? (
        <button
          onClick={handClick}
          className="px-3 py-3 h-max rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 focus:ring focus:outline-none ease-in duration-300"
        >
          Add to cart
        </button>
      ) : (
        <Counter></Counter>
      )}
    </>
  );
};

export const ButtonBackMain = () => {
  return (
    <NavLink
      to="/"
      className="px-3 py-3 h-max rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 focus:ring focus:outline-none ease-in duration-300"
    >
      Back
    </NavLink>
  );
};
