import "@/styles/globals.css";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <div className="m-10 max-sm:m-2">
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  );
}
