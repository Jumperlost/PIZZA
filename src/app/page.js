"use client";
import React, { lazy } from "react";
import RootLayout from "./layout";
import "./globals.css";
import { Suspense } from "react";
import { BounceLoader } from "react-spinners";

const Login = lazy(() => import("./login/page"));

function Home() {
  return (
    <RootLayout>
      <Suspense
        fallback={<BounceLoader className="m-0 m-auto mt-64" color="#EAB39D" />}
      >
        <Login />
      </Suspense>
    </RootLayout>
  );
}

export default Home;
