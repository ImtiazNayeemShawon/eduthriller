import Link from "next/link";
import React from "react";

export default function AdminNavbar() {
  return (
    <React.Fragment>
      <div className="fixed">
        <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-0 mainfont">
          <div className="container flex  items-right justify-between mx-auto ">
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col p-1 font-bold mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0  uppercase text-sm">
                <Link
                  href="/"
                  className=" text-gray hover:text-white hover:bg-green-500 font-bold rounded-lg text-sm px-5 py-3 text-center duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/AdminPage"
                  className=" text-gray hover:text-white hover:bg-green-500 font-bold rounded-lg text-sm px-5 py-3 text-center duration-300"
                >
                  Control pannel
                </Link>
                <Link
                  href="/AddCourse"
                  className=" text-gray hover:text-white hover:bg-green-500 font-bold rounded-lg text-sm px-5 py-3 text-center duration-300"
                >
                  Add course
                </Link>
                <Link
                  href="/adminAllCourse"
                  className=" text-gray hover:text-white hover:bg-green-500 font-bold rounded-lg text-sm px-5 py-3 text-center duration-300"
                >
                  All course
                </Link>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
