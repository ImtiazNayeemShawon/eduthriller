import "@/styles/globals.css";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
      <div className="m-10 max-sm:m-2">
        <Component {...pageProps} />
      </div>
  );
}
