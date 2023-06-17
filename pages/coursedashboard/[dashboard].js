import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Api from "../api/apiCaller";
import Navbar from "../Navbar";

export default function dashboard() {
  const router = useRouter();
  const { dashboard } = router.query;
  const [Data, setData] = useState("");
  const [Loading, setLoading] = useState(true);
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

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await Api.get(`/crud/courseDashBoard/${dashboard}`);
        setData(response.data.courseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchDataById();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dashboard]);

  console.log(Data.groupLink);

  return (
    <React.Fragment>
      <Navbar />
      {Loading ? (
        <div className="h-screen">{LazyLoading}</div>
      ) : (
        <div className="mt-0 ">
          <div className="mt-20 pt-20 p-10 h-60 bg-gray-900 rounded-lg">
            <h1 className="text-3xl font-bold bangfont max-sm:text-2xl max-sm:text-center text-white ">
              {Data.title}
            </h1>
          </div>
          <div className="grid grid-cols-8">
            <div></div>
            <div className="col-span-6 bg-gray-100 rounded-md min-h-60 mt-2 shadow-lg ">
              <div className="flex justify-between mt-5">
                <a
                  href={Data.routine}
                  className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                  download>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Download Routine
                  
                </a>
                <a href={Data?.groupLink} target="blank">
                  <button
                    type="button"
                    Target="blank"
                    className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                  >
                    <svg
                      className="w-6 h-6 mr-2 -ml-1"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                      />
                    </svg>
                    Join Facebook private group
                  </button>
                </a>
              </div>
              {/* quiz data  */}
              {Data.quizes.map((q, index) => (
                <div key={index} className="mt-5 flex justify-between bg-gray-200 py-4 px-5 shadow-sm rounded-md">
                  <h1 className="text-xl font-semibold text-black">
                    {q.title} quiz
                  </h1>
                  <button
                    type="button"
                    onClick={()=>router.push(`/quizes/${q?._id}`)}
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 "
                  >
                    Start exam now
                  </button>
                </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
