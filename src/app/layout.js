import { Recursive } from "next/font/google";
import "./globals.css";

export const roboto_mono = Recursive({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Pizza",
  description: "Pizza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto_mono.className}>
      <body>{children}</body>
    </html>
  );
}
