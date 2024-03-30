import React, { useState } from "react";
import Counter from "./countPizzas";

const Button = () => {
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

export default Button;
