import React from "react";
import PrivateUniversity from "../public/privateuniversity.png";
import Medical from "../public/medical.png";
import Engineering from "../public/engineer.png";
import SSC from "../public/ssc.png";
import University from "../public/university.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Coursedetails() {
  const router = useRouter();

  return (
    <React.Fragment>
      <div className="gred mt-80 p-5 rounded-xl pb-40 pt-20">
        <h1 className="text-4xl text-gray-800 font-bold bangfont text-center">
          ২০২৩ সালের অনলাইন ব্যাচে ভর্তি চলছে!
        </h1>
        <p className="mt-5 bangfont font-bold text-gray-700 text-center">
          শ্রেনি অনুযায়ী সপ্তাহে ৬-১০টি লাইভ ক্লাস, সাথে লেকচার শিট এবং নিয়মিত
          পরীক্ষার সুবিধা
        </p>
        {/* course link section */}
        <div className="grid grid-cols-4 gap-20 mt-20 max-sm:grid-cols-1 max-sm:gap-3">
          {/* medical section */}
          <button
            type="button"
            onClick={() => router.push("/medicaladmission")}
            className="bg-card rounded-lg p-2 "
          >
            <Image src={Medical} width={70} className="m-auto" />
            <h1 className="bangfont text-xl text-center font-bold text-pink-900 max-sm:text-lg ">
              মেডিকেল এডমিশন
            </h1>
            <p className="text-gray-700 bangfont max-sm:text-sm">
              মেডিকেল ভর্তির সকল সলিউশন একসাথেই
            </p>
            <p className="text-red-600 mainfont text-center m-auto block font-bold text-lg mt-6 bg-white rounded-xl w-fit p-2 px-7 max-sm:mt-2">
              Enroll Now
            </p>
          </button>
          {/* Engineering section  */}
          <button
            type="button"
            onClick={() => router.push("/egineeringadmission")}
            className="bg-card rounded-lg p-2 "
          >
            <Image src={Engineering} width={70} className="m-auto" />
            <h1 className="bangfont text-xl text-center font-bold text-pink-900 max-sm:text-lg ">
              ইঞ্জিনিয়ারিং এডমিশন
            </h1>
            <p className="text-gray-700 bangfont max-sm:text-sm">
              ইঞ্জিনিয়ারিং ভর্তির সকল সলিউশন একসাথেই
            </p>
            <p className="text-red-600 mainfont text-center m-auto block font-bold text-lg mt-6 bg-white rounded-xl w-fit p-2 px-7 max-sm:mt-2">
              Enroll Now
            </p>
          </button>

          {/* versity section */}
          <button
            type="button"
            onClick={() => router.push("/versityadmission")}
            className="bg-card rounded-lg p-2 "
          >
            <Image src={University} width={70} className="m-auto" />
            <h1 className="bangfont text-xl text-center font-bold text-pink-900 max-sm:text-lg ">
              ভার্সিটি+গুচ্ছ এডমিশন
            </h1>
            <p className="text-gray-700 bangfont max-sm:text-sm">
              ভার্সিটি+গুচ্ছ ভর্তির সকল সলিউশন একসাথেই
            </p>
            <p className="text-red-600 mainfont text-center m-auto block font-bold text-lg mt-6 bg-white rounded-xl w-fit p-2 px-7 max-sm:mt-2">
              Enroll Now
            </p>
          </button>
          {/* ssc hsc  */}
          <button
            type="button"
            onClick={() => router.push("/sschsc")}
            className="bg-card rounded-lg p-2"
          >
            <Image src={University} width={70} className="m-auto" />
            <h1 className="bangfont text-xl text-center font-bold text-pink-900 max-sm:text-lg ">
              SSC/HSC
            </h1>
            <p className="text-gray-700 bangfont max-sm:text-sm">
              SSC/HSC সকল সলিউশন একসাথেই
            </p>
            <p className="text-red-600 mainfont text-center m-auto block font-bold text-lg mt-6 bg-white rounded-xl w-fit p-2 px-7 max-sm:mt-2">
              Enroll Now
            </p>
          </button>
        </div>
        <div className="mt-20">
          <h1 className="text-center mainfont text-xl font-bold text-gray-600">
            Embark on your journey with us promptly. Why delay any longer?
            Let's get started!
          </h1>
          <button className="m-auto text-xl font-semibold mainfont text-gray-100 bg-green-600 py-4 px-20 rounded-xl mt-5 block">
            Viws all courses
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
