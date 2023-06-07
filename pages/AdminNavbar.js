import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import Api from "./api/apiCaller";


export default function AdminNavbar() {
  const [IsloggedIn, setIsLoggedin] = useState(false);
  const [username, setUserName] = useState("");

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const response = await Api.get("/user/checkLoggedIn");
      const { loggedIn } = response.data;
      const name = response.data.user;
      setIsLoggedin(loggedIn);
      setUserName(name);
    } catch (error) {
       console.log(error.message);
    }
  };
  return (
    <React.Fragment>
      <div className="fixed">
        <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-0">
          <div className="container flex  items-right justify-between mx-auto ">
            {/* <Link
              href="/"
              className="uppercase font-bold text-lg py-3 bg-green-500 p-2 rounded-lg"
            >
              Logo{" "}
            </Link> */}

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col p-1 font-bold mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0  uppercase text-sm">
                <Link
                  href="/User"
                  className=" text-gray hover:text-white hover:bg-green-500 font-bold rounded-lg text-sm px-5 py-3 text-center duration-300"
                >
                  Users
                </Link>
                <Link
                  href="/AddCourse"
                  className=" text-gray hover:text-white hover:bg-green-500 font-bold rounded-lg text-sm px-5 py-3 text-center duration-300"
                >
                  Add course
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
                {/* {IsloggedIn ? (
                  <Link
                    href="/profile"
                    className="flex items-center text-slate-800 hover:text-green-500 bg-green-200 font-medium rounded-lg text-sm px-10 py-3 text-center duration-300 justify-between capitalize"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {username.name && username.name.split(" ")[0]}
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className=" text-slate-100 hover:text-white bg-green-500 font-medium rounded-lg text-sm px-10 py-3 text-center duration-300"
                  >
                    Login
                  </Link>
                )} */}
              </ul>
            </div>
            <div className="md:hidden">
            {/* {IsloggedIn ? (
                  <Link
                    href="/profile"
                    className="flex items-center text-slate-800 hover:text-green-500 font-medium rounded-lg text-sm px-10 py-3 text-center duration-300 justify-between capitalize"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {username.name && username.name.split(" ")[0]}
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className=" text-slate-100 hover:text-white bg-green-500 font-medium rounded-lg text-sm px-10 py-3 text-center duration-300"
                  >
                    Login
                  </Link>
                )} */}
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}