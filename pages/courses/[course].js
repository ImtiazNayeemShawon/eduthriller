import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Api from "../api/apiCaller";
import Navbar from "../Navbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Smp from "./img/smp.webp";

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
  const router = useRouter();
  const { course } = router.query;
  const [Courses, setCourses] = useState(null);

  useEffect(() => {
    fetchDataById();
  }, []);

  async function fetchDataById() {
    try {
      const response = await Api.get(`/crud/course/${course}`);
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  
     console.log(Courses);
  
  return (
    <React.Fragment>
      <Navbar />
      <div className=" mt-36 mx-10">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2">
            <h1 className="text-3xl font-bold bangfont">1</h1>
            <p className="text-gray-500 bangfont  leading-7 mt-6 course-text text-justify">
              অনেক শিক্ষার্থীরই স্বপ্ন থাকে ভালো একটি মেডিকেল কলেজে চান্স পাওয়া,
              মেডিকেলে চান্স পাওয়ার জন্য মেডিকেল ভর্তি পরীক্ষার পূর্বে একজন
              শিক্ষার্থীকে নিতে হয় গোছানো প্রস্তুতি পাশাপাশি মেধার সর্বোচ্চ
              প্রয়োগ, যা তাকে অন্য শিক্ষার্থী থেকে আলাদা করে তুলবে। মেডিকেল
              ভর্তি পরীক্ষার জন্য বিগত বছরের মেডিকেল প্রশ্ন প্রাকটিস করে নিজেকে
              প্রস্তুত করতে হবে এখন থেকেই। আর এই প্রস্তুতি নিশ্চিত করতেই টেন
              মিনিট স্কুল নিয়ে এসেছে মেডিকেল এডমিশন কোর্স - ২০২৩। দেশসেরা
              শিক্ষকদের অভিজ্ঞতার আলোকে নিজেকে প্রস্তুত করে ভর্তি পরীক্ষা জয়
              করতে আজই এনরোল করুন মেডিকেল এডমিশন কোর্স - ২০২৩ কোর্সটিতে। ৫ টি
              বিষয়ের (পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান, ইংরেজি এবং সাধারণ জ্ঞান)
              ৯০ টি লাইভ ক্লাস। যে ক্লাসগুলোতে মেডিকেল ভর্তি পরীক্ষার পূর্ণাঙ্গ
              প্রস্তুতি সম্পন্ন করা হবে। এছাড়াও অধ্যায়ভিত্তিক ডেইলি MCQ পরীক্ষা,
              উইকলি পরীক্ষা, মান্থলি পরীক্ষা, পেপার ফাইনাল পরীক্ষা, সাব্জেক্ট
              ফাইনাল পরীক্ষা এবং মেডিকেল ভর্তি পরীক্ষার আদলে পূর্ণাঙ্গ মডেল
              টেস্ট। পূর্ণাঙ্গ এই কোর্সটি তোমার মেডিকেল ভর্তি (Medical Admission
              2023) পরীক্ষার প্রস্তুতিতে সবার থেকে এগিয়ে রাখবে।
            </p>
            {/* teachers  */}
            <h1 className="mt-6 text-2xl bangfont font-semibold">
              ক্লাস নেবেন যারা{" "}
            </h1>
            <div className="grid grid-cols-2 bg-slate-10 outline outline-1 outline-gray-300 mt-10 rounded-md">
              <div className="px-3 py-2">
                <p className="text-xl font-semibold mainfont">
                  Dr. Toufiqul Sharif
                </p>
                <span className="text-sm m-0 leading-3 text-gray-700">
                  haheed Suhrawardy Medical College
                </span>
                <br />
                <span className="text-sm m-0 leading-3 text-gray-700">
                  [ShSMC] (7+ Years Exp)
                </span>
              </div>
              <div className="px-3 py-2">
                <p className="text-xl font-semibold mainfont">
                  Dr. Toufiqul Sharif
                </p>
                <span className="text-sm m-0 leading-3 text-gray-700">
                  haheed Suhrawardy Medical College
                </span>
                <br />
                <span className="text-sm m-0 leading-3 text-gray-700">
                  [ShSMC] (7+ Years Exp)
                </span>
              </div>
              <div className="px-3 py-2">
                <p className="text-xl font-semibold mainfont">
                  Dr. Toufiqul Sharif
                </p>
                <span className="text-sm m-0 leading-3 text-gray-700">
                  haheed Suhrawardy Medical College
                </span>
                <br />
                <span className="text-sm m-0 leading-3 text-gray-700">
                  [ShSMC] (7+ Years Exp)
                </span>
              </div>
              <div className="px-3 py-2">
                <p className="text-xl font-semibold mainfont">
                  Dr. Toufiqul Sharif
                </p>
                <span className="text-sm m-0 leading-3 text-gray-700">
                  haheed Suhrawardy Medical College
                </span>
                <br />
                <span className="text-sm m-0 leading-3 text-gray-700">
                  [ShSMC] (7+ Years Exp)
                </span>
              </div>
            </div>

            {/* Accordion on/off */}
            <h1 className="mt-6 text-2xl bangfont font-semibold">
              কোর্স সম্পর্কে বিস্তারিত :
            </h1>
            <div className="mt-10 bg-slate-10 outline outline-1 outline-gray-300 rounded-md">
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
                    মেডিকেল ভর্তি (Medical Admission 2023) পরীক্ষার এই জার্নিটা
                    খুবই অল্প সময়ের। নতুন পরিবেশ, নতুন টিচার, অসংখ্য স্টুডেন্ট,
                    ট্রাফিক জ্যাম, এইচএসসি পরীক্ষার প্রতি কম গুরুত্ব সব মিলিয়ে
                    সবকিছু বুঝে উঠতেই পরীক্ষা চলে আসে। সুতরাং স্বল্প এই সময়ে
                    মেডিকেল ভর্তি (Medical Admission 2023) পরীক্ষার ফুল
                    সিলেবাসের ভাল প্রস্তুতি নেয়া একটা স্টুডেন্ট এর কাছে শুধু
                    কঠিনই হয় না, রীতিমত চ্যালেঞ্জিং হয়ে যায়। তোমাদের এই
                    জার্নিটাকে সহজ করতে ও সুপরিকল্পিতভাবে সুষম প্রস্তুতি নিশ্চিত
                    করতে টেন মিনিট স্কুল নিয়ে এসেছে মেডিকেল এডমিশ কোর্স ২০২৩। এই
                    কোর্সে থাকছে ঢাকা মেডিকেল, সোহরাওয়ার্দী মেডিকেলসহ দেশসেরা
                    বিভিন্ন মেডিকেল অধ্যয়নরত বা দায়িত্বরত এবং অনলাইনে সুপরিচিত
                    অভিজ্ঞ টিচার প্যানেল, ৫ টি বিষয়ের (পদার্থবিজ্ঞান, রসায়ন,
                    জীববিজ্ঞান, ইংরেজি এবং সাধারণ জ্ঞান) উপর ৯০ টি লাইভ ক্লাস।
                    যে ক্লাসগুলোতে মেডিকেল ভর্তি পরীক্ষার পূর্ণাঙ্গ প্রস্তুতি
                    সম্পন্ন করা হবে। আরো থাকছে প্রতিটি অধ্যায়ের গোছানো লেকচার
                    স্লাইড এবং লেকচার শিট। নিজের প্রস্তুতিকে যাচাই করতে এবং
                    মেডিকেল ভর্তি পরীক্ষায় ভালো করতে অধ্যায়ভিত্তিক ডেইলি MCQ
                    পরীক্ষা, উইকলি পরীক্ষা, মান্থলি পরীক্ষা, পেপার ফাইনাল
                    পরীক্ষা, সাব্জেক্ট ফাইনাল পরীক্ষা এবং মেডিকেল ভর্তি পরীক্ষার
                    আদলে পূর্ণাঙ্গ মডেল টেস্ট । এছাড়াও পরীক্ষার প্রস্তুতি
                    তোমাদের আত্মবিশ্বাস আরো বাড়াতে জুমে র‍্যাপিড ফায়ার রাউন্ড।
                    আশা করি পূর্ণাঙ্গ এই কোর্সটি তোমার মেডিকেল ভর্তি (Medical
                    Admission 2023) পরীক্ষার প্রস্তুতিতে অনেকখানি এগিয়ে রাখবে।
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          {/* course selling side */}
          <div className="outline-1 outline outline-slate-300 p-4">
            <div className="w-full h-full  max-sm:h-30 bg-gray-100  p-2 rounded-md duration-300 ">
              <Image
                src={Smp}
                alt="def"
                className="w-66 rounded-md m-auto block"
              />
              <br />
              <p className="text-gray-900 text-3xl font-bold">৳ 3500 BDT</p>
              <button className="m-auto block bg-green-500 text-white w-full py-2 rounded-md font-bold bangfont mt-3">
                কোর্সটি কিনুন{" "}
              </button>
              <div>
                <ul className="mt-10">
                  <li className="mt-4 bangfont text-md flex gap-4">
                    {book}৫ টি বিষয়
                  </li>
                  <li className="mt-4 bangfont text-md flex gap-4">
                    {classes} ৯০ টি লাইভ ক্লাস{" "}
                  </li>
                  <li className="mt-4 bangfont text-md flex gap-4">
                    {liveExam} ৫ টি ফাইনাল মডেল টেস্ট{" "}
                  </li>
                  <li className="mt-4 bangfont text-md flex gap-4">
                    {test} ১২টি উইকলি এক্সাম{" "}
                  </li>
                  <li className="mt-4 bangfont text-md flex gap-4">
                    {sheet} ৯০ টি লেকচার স্লাইড{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
