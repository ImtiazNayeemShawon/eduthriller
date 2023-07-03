import Image from "next/image";
import React from "react";
import Aside from "../public/aside.svg";

export default function Intro() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 rounded-lg mt-10 h-3/4	bg-gray-100	max-sm:grid-cols-1 max-sm:mt-10 pb-20">
        {/* intor section  */}
        <div className="mx-10 max-sm:mx-4 mt-20 max-sm:mt-2">
          <h1 className="mt-20 text-5xl font-bold bangfont leading-relaxed	text-gray-800 max-sm:text-4xl max-sm:text-center">
            শুধুমাত্র মেধাবীই নয় অদম্য পরিশ্রমীও হও
          </h1>
          <br />
          <p className="bangfont text-sm text-gray-700   	uppercase max-sm:text-sm max-sm:leading-5 leading-7 text-justify">
            অনলাইনে একাডেমিক ও ভর্তি প্রস্তুতির দেশসেরা প্ল্যাটফর্ম{" "}
            <span className="font-bold text-green-600">এডুথ্রিলার।</span>
            শুধুমাত্র আমাদের কাছে পড়ে অসংখ্য শিক্ষার্থী একাডেমিক ও ভর্তি
            প্রস্তুতিতে দেশসেরা সাফল্য অর্জন করেছে ভবিষ্যতেও সাফল্যের ধারা
            অব্যাহত থাকবে ইনশাআল্লাহ । মূল বই ভিত্তিক ও প্রশ্ন প্যার্টানের উপর
            গুরুত্ব দিয়ে প্রতিটি ক্লাস ও এক্সাম সাজানো হয় যাতে একজন
            শিক্ষার্থী'র তার লক্ষ্যে সবচেয়ে এগিয়ে থাকে। এডুথ্রিলারের প্রতিটা
            ক্লাস ও এক্সামের প্রশ্নপত্র দেশসেরা অভিজ্ঞ মেন্টরদের সমন্বয়ে হয়ে
            থাকে। তাই ক্লাস কোয়ালিটিতে কম্প্রোমাইজ কখনোই হয় না। এছাড়া
            এডুথ্রিলারের ভাইয়াদের তৈরী করা প্রশ্নপত্রে ও পরীক্ষা দেওয়ার সুযোগ
            স্টুডেন্টকে অন্যদের তুলনায় একধাপ এগিয়ে রাখে।
          </p>
          <br />
        </div>
        <div>
          <Image src={Aside} className="mt-40 max-sm:mt-2" />
        </div>
      </div>
    </React.Fragment>
  );
}
