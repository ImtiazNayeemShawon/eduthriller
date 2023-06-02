import React from "react";
import Intro from "./Intro";
import Coursedetails from "./coursedetails";
import Footer from "./footer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <main>
        <Intro />
        <Coursedetails />
        <Footer />
      </main>
    </React.Fragment>
  );
}
