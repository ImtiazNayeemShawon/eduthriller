import React from "react";

export default function Counter() {

    
  return (
    <React.Fragment>
      <div className="justify-around gap-10 grid grid-cols-4 place-content-center mt-20 bg-pink-200 h-40 shadow-xl p-3 rounded-lg max-sm:grid-cols-1 ">
        <div className=" h-full w-full rounded-lg p-2 text-pink-600 ">
          <p className=" text-5xl font-semibold mainfont  text-center">25+</p>
          <h1 className="text-center text-2xl font-semibold mainfont text-gray-600 mt-6">
            শিক্ষার্থী
          </h1>
        </div>

        <div className=" h-full w-full rounded-lg p-2 text-pink-600 ">
          <p className=" text-5xl font-semibold mainfont  text-center">25+</p>
          <h1 className="text-center text-2xl font-semibold mainfont text-gray-600 mt-6">
            শিক্ষক
          </h1>
        </div>
        <div className=" h-full w-full rounded-lg p-2 text-pink-600 ">
          <p className=" text-5xl font-semibold mainfont  text-center">25+</p>
          <h1 className="text-center text-2xl font-semibold mainfont text-gray-600 mt-6">
            Live কোর্স
          </h1>
        </div>
        <div className=" h-full w-full rounded-lg p-2 text-pink-600 ">
          <p className=" text-5xl font-semibold mainfont  text-center">15+</p>
          <h1 className="text-center text-2xl font-semibold mainfont text-gray-600 mt-6">
           hour support
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
}
