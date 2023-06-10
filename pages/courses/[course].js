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

export default function Course() {
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
  const classes = (
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
        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
      />
    </svg>
  );
  const liveExam = (
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
        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
      />
    </svg>
  );
  const test = (
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
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
      />
    </svg>
  );
  const sheet = (
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
        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
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
  const router = useRouter();

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
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [course]);

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
                src={Smp}
                alt="def"
                className="w-66 rounded-md m-auto block"
                width={100}
                height={100}
              />
              <br />
              <p className="text-gray-900 text-3xl font-bold">
                ৳ {Data.price} BDT
              </p>
              <button className="m-auto block bg-green-500 text-white w-full py-2 rounded-md font-bold bangfont mt-3">
                কোর্সটি কিনুন{" "}
              </button>
              <div>
                {Data.micros.map((micro, index) => (
                  <ul className="mt-2">
                    <li className="mt-1  text-md flex gap-4">
                      {book}
                      {micro.number}
                      {micro.title}
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
                ক্লাস নেবেন যারা{" "}
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
                <Accordion className="shadow-sm ">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="bangfont font-semibold text-gray-700">
                      কোর্স সম্পর্কে বিস্তারিত
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      মেডিকেল ভর্তি (Medical Admission 2023) পরীক্ষার এই
                      জার্নিটা খুবই অল্প সময়ের। নতুন পরিবেশ, নতুন টিচার, অসংখ্য
                      স্টুডেন্ট, ট্রাফিক জ্যাম, এইচএসসি পরীক্ষার প্রতি কম
                      গুরুত্ব সব মিলিয়ে সবকিছু বুঝে উঠতেই পরীক্ষা চলে আসে।
                      সুতরাং স্বল্প এই সময়ে মেডিকেল ভর্তি (Medical Admission
                      2023) পরীক্ষার ফুল সিলেবাসের ভাল প্রস্তুতি নেয়া একটা
                      স্টুডেন্ট এর কাছে শুধু কঠিনই হয় না, রীতিমত চ্যালেঞ্জিং হয়ে
                      যায়। তোমাদের এই জার্নিটাকে সহজ করতে ও সুপরিকল্পিতভাবে সুষম
                      প্রস্তুতি নিশ্চিত করতে টেন মিনিট স্কুল নিয়ে এসেছে মেডিকেল
                      এডমিশ কোর্স ২০২৩। এই কোর্সে থাকছে ঢাকা মেডিকেল,
                      সোহরাওয়ার্দী মেডিকেলসহ দেশসেরা বিভিন্ন মেডিকেল অধ্যয়নরত বা
                      দায়িত্বরত এবং অনলাইনে সুপরিচিত অভিজ্ঞ টিচার প্যানেল, ৫ টি
                      বিষয়ের (পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান, ইংরেজি এবং
                      সাধারণ জ্ঞান) উপর ৯০ টি লাইভ ক্লাস। যে ক্লাসগুলোতে মেডিকেল
                      ভর্তি পরীক্ষার পূর্ণাঙ্গ প্রস্তুতি সম্পন্ন করা হবে। আরো
                      থাকছে প্রতিটি অধ্যায়ের গোছানো লেকচার স্লাইড এবং লেকচার
                      শিট। নিজের প্রস্তুতিকে যাচাই করতে এবং মেডিকেল ভর্তি
                      পরীক্ষায় ভালো করতে অধ্যায়ভিত্তিক ডেইলি MCQ পরীক্ষা, উইকলি
                      পরীক্ষা, মান্থলি পরীক্ষা, পেপার ফাইনাল পরীক্ষা, সাব্জেক্ট
                      ফাইনাল পরীক্ষা এবং মেডিকেল ভর্তি পরীক্ষার আদলে পূর্ণাঙ্গ
                      মডেল টেস্ট । এছাড়াও পরীক্ষার প্রস্তুতি তোমাদের আত্মবিশ্বাস
                      আরো বাড়াতে জুমে র‍্যাপিড ফায়ার রাউন্ড। আশা করি পূর্ণাঙ্গ
                      এই কোর্সটি তোমার মেডিকেল ভর্তি (Medical Admission 2023)
                      পরীক্ষার প্রস্তুতিতে অনেকখানি এগিয়ে রাখবে।
                    </Typography>
                  </AccordionDetails>
                </Accordion>
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
                  ক্লাস করার জন্য প্রয়োজন হবে
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
                  src={Smp}
                  alt="def"
                  className="w-66 rounded-md m-auto block"
                  width={100}
                  height={100}
                />
                <br />
                <p className="text-gray-900 text-3xl font-bold">
                  ৳ {Data.price} BDT
                </p>
                <button className="m-auto block bg-green-500 text-white w-full py-2 rounded-md font-bold bangfont mt-3">
                  কোর্সটি কিনুন{" "}
                </button>
                <div>
                  {Data.micros.map((micro, index) => (
                    <ul className="mt-4">
                      <li className="mt-0  text-md flex gap-4">
                        {book}
                        {micro.number}
                        {micro.title}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
