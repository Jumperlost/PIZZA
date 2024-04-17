"use client";
import { Recursive } from "next/font/google";
import "./globals.css";
import { UserProvider } from "../useContext/UserContext";

const roboto_mono = Recursive({
  subsets: ["latin"],
  display: "swap",
});

// const metaData = {
//   title: "Pizza",
//   description: "Pizza",
// };

function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto_mono.className}>
      <UserProvider>
        <body className="bg-indigo-50">{children}</body>
      </UserProvider>
    </html>
  );
}

export default RootLayout;
