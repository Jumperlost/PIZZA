"use client";
import { useState } from "react";
import Pizzas from "../data";
import Counter from "./countPizzas";
import Button from "./button";

const Menu = () => {
  const [isVisible, setVisible] = useState(false);
  const menuList = Pizzas.map((pizza) => {
    return (
      <li
        className="md:flex  justify-between items-end w-4/5 border-b gap-y-3.5 py-2 px-0"
        key={pizza.id}
      >
        <div className="md:flex w-3/5">
          {pizza.soldOut === false ? (
            <img
              className="w-24 h-24 mr-5 hover:scale-125 ease-in duration-300"
              src={pizza.imageUrl}
              alt={pizza.name}
            />
          ) : (
            <img
              className="w-24 h-24 mr-5 opacity-40"
              src={pizza.imageUrl}
              alt={pizza.name}
            />
          )}
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
        {isVisible && <Counter></Counter>}
        {!pizza.soldOut && <Button onClick={() => setVisible(!isVisible)} />}
      </li>
    );
  });
  return <ul className="w-9/12 m-0 m-auto">{menuList}</ul>;
};

export default Menu;
