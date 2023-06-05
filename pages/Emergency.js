import Image from "next/image";
import React from "react";
import Call from "../public/call.png";

export default function Emergency() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 justify-between bg-gred p-2 py-5 rounded-lg mt-40 pl-8 max-sm:pl-1 max-sm:grid-cols-1">
        <div>
          <h1 className="text-white text-3xl font-bold max-sm:text-center">কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য কল করুন</h1>
          <p className="text-gray-200 mt-3 font-bold bangfont max-sm:text-center">সকাল ৮টা থেকে রাত ১১টা পর্যন্ত</p>
          <button className="text-white font-semibold mainfont mt-20 px-8 p-2 bg-green-500 rounded-sm text-xl max-sm:block max-sm:m-auto max-sm:mt-4">Call Now </button>
        </div>
        <div>
        <Image src={Call} alt="def" width={200} className="ml-80 max-sm:m-auto max-sm:block max-sm:mt-10"/>
        </div>
      </div>
    </React.Fragment>
  );
}
