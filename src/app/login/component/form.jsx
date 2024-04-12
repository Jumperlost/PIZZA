"use client";
import React, { useContext, useState } from "react";
import UserContext from "../../../useContext/UserContext";
import { useRouter } from "next/navigation";

const Form = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center justify-center gap-2.5"
    >
      {children}
    </form>
  );
};

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      required
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className="px-4 py-3 border rounded border-solid  border-gray-600 focus:outline-yellow-500 text-base/[10px]"
    />
  );
};

const Button = () => {
  return (
    <button
      type="submit"
      className="px-4 py-3 font-roboto bg-yellow-500 text-base/[20px] rounded cursor-pointer"
    >
      Login
    </button>
  );
};

const NameInput = () => {
  const { storeUsername } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const router = useRouter();
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    storeUsername(username);
    console.log("Username:", username);
    try {
      await router.push("/menu");
    } catch (error) {
      console.error("Error while pushing to /menu:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={username}
        placeholder="Your name..."
        onChange={handleChange}
      ></Input>
      <Button></Button>
    </Form>
  );
};

export const DisplayName = () => {
  const { username } = useContext(UserContext);
  return <div>Welcome {username}</div>;
};

export default NameInput;
