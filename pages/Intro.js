import Image from "next/image";
import React from "react";
import Img from "../public/side.png";
import Link from "next/link";

export default function Intro() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 bg-gray-900 rounded-lg mt-20 h-3/4		max-sm:grid-cols-1 max-sm:mt-10">
        {/* intor section  */}
        <div className="mx-10 max-sm:mx-4 mt-20">
          <h1 className="mt-20 text-5xl font-bold bangfont leading-relaxed	text-gray-200 max-sm:text-4xl">
            নিজের শেখা নিজেই গুছিয়ে নেয়ার যাত্রা শুরু হোক
          </h1>
          <br />
          <p className="mainfont text-lg text-green-400 font-semibold  text-left	uppercase max-sm:text-sm max-sm:text-center">
            স্বপ্নের কলেজে সফল হোন, একটি চমৎকার Eduthriller সঙ্গে যেখানে আপনি
            নতুন ও স্বাদমত শিক্ষা অর্জন করবেন সম্পূর্ণ আনন্দের সাথে।
          </p>
          <br />
          <div className="flex justify-between mt-20 mb-20 max-sm:justify-around max-sm:mt-5">
            <Link
              href="/signup"
              className="text-center rounded-lg uppercase font-bold text-gray-200 bg-green-500 w-60 max-sm:text-sm py-3 max-sm:w-40"
            >
              Get started
            </Link>

            <button className="  rounded-lg uppercase font-bold text-gray-200 bg-green-500  w-60 max-sm:text-sm max-sm:w-40">
              Watch now
            </button>
          </div>
        </div>
        <div>
          <Image src={Img} alt="def" />
        </div>
      </div>
    </React.Fragment>
  );
}
