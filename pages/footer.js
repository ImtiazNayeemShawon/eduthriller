import React from "react";
import Zip from "../public/zip.png";
import Image from "next/image";

export default function footer() {
  return (
    <React.Fragment>
      <footer className=" bg-gray-200 rounded-lg shadow  mt-10 outline outline-1 outline-gray-300">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between text-gray-9000">
            <a
              href="https://thezipbox.com/"
              className="flex items-center mb-4 sm:mb-0 uppercase text-2xl font-bold"
            >
              <Image src={Zip} alt="zipbox" width={90} />
              zipbox
              <br />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0 ">
              <li>
                <a
                  href="https://www.facebook.com/imtinayeem"
                  target="blank"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Developer contact
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/AdminPageaccesoashdsagdtsrgt324234234dssddffdfdsf"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Admin pannel
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-900 sm:text-center ">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Eduthriller™
            </a>
            . All Rights Reserved.{" "}
            <a
              href="https://www.facebook.com/zipboxs"
              target="blank"
              className="text-blue-800 font-bold hover:text-green-500 duration-100"
            >
              Developed by ZIPBOX
            </a>
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
}
