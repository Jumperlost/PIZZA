import MenuItem from "./MenuItem";
import { useState, useEffect } from "react";

const MenuList = () => {
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
  if (!pizzas || !Array.isArray(pizzas)) {
    return <div>No pizzas data</div>;
  }
  return (
    <ul>
      {pizzas.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default MenuList;
