"use client";
import React from "react";
import RootLayout from "./layout";
import "./globals.css";
import Login from "./login/page";

function Home() {
  return (
    <RootLayout>
      <Login />
    </RootLayout>
  );
}

export default Home;
