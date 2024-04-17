"use client";
import React from "react";
import Header from "../login/component/header";
import MenuList from "./component/MenuList";

const Menu = () => {
  return (
    <div className="flex flex-col gap-7">
      <Header className="scroll-mb-2.5" />
      <ul className="w-9/12 m-0 m-auto mt-28">
        <MenuList />
      </ul>
    </div>
  );
};

export default Menu;
