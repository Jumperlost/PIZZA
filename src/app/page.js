"use client";
import React from "react";
import RootLayout from "./layout";
import "./globals.css";
// import Menu from "./pages/menu/menu";
import Login from "./login/page";

function Home({}) {
  return (
    <RootLayout>
      <Login />
    </RootLayout>
  );
}

export default Home;
