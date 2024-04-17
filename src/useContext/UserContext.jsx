"use client";
import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  const storeUsername = (name) => {
    setUsername(name);
  };

  return (
    <UserContext.Provider value={{ username, storeUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
