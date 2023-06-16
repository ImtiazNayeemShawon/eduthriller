import React, { useState, useEffect } from "react";
import Clock from "./clock.gif";
import Image from "next/image";
import Api from "../api/apiCaller";
import { useRouter } from "next/router";

const Quiz = () => {
  const [Data, setData] = useState("");
  const router = useRouter();
  const { quiz } = router.query;

  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await Api.get(`/crud/quizes/${quiz}`);
        setData(response.data.result);
        setMinute(response.data.result.time);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const timeoutId = setTimeout(() => {
      fetchDataById();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [quiz]);

  useEffect(() => {
    if (seconds > 0 && minute > 0) {
      const timer = setTimeout(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (seconds === 0 && minute > 0) {
      setSeconds(59); // Reset seconds to 59 when it reaches 0
      setMinute((prevMinute) => prevMinute - 1); // Decrease the minute value by 1
    }
  }, [seconds, minute]);

  const width = minute * 25;
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
  const LazyLoading = (
    <div>
      <div
        role="status"
        className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center mt-40"
      >
        <div className="w-full">
          <div className="h-2.5 bg-gray-300 rounded-full  w-40 mb-4" />
          <div className="h-2 bg-gray-300 rounded-full  max-w-[480px] mb-2.5" />
          <div className="h-2 bg-gray-300 rounded-full  mb-2.5 max-w-[780px]" />
          <div className="h-2 bg-gray-300 rounded-full  max-w-[440px] mb-2.5" />
          <div className="h-2 bg-gray-300 rounded-full  max-w-[460px] mb-2.5" />
          <div className="h-2 bg-gray-300 rounded-full  max-w-[360px]" />
        </div>
        <div
          role="status"
          className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-center h-48 mb-4 bg-gray-400 rounded ">
            <svg
              className="w-12 h-12 text-gray-200 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300" />
          <div className="flex items-center mt-4 space-x-3">
            <svg
              className="text-gray-200 w-14 h-14 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2" />
              <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400" />
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>

        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
        <div className="flex items-center w-full space-x-2">
          <div className="h-2.5 bg-gray-400 rounded-full  w-32" />
          <div className="h-2.5 bg-gray-300 rounded-full  w-24" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-full" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-400 rounded-full  w-full" />
          <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-24" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[400px]">
          <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-80" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-full" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-full" />
          <div className="h-2.5 bg-gray-300 rounded-full  w-24" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[440px]">
          <div className="h-2.5 bg-gray-300 rounded-full  w-32" />
          <div className="h-2.5 bg-gray-300 rounded-full  w-24" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-full" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[360px]">
          <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-80" />
          <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
  const [Loading, setLoading] = useState(true);

  const onSelect = () => {
    console.log("radio button changed");
  };

  return (
    <React.Fragment>
      {Loading ? (
        <div className="h-screen">{LazyLoading}</div>
      ) : (
        <div>
          <h1 className="text-gray-800 text-center text-4xl mainfont font-bold capitalize">
            Start the quiz now{" "}
          </h1>
          {/* <button onClick={fetchDataById}>start exam</button> */}
          <div className="">{quizTimer}</div>
          {/* quiz component */}
          <div className="mt-20">
            <div className="grid grid-cols-2 place-items-center 	gap-10 max-sm:grid-cols-1 max-sm:gap-2">
              {Data.quiz?.map((quiz, index) => (
                <div className="outline p-4 outline-1 rounded-md  mt-5 w-full	h-full">
                  <h1 className="text-xl mb-4 font-semibold bangfont text-red-900 max-sm:text-md">
                    Q-<span> </span>
                    {index + 1} <span>:</span> {quiz.question}
                  </h1>
                  <div className="grid grid-cols-2 text-left gap-y-6 text-md capitalize font-semibold">
                    <p>a){quiz.option1}</p>
                    <p>b){quiz.option2}</p>
                    <p>c){quiz.option3}</p>
                    <p>d){quiz.option4}</p>
                    <p>e){quiz.option5}</p>
                  </div>
                  <p className="uppercase mt-5 font-semibold mainfont text-green-800">
                    Select an option
                  </p>
                  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      type="radio"
                      value={true}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={onSelect}
                    />
                    <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">
                      {quiz.option1}
                    </label>
                  </div>
                  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      type="radio"
                      value={true}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={onSelect}
                    />
                    <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">
                      {quiz.option2}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Quiz;
