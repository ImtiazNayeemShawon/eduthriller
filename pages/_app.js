import "@/styles/globals.css";
import React from "react";
import Footer from "./footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="m-10 max-sm:m-2 h-screen">
      <Component {...pageProps} />
      <div>
        <Footer />
      </div>
    </div>
  );
}
