"use client";
import NameInput from "./component/form";
import Header from "./component/header";

const Login = () => {
  return (
    <div className="relative w-full text-base tracking-widest leading-6 text-stone-700">
      <div className="flex items-center justify-center min-h-screen ">
        <Header />
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-center text-3xl mb-5">
            The best pizza.
            <span className="text-yellow-500">
              Straight out of the oven, straight to you.
            </span>
          </h1>
          <p className="mb-7">
            👋 Welcome! Please start by telling us your name:
          </p>
          <NameInput />
        </div>
      </div>
    </div>
  );
};

export default Login;
