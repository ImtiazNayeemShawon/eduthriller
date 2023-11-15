"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import Image from "next/image";
import Logo from "../public/edu.png";
import { useRouter } from "next/router";

export default function Navbar() {
  const [Show, setShow] = useState(false);
  const router = useRouter();
  const handleSidenav = () => {
    setShow(!Show);
  };

  const [username, setUsername] = useState();
  const [IsloggedIn, setIsloggedIn] = useState(false);

  const token = Cookies.get("token");
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(token)
      const username = decodedToken.username;
      setUsername(username);
      const IsloggedIn = decodedToken.loggedIn;
      setIsloggedIn(IsloggedIn);
    }
  }, [token]);

  return (
    <React.Fragment>
      <div className="fixed">
        <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-0">
          <div className="container flex  items-right justify-between mx-auto ">
            <Link
              href="/"
              className="uppercase font-bold text-lg py-3  p-2 rounded-lg"
            >
              <Image
                src={Logo}
                alt="Logo"
                width={100}
                height={100}
                className="max-sm:w-20 h-10 w-40"
              />
            </Link>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col p-1 font-bold mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0  uppercase text-sm">
                <Link
                  href="/AllCourse"
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

                {IsloggedIn ? (
                  <Link
                    href="/myCourse"
                    className=" text-gray hover:text-white hover:bg-green-500 font-bold  rounded-lg text-sm px-5 py-3 text-center duration-300"
                  >
                    আমার কোর্স
                  </Link>
                ) : null}

                {IsloggedIn ? (
                  <Link
                    href="/profile"
                    className="flex items-center text-slate-800 hover:text-green-500 bg-white font-medium rounded-lg text-sm px-10 py-3 text-center duration-300 justify-between capitalize"
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
                    {typeof username === "string" && username.split(" ")[0]}
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className=" text-slate-900 bg-gray-200 hover:text-gray-900  font-medium rounded-lg text-sm px-10 py-3 text-center duration-300 flex justify-around"
                  >
                    Login
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 block m-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>
                )}
              </ul>
            </div>
            <button
              onClick={handleSidenav}
              className="bg-gray-800 text-white px-4 rounded-md hidden max-sm:block"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </nav>
        <div className="">
          {Show && (
            <div className=" fixed p-10  bg-gray-800 w-full rounded hidden max-sm:block transition duration-800 mt-0">
              <button
                onClick={() => router.push("/AllCourse")}
               
                className="hover:bg-blue-500 py-2 w-full px-3 rounded-md bg-gray-700"
              >
                <Link
                  href="/AllCourse"
                  className=" text-gray-100  font-bold rounded-lg text-sm   duration-300 text-center"
                >
                  কোর্স সমূহ
                </Link>
              </button>
              <button
                onClick={() => router.push("/egineeringadmission")}
                className="hover:bg-blue-500 py-2 w-full px-3 rounded-md bg-gray-700 mt-2"
              >
                <Link
                  href="/egineeringadmission"
                  className=" text-gray-100  font-bold rounded-lg text-sm   duration-300 text-center"
                >
                  ইঞ্জিনিয়ারিং ভর্তি
                </Link>
              </button>
              <button
                onClick={() => router.push("/medicaladmission")}
                className="hover:bg-blue-500 py-2 w-full px-3 rounded-md bg-gray-700 mt-2"
              >
                <Link
                  href="/medicaladmission"
                  className=" text-gray-100  font-bold rounded-lg text-sm   duration-300 text-center"
                >
                  মেডিকেল ভর্তি
                </Link>
              </button>
              {IsloggedIn ? (
                <button
                  onClick={() => router.push("/myCourse")}
                  className="hover:bg-blue-500 py-2 w-full px-3 rounded-md bg-gray-700 mt-2"
                >
                  <Link
                    href="/myCourse"
                    className=" text-gray-100 font-bold  rounded-lg text-sm px-5 py-3 text-center duration-300"
                  >
                    আমার কোর্স
                  </Link>
                </button>
              ) : null}
              {IsloggedIn ? (
                <button
                  onClick={() => router.push("/profile")}
                  className="hover:bg-blue-500 py-2 w-full px-3  text-gray-100  font-bold rounded-md bg-gray-700 mt-2 flex justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {typeof username === "string" && username.split(" ")[0]}
                </button>
              ) : (
                <button
                  onClick={() => router.push("/login")}
                  className="hover:bg-blue-500 py-2 w-full px-3 rounded-md  text-gray-100  font-bold bg-gray-700 mt-2"
                >
                  Login
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
