import React from "react";
import Intro from "./Intro";
import Coursedetails from "./coursedetails";
import Footer from "./footer";
import LatestCourse from "./latestCourse";
import MessangerPlugin from "./MessangerPlugin";

export default function Home() {
  return (
    <React.Fragment>
      <main>
        <Intro />
        <Coursedetails />
        <MessangerPlugin/>
        <LatestCourse />
        <Footer />
      </main>
    </React.Fragment>
  );
}
