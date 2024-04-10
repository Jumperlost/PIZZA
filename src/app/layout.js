"use client";
import { Recursive } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className={roboto_mono.className}>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
