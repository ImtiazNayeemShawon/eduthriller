import "@/styles/globals.css";
import React from "react";
import Navbar from "./Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="m-10 max-sm:m-1 ">
      <Navbar />
      <Component {...pageProps} />
      <div></div>
    </div>
  );
}
