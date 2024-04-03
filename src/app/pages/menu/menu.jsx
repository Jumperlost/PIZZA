"use client";
import { useEffect, useState } from "react";
import MenuItem from "./component/MenuItem";
import Header from "../login/component/header";

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    const getAllPizzas = async () => {
      try {
        const response = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setPizzas(data.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getAllPizzas();
  }, []);

  const menuList = pizzas.map((pizza) => {
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
        {!pizza.soldOut && <MenuItem />}
      </li>
    );
  });
  return (
    <div className="flex flex-col gap-7">
      <Header className="scroll-mb-2.5" />
      <ul className="w-9/12 m-0 m-auto mt-28">{menuList}</ul>
    </div>
  );
};

export default Menu;
