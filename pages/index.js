import React from "react";
import Intro from "./Intro";
import Coursedetails from "./coursedetails";
import Navbar from "./Navbar";
import Counter from "./counter";
import Emergency from "./Emergency";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Intro />
        <Counter />
        <Coursedetails />
        <Emergency/>
      </main>
    </React.Fragment>
  );
}
