"use client";
import useFetch from "../../../hook/useFetch";
import MenuItem from "./MenuItem";
import { BounceLoader } from "react-spinners";

const MenuList = () => {
  const { data, isLoading, error } = useFetch(
    "https://react-fast-pizza-api.onrender.com/api/menu"
  );

  return (
    <ul>
      {error && <li>error</li>}
      {isLoading && (
        <BounceLoader className="m-0 m-auto mt-64" color="#EAB39D" />
      )}
      {data.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default MenuList;
