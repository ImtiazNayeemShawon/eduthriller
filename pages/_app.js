import "@/styles/globals.css";
import React from "react";
import { MyContextProvider } from "../auth/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <div className="m-10 max-sm:m-1 ">
        <Component {...pageProps} />
        <div></div>
      </div>
    </MyContextProvider>
  );
}
