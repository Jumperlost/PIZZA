"use client";
import React from "react";
import RootLayout from "./layout";
import "./globals.css";
import Menu from "./pages/menu/menu";
import Login from "./pages/login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default Home;
