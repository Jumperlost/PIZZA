"use client";
import React, { useState } from "react";
import { useReducer } from "react";
import Header from "../login/component/header";

const Counter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return Math.max(state - 1, 0);
      case "Reset":
        return 0;
      case "Value":
        return state + +action.payload;
      case "DecrementValue":
        return Math.max(state - +action.payload, 0);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    dispatch({
      type: "Increment",
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "Decrement",
    });
  };
  const handleReset = () => {
    dispatch({
      type: "Reset",
    });
  };
  const handleValue = () => {
    dispatch({
      type: "Value",
      payload: value,
    });
  };
  const handleDecrementValue = () => {
    dispatch({
      type: "DecrementValue",
      payload: value,
    });
  };

  return (
    <div className="flex w-3/12 m-0 m-auto text-center gap-3 flex-col ">
      <Header />
      <div className="mt-64">Counter:{state}</div>
      <button
        className="px-3 py-3 h-max rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 focus:ring focus:outline-none ease-in duration-300"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        className="px-3 py-3 h-max rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 focus:ring focus:outline-none ease-in duration-300"
        onClick={handleDecrement}
      >
        Decrement
      </button>
      <button
        className="px-3 py-3 h-max rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 focus:ring focus:outline-none ease-in duration-300"
        onClick={handleReset}
      >
        Reset
      </button>
      <>
        <input
          className="px-4 py-3 border rounded border-solid  border-gray-600 focus:outline-yellow-500 text-base/[10px]"
          type="number"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <div className="flex flex-row gap-2">
          <button
            className="px-3 py-3 h-max rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 focus:ring focus:outline-none ease-in duration-300"
            onClick={handleDecrementValue}
          >
            Decrement by value
          </button>
          <button
            className="px-3 py-3 h-max rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 focus:ring focus:outline-none ease-in duration-300"
            onClick={handleValue}
          >
            Increment by value
          </button>
        </div>
      </>
    </div>
  );
};

export default Counter;
