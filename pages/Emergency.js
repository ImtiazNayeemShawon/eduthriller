import Image from "next/image";
import React from "react";
import Call from "../public/call.png";

export default function Emergency() {
  return (
    <React.Fragment>
      <div className="flex justify-between bg-gred p-2 py-5 rounded-lg mt-40 pl-8 max-sm:pl-1">
        <div>
          <h1 className="text-white text-3xl font-bold">কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য কল করুন</h1>
          <p className="text-gray-200 mt-3 fontt-bold bangfont textxl">সকাল ৮টা থেকে রাত ১১টা পর্যন্ত</p>
          <button className="text-white font-semibold mainfont mt-20 px-8 p-2 bg-green-500 rounded-sm text-xl">Call Now </button>
        </div>
        <div>
        <Image src={Call} alt="def" width={200} className="mr-40"/>
        </div>
      </div>
    </React.Fragment>
  );
}
