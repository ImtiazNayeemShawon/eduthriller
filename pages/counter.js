import React from "react";
import Side from "../public/side.png";
import Image from "next/image";

export default function Counter() {
  return (
    <React.Fragment>
      <div className="mt-40  py-5 rounded-sm">
        <h1 className="text-3xl bangfont font-bold text-center text-white py-6">
          স্কিল ডেভেলপমেন্টের নির্দিষ্ট কোর্সে দারুণ ছাড়!
        </h1>
        <p className="text-center text-gray-200 text-xl mt-0">
          যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে
        </p>
        <div className="grid grid-cols-2 max-sm:grid-cols-1">
          {/* couner section */}
          <div className="grid grid-cols-2 place-items-center gap-x-5 mt-10 max-sm:gap-5">
            {/* first div */}
            <div className="text-white bg-gray-800 px-20 shadow-lg shadow-gray-700/50 rounded-md py-5 max-sm:p-8 max-sm:py-2 outline  outline-green-500 outline-1">
              <h1 className="text-center text-3xl font-bold max-sm:text-xl">
                2000+
              </h1>
              <p className="text-center mainfont font-semibold text-2xl max-sm:text-xl">
                Students
              </p>
            </div>
            {/* first div */}
            <div className="text-white bg-gray-800 px-20 shadow-lg shadow-gray-700/50 rounded-md py-5 max-sm:p-8 max-sm:py-2 outline outline-green-500 outline-1">
              <h1 className="text-center text-3xl font-bold max-sm:text-xl">
                2000+
              </h1>
              <p className="text-center mainfont font-semibold text-2xl max-sm:text-xl">
                Students
              </p>
            </div>
            {/* first div */}
            <div className="text-white bg-gray-800 px-20 shadow-lg shadow-gray-700/50 rounded-md py-5 max-sm:p-8 max-sm:py-2 outline outline-green-500 outline-1">
              <h1 className="text-center text-3xl font-bold max-sm:text-xl">
                2000+
              </h1>
              <p className="text-center mainfont font-semibold text-2xl max-sm:text-xl">
                Students
              </p>
            </div>
            {/* first div */}
            <div className="text-white bg-gray-800 px-20 shadow-lg shadow-gray-700/50 rounded-md py-5 max-sm:p-8 max-sm:py-2 outline outline-green-500 outline-1">
              <h1 className="text-center text-3xl font-bold max-sm:text-xl">
                2000+
              </h1>
              <p className="text-center mainfont font-semibold text-2xl max-sm:text-xl">
                Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
