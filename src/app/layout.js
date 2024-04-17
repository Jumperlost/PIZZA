"use client";
import { Recursive } from "next/font/google";
import "./globals.css";
import { UserProvider } from "../useContext/UserContext";

const roboto_mono = Recursive({
  subsets: ["latin"],
  display: "swap",
});

const metaData = {
  title: "Pizza",
  description: "Pizza",
};

function RootLayout({ children }) {
  return (
    <UserProvider>
      <html lang="en" className={roboto_mono.className}>
        <body className="bg-indigo-50">{children}</body>
      </html>
    </UserProvider>
  );
}

export default RootLayout;
