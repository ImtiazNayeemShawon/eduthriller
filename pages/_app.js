import "@/styles/globals.css";
import React from "react";
import Navbar from "./Navbar";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="m-10 max-sm:m-2">
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  );
}
