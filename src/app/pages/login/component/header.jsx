"use client";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex items-center	justify-between pt-15px pr-20px pb-15px pl-20px w-full  bg-yellow-500 ">
      <a className="no-underline text-xl text-stone-700" href="/">
        Pizza Day
      </a>
      <div className="w-1/6">
        <NavLink
          to="/"
          className="no-underline cursor-pointer text-xl text-stone-700"
        >
          Login
        </NavLink>
        <NavLink
          to="/menu"
          className="no-underline cursor-pointer ml-4 text-xl text-stone-700"
        >
          Menu
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
