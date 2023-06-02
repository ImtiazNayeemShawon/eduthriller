import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="fixed">
        <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-0">
          <div className="container flex  items-right justify-between mx-auto ">
            <Link
              href="/"
              className="uppercase font-bold text-lg py-3 bg-green-500 p-2 rounded-lg"
            >
              Logo{" "}
            </Link>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col p-1 font-bold mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0  uppercase text-sm">
                <Link
                  href="/courses"
                  className=" text-gray hover:text-white hover:bg-green-500 font-bold rounded-lg text-sm px-5 py-3 text-center duration-300"
                >
                  কোর্স সমূহ
                </Link>
                <Link
                  href="/medicaladmission"
                  className=" text-gray hover:text-white hover:bg-green-500 font-bold rounded-lg text-sm px-5 py-3 text-center duration-300"
                >
                  মেডিকেল ভর্তি
                </Link>
                <Link
                  href="/egineeringadmission"
                  className=" text-gray hover:text-white hover:bg-green-500 font-bold rounded-lg text-sm px-5 py-3 text-center duration-300"
                >
                  ইঞ্জিনিয়ারিং ভর্তি
                </Link>
                <Link
                  href="/teachers"
                  className=" text-gray hover:text-white hover:bg-green-500 font-bold rounded-lg text-sm px-5 py-3 text-center duration-300"
                >
                  শিক্ষকগণ
                </Link>
                <Link
                  href="/aboutus"
                  className=" text-gray hover:text-white hover:bg-green-500 font-medium rounded-lg text-sm px-5 py-3 text-center duration-300"
                >
                  About us
                </Link>
                <Link
                  href="/contactus"
                  className=" text-gray hover:text-white hover:bg-green-500 font-medium rounded-lg text-sm px-5 py-3 text-center duration-300"
                >
                  Contact
                </Link>
                <Link
                  href="/login"
                  className=" text-slate-100 hover:text-white bg-green-500 font-medium rounded-lg text-sm px-10 py-3 text-center duration-300"
                >
                  Login
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
