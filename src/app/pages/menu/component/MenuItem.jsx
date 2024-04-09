"use client";
import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";

const MenuItem = ({ pizza }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 0));
  const reset = () => setCount(0);
  return (
    <li
      className="md:flex justify-between items-end w-4/5 border-b gap-y-3.5 py-2 px-0"
      key={pizza.id}
    >
      <div className="md:flex w-3/5">
        <img
          className={`w-24 h-24 mr-5 ${
            pizza.soldOut
              ? "opacity-40"
              : "hover:scale-125 ease-in duration-300"
          }`}
          src={pizza.imageUrl}
          alt={pizza.name}
        />
        <div className="flex flex-col w-4/5">
          <p className="font-extrabold">{pizza.name}</p>
          <p className="italic mb-2.5 mr-2">{pizza.ingredients.join(", ")}</p>
          <div className="flex item-center justify-between">
            {pizza.soldOut === false ? (
              <p className="text-sm">€{pizza.unitPrice}</p>
            ) : (
              <p className="text-lg">Sold Out</p>
            )}
          </div>
        </div>
      </div>
      {!pizza.soldOut && count === 0 ? (
        <button
          className="px-3 py-3 h-max rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 focus:ring focus:outline-none ease-in duration-300"
          onClick={increment}
        >
          Add to card
        </button>
      ) : (
        <div className="flex flex-row gap-2  justify-center items-center">
          <button onClick={increment}>
            <IoAddCircleOutline className="hover:scale-125" />
          </button>
          <span className="select-none">{count}</span>
          <button onClick={decrement}>
            <CiCircleMinus className="hover:scale-125" />
          </button>
          <button
            className="px-3 py-3 h-max rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 focus:ring focus:outline-none ease-in duration-300"
            onClick={reset}
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
