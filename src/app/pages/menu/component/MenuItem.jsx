"use client";
import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";

//Counter

const MenuItem = () => {
  const [count, setCount] = useState(0);
  const reset = () => setCount((prevCount) => prevCount - prevCount);
  return count === 0 ? (
    <button
      className="px-3 py-3 h-max rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 focus:ring focus:outline-none ease-in duration-300"
      onClick={() => setCount(count + 1)}
    >
      Add to card
    </button>
  ) : (
    <div className="flex flex-row gap-2  justify-center items-center">
      <button onClick={() => setCount(count + 1)}>
        {" "}
        <IoAddCircleOutline className="hover:scale-125" />
      </button>
      <span className="select-none">{count}</span>
      <button onClick={() => setCount(count - 1)}>
        {" "}
        <CiCircleMinus className="hover:scale-125" />
      </button>
      <button
        className="px-3 py-3 h-max rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 focus:ring focus:outline-none ease-in duration-300"
        onClick={reset}
      >
        Delete
      </button>
    </div>
  );
};

export default MenuItem;
