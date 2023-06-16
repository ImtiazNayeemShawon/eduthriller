import React, { useState, useEffect } from "react";
import Clock from "../public/clock.gif";
import Image from "next/image";

const Timer = () => {
  const [minute, setMinute] = useState(1);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setSeconds(60); // Restart the timer with the initial value of 10 seconds
    }
  }, [seconds]);

  useEffect(() => {
    if (minute > 0) {
      const timer = setTimeout(() => {
        setMinute((prevMinute) => prevMinute - 1);
      }, 60000);
      return () => clearTimeout(timer);
    }
    // else {
    //   alert("Time is up!");
    // }
  }, [minute]);

  const width = minute * 15;
  const timeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10 max-sm:w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const submitIcon = (
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
        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
      />
    </svg>
  );

  const quizTimer = (
    <div className="grid grid-cols-6 gap-4 max-sm:grid-cols-2 ">
      <div className="max-sm:px-2 max-sm:py-2 max-sm:text-md  bg-yellow-400 w-fit px-5 py-5 rounded-2xl text-xl text-white font-bold tracking-widest flex justify-between gap-1 ">
        {timeIcon}
        <p className="text-center mt-1">
          {minute}M:{seconds}S
        </p>
      </div>
      <div className=" bg-gray-300 col-span-4 h-3 rounded-xl mt-7 max-sm:col-span-3 max-sm:hidden">
        <div
          className="bg-yellow-400  h-3 rounded-xl max-sm:hidden"
          style={{ maxWidth: `${width}px` }}
        ></div>
        <Image src={Clock} width={100} height={100} className="m-auto mt-1" />
      </div>

      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-xl px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit answer
        <svg
          aria-hidden="true"
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );

  return (
    <React.Fragment>
      <h1 className="text-gray-800 text-center text-4xl mainfont font-bold capitalize">
        Start the quiz now{" "}
      </h1>
      <div className="">{quizTimer}</div>
      {/* quiz component */}
      <div className="mt-20">
  <div className="grid grid-cols-2">
    <div>
      <h1 className="text-xl mb-4 font-semibold bangfont">
        একজন 65 বছর বয়সী মহিলা পরামর্শের জন্য আসেন এবং মাথা ঘোরা এবং ক্লান্তি সম্পর্কে অভিযোগ করেন।
      </h1>
      <div className="grid grid-cols-2 text-left gap-y-6 text-md capitalize font-semibold">
        <p>a)question number 1</p>
        <p>b)question number 2</p>
        <p>c)question number 3</p>
        <p>d)question number 4</p>
        <p>e)question number 5</p>
      </div>
      <p className="uppercase mt-5 font-semibold mainfont text-green-800">Select an option</p>
      <label className="flex gap-3 mt-2 capitalize mainfont font-semibold outline py-3 px-2 rounded-md outline-1">
        <input type="radio" className="py-10 bg-gray-500" name="option" value="a" />
        option a
      </label>
      <label className="flex gap-3 mt-2 capitalize mainfont font-semibold outline py-3 px-2 rounded-md outline-1">
        <input type="radio" className="py-10 bg-gray-500" name="option" value="b" />
        option b
      </label>
      <label className="flex gap-3 mt-2 capitalize mainfont font-semibold outline py-3 px-2 rounded-md outline-1">
        <input type="radio" className="py-10 bg-gray-500" name="option" value="b" />
        option b
      </label>
    </div>
  </div>
</div>

    </React.Fragment>
  );
};

export default Timer;
