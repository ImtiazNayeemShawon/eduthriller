import React from "react";
import Image from "next/image";
import SSC from "../public/academic.png";
import Medical from "../public/doctor.png";
import Versity from "../public/versity.png";
import Arc from "../public/architect.png";
import { useRouter } from "next/router";

export default function coursedetails() {
  const router = useRouter();
  return (
    <React.Fragment>
      <div className="mt-20 max-sm:mx-2">
        {/* header text  */}
        <h1 className="text-5xl mainfont text-gray-800 font-semibold text-center max-sm:text-2xl">
          নিজের শেখা নিজেই গুছিয়ে নেয়ার যাত্রা শুরু হোক
        </h1>
        <p className="text-center text-gray-600 text-xl mt-4 max-sm:text-sm">
          যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে
        </p>
        {/* 4 section div */}
        <div
          onClick={() => router.push("/AllCourse")}
          className="grid grid-cols-2 place-items-center mt-10 gap-10 mx-20 max-sm:mx-4 max-sm:grid-cols-1"
        >
          {/* ................ */}
          <div className="grid grid-cols-8 bg-white shadow-sm py-9 w-full rounded-md gap-10 px-10 outline outline-1 outline-gray-200 hover:outline-green-400 duration-300 cursor-pointer max-sm:gap-2 max-sm:px-3 max-sm:py-6 max-sm:outline-gray-200">
            <div className="col-span-2">
              <Image src={SSC} width={70} height={70} className="max-sm:w-14" />
            </div>
            <div className="col-span-5">
              <p className="text-3xl   font-bold text-gray-800 max-sm:text-lg">
                একাডেমিক প্রস্তুতি{" "}
              </p>
              <p className="text-md mt-2 text-gray-700 font-medium max-sm:text-sm">
                SSC ও HSC{" "}
              </p>
            </div>
            <div className="m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          {/* .................... */}
          <div
            onClick={() => router.push("/medicaladmission")}
            className="grid grid-cols-8 bg-white shadow-sm py-9 w-full rounded-md gap-10 px-10 outline outline-1 outline-gray-200 hover:outline-green-400 duration-300 cursor-pointer max-sm:gap-2 max-sm:px-3 max-sm:py-6 max-sm:outline-gray-200"
          >
            <div className="col-span-2">
              <Image
                src={Medical}
                width={70}
                height={70}
                className="max-sm:w-14"
              />
            </div>
            <div className="col-span-5">
              <p className="text-3xl  font-bold text-gray-800 max-sm:text-lg">
                মেডিকেল এডমিশন{" "}
              </p>
              <p className="text-md mt-2 text-gray-700 font-medium max-sm:text-sm">
                মেডিকেল,ডেন্টাল ও AFMC{" "}
              </p>
            </div>
            <div className="m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          {/* ...................... */}
          <div
            onClick={() => router.push("/AllCourse")}
            className="grid grid-cols-8 bg-white shadow-sm py-9 w-full rounded-md gap-10 px-10 outline outline-1 outline-gray-200 hover:outline-green-400 duration-300 cursor-pointer max-sm:gap-2 max-sm:px-3 max-sm:py-6 max-sm:outline-gray-200"
          >
            <div className="col-span-2">
              <Image
                src={Versity}
                width={70}
                height={70}
                className="max-sm:w-14"
              />
            </div>
            <div className="col-span-5">
              <p className="text-3xl  font-bold text-gray-800 max-sm:text-lg">
                ভার্সিটি এডমিশন{" "}
              </p>
              <p className="text-md mt-2 text-gray-700 font-medium max-sm:text-sm">
                সকল ভার্সিটি ও গুচ্ছ{" "}
              </p>
            </div>
            <div className="m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          {/* ............................. */}
          <div
            onClick={() => router.push("/egineeringadmission")}
            className="grid grid-cols-8 bg-white shadow-sm py-9 w-full rounded-md gap-10 px-10 outline outline-1 outline-gray-200 hover:outline-green-400 duration-300 cursor-pointer max-sm:gap-2 max-sm:px-3 max-sm:py-6 max-sm:outline-gray-200"
          >
            <div className="col-span-2">
              <Image src={Arc} width={70} height={70} className="max-sm:w-14" />
            </div>
            <div className="col-span-5">
              <p className="text-3xl  font-bold text-gray-800 max-sm:text-lg">
                ইঞ্জিনিয়ারিং এডমিশন{" "}
              </p>
              <p className="text-md mt-2 text-gray-700 font-medium max-sm:text-sm">
                BUET,CKRUET,MIST ও IUT{" "}
              </p>
            </div>
            <div className="m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* ..................... */}
      </div>
    </React.Fragment>
  );
}
