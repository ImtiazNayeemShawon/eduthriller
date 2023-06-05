import React from "react";
import Zip from  "../public/zip.png";
import Image from "next/image";

export default function footer() {
  return (
    <React.Fragment>
           <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-10">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
              <Image src={Zip} alt="zipbox" width={50}/>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ZIPBOX</span><br/>
              
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="https://www.facebook.com/zipboxs" target="blank" className="mr-4 hover:underline md:mr-6 ">Developer contact</a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                <a href="/AdminPage" className="mr-4 hover:underline md:mr-6 ">Admin pannel</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Eduthriller™</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </React.Fragment>
  );
}
