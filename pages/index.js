import React from "react";
import Intro from "./Intro";
import Coursedetails from "./coursedetails";
import Navbar from "./Navbar";
import Footer from "./footer";
import LatestCourse from "./latestCourse";

export default function Home() {
  return (
    <React.Fragment>
      <main>
        <Intro />
        <Coursedetails />
        <LatestCourse/>
        <Footer />
      </main>
    </React.Fragment>
  );
}
