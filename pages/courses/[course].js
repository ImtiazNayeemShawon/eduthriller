import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Smp from "./img/smp.webp";
import Api from "../api/apiCaller";
import Footer from "../footer";

export default function Course() {
  const router = useRouter();
  const book = (
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
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
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

  const { course } = router.query;
  const [Data, setData] = useState("");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await Api.get(`/crud/course/${course}`);
        setData(response.data.courseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchDataById();
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [course]);

  const payment = () => {
    router.push(`/payment/${Data._id}`);
  };

  return (
    <React.Fragment>
      <Navbar />
      {Loading ? (
        <div className="h-screen">{LazyLoading}</div>
      ) : (
        <div className=" mt-36 mx-10 max-sm:mt-20 max-sm:mx-1">
          <div className="outline-1 outline outline-slate-300 p-4 md:hidden">
            <div className="w-full h-fit  max-sm:h-30 bg-gray-100  p-2 rounded-md duration-300 ">
              <Image
                src={Data.thumbnail}
                alt="def"
                className=" rounded-md m-auto block"
                width={400}
                height={100}
              />
              <br />
              <p className="text-gray-900 text-3xl font-bold">
                ৳ {Data.price} BDT
              </p>
              <button
                onClick={payment}
                className="m-auto block bg-green-500 text-white w-full py-2 rounded-md font-bold bangfont mt-3"
              >
                কোর্সটি কিনুন{" "}
              </button>
              <div>
                {Data.micros.map((micro, index) => (
                  <ul key={index} className="mt-2">
                    <li className="mt-0 text-gray-700 text-md flex gap-1 bangfont">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-green-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{micro.number}</span>
                      <span>{micro.title}</span>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-sm:mt-20">
            <div className="col-span-2">
              <h1 className="text-3xl font-bold bangfont max-sm:text-2xl max-sm:text-center">
                {Data.title}
              </h1>
              <p className="text-gray-800 bangfont  leading-7 mt-6 course-text text-justify max-sm:text-sm max-sm:mx-3 ">
                {Data.description}
              </p>
              {/* teachers  */}
              <h1 className="mt-20 text-2xl bangfont font-semibold max-sm:mt-10 max-sm:text-xl">
                কোর্স মেন্টরস{" "}
              </h1>
              <div className="grid grid-cols-2 bg-slate-10 outline outline-1 outline-gray-300 mt-5 rounded-md max-sm:grid-cols-1">
                {Data.teachers.map((teacher) => (
                  <div className="px-3 py-2">
                    <p className="text-xl font-semibold mainfont">
                      {teacher.name}
                    </p>
                    <span className="text-sm m-0 leading-3 text-gray-700">
                      {teacher.institute}
                    </span>
                    <br />
                    <span className="text-sm m-0 leading-3 text-gray-700">
                      {teacher.level}
                    </span>
                  </div>
                ))}
              </div>

              {/* Accordion on/off */}
              <h1 className="mt-40 text-2xl bangfont font-semibold max-sm:mt-10 max-sm:text-xl">
                কোর্স সম্পর্কে বিস্তারিত :
              </h1>
              <div className="mt-5 bg-slate-10 outline outline-1 outline-gray-300 rounded-md">
                {Data.about.map((aboutItem) => (
                  <Accordion key={aboutItem._id} className="shadow-sm ">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className="bangfont font-bold text-gray-700 max-sm:text-sm">
                        {aboutItem.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="max-sm:text-sm">
                        {aboutItem.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
              <h1 className="mt-20 text-2xl bangfont font-semibold max-sm:text-xl max-sm:mt-10">
                যেভাবে পেমেন্ট করবেন
              </h1>
              <div className="mt-4 p-3 outline outline-1 outline-green-400 rounded-md">
                <span className="text-gray-900 max-sm:text-sm">
                  {" "}
                  কোর্সটির নিচে দেয়া <b>”কোর্সটি কিনুন” </b>বাটনটিতে ক্লিক করলে
                  আপনার পেমেন্ট প্রক্রিয়া শুরু হয়ে যাবে। পেমেন্ট সম্পর্কে
                  বিস্তারিত জানতে এই ভিডিওটি দেখুন এই ভিডিওটি দেখুন
                </span>
              </div>
              <div>
                <h1 className="mt-20 text-2xl bangfont font-semibold max-sm:text-xl max-sm:mt-10">
                  কোর্সটি করতে যেগুলো প্রয়োজন
                </h1>
                <div className="mt-4 p-3 outline outline-1 outline-green-400 rounded-md max-sm:text-sm">
                  <li>ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)</li>
                  <li>স্মার্টফোন অথবা পিসি</li>
                  <li>ফেইসবুক প্রোফাইল </li>
                </div>
              </div>
            </div>
            {/* course selling side */}
            <div className="outline-1 outline outline-slate-300 p-4 max-sm:hidden h-fit">
              <div className="w-full h-fit  max-sm:h-30 bg-gray-100  p-2 rounded-md duration-300 ">
                <Image
                  src={Data.thumbnail}
                  alt="def"
                  className="w-66 rounded-md m-auto block"
                  width={400}
                  height={100}
                />
                <br />
                <p className="text-gray-900 text-3xl font-bold">
                  ৳ {Data.price} BDT
                </p>
                <button
                  onClick={payment}
                  className="m-auto block bg-green-500 text-white w-full py-2 rounded-md font-bold bangfont mt-3"
                >
                  কোর্সটি কিনুন{" "}
                </button>
                <div>
                  {Data.micros.map((micro, index) => (
                    <ul key={index} className="mt-4">
                      <li className="mt-0 text-gray-700 text-md flex gap-1 bangfont">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-green-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{micro.number}</span>
                        <span>{micro.title}</span>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </React.Fragment>
  );
}
