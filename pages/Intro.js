import Image from "next/image";
import React from "react";
import Img from "../public/side.png";
import Link from "next/link";

export default function Intro() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 rounded-lg mt-10 h-3/4	bg-green-100	max-sm:grid-cols-1 max-sm:mt-10 pb-20">
        {/* intor section  */}
        <div className="mx-10 max-sm:mx-4 mt-20 max-sm:mt-2">
          <h1 className="mt-20 text-5xl font-bold bangfont leading-relaxed	text-gray-800 max-sm:text-4xl max-sm:text-left">
            নিজের শেখা নিজেই গুছিয়ে নেয়ার যাত্রা শুরু হোক
          </h1>
          <br />
          <p className="mainfont text-lg text-gray-500 font-semibold  text-left	uppercase max-sm:text-sm max-sm:text-center">
            স্বপ্ন মেডিকেল হলে সারথি হোক Eduthriller
          </p>
          <br />
          
        </div>
      </div>
    </React.Fragment>
  );
}
