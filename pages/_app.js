import "@/styles/globals.css";
import React from "react";
import { AppProvider } from "./Context";

export default function App({ Component, pageProps }) {
  return (
      <AppProvider>
        <div className="m-10 max-sm:m-2">
          <Component {...pageProps} />
          
        </div>
      </AppProvider>
  );
}
