import React from "react";

export default function footer() {
  return (
    <React.Fragment>
      <footer className="bg-footer mt-20 rounded-lg mainfont">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <h1 className="text-gray-700 font-bold text-xl max-sm:text-center">
                Send your mail to alert about updates{" "}
              </h1>
              <input
                placeholder="email"
                className="outline-0 p-2 w-full bg-pink-200 rounded-lg mt-4"
              />
              <button className="text-lg p-2 max-sm:m-auto block max-sm:mt-4 bg-green-500 mt-2 rounded-lg px-20 text-white font-bold uppercase">
                Subscribe!
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  Social
                </h2>
                <ul className="text-gray-600 dark:text-gray-900 font-medium">
                  <li>
                    <a className="hover:underline">Facebook page</a>
                  </li>
                  <li>
                    <a className="hover:underline">Facebook group</a>
                  </li>
                  <li>
                    <a className="hover:underline">Instagram</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className=" text-gray-900  font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline">Admin pannel</a>
                  </li>
                  <li>
                    <a className="hover:underline">Admin pannel</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className="text-gray-900 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div>
            <p className="mainfont text-gray-800">
              {" "}
              © 2023 Eduthriller™. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
