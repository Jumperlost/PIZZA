"use client";
import useFetch from "../../../hook/useFetch";
import { BounceLoader } from "react-spinners";
import { lazy } from "react";
import { Suspense } from "react";

const MenuItem = lazy(() => import("./MenuItem"));

const MenuList = () => {
  const { data, isLoading, error } = useFetch(
    "https://react-fast-pizza-api.onrender.com/api/menu"
  );

  return (
    <ul>
      {error && <li>error</li>}
      {isLoading && (
        <Suspense
          fallback={
            <BounceLoader className="m-0 m-auto mt-64" color="#EAB39D" />
          }
        >
          <BounceLoader className="m-0 m-auto mt-64" color="#EAB39D" />
        </Suspense>
      )}
      {data.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default MenuList;
