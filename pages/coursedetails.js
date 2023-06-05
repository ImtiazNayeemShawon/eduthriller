import React from "react";
import Image from "next/image";
import SSC from "../public/school-bag.png";
import Arrow from "../public/arrow-right.svg";
import University from "../public/university.png";
import Doctor from "../public/doctor.png";
import Engineer from "../public/engineer.png";

export default function coursedetails() {
  return (
    <React.Fragment>
      <div className="mt-40 max-sm:mx-5">
        {/* header text  */}
        <h1 className="text-5xl bangfont font-bold text-center max-sm:text-2xl">
          নিজের শেখা নিজেই গুছিয়ে <br />
          নেয়ার যাত্রা শুরু হোক
        </h1>
        <p className="text-center text-gray-600 text-xl mt-4">
          যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে
        </p>
        {/* 4 section div */}
        <div className="grid grid-cols-2 place-items-center mt-10 gap-4  gap-y-10 max-sm:grid-cols-1">


          {/* first section */}
          <div className="grid grid-cols-5 bg-gray-200 py-10 pl-10 rounded-sm w-full hover:outline outline-offset-1 outline-green-500  duration-100 max-sm:mx-10 max-sm:py-8 max-sm:p-4">
            <div>
              <Image src={SSC} alt="def" width={90} />
            </div>
            <div className="col-span-3">
              <h1 className="bangfont text-2xl font-bold">ক্লাস ৫ -১২</h1>
              <p className="text-xl mt-2 text-gray-600">
                ফ্রি ভিডিও,লাইভে ক্লাস{" "}
              </p>
            </div>

            <Image src={Arrow} alt="def" width={30} className="block m-auto" />
          </div>



          {/* second section */}
          <div className="grid grid-cols-5 bg-gray-200 py-10 pl-10 rounded-sm w-full hover:outline outline-offset-1 outline-green-500  duration-100 max-sm:mx-10 max-sm:py-8 max-sm:p-4">
            <div>
              <Image src={University} alt="def" width={90} />
            </div>
            <div className="col-span-3">
              <h1 className="bangfont text-2xl font-bold">ক্লাস ৫ -১২</h1>
              <p className="text-xl mt-2 text-gray-600">
                ফ্রি ভিডিও,লাইভে ক্লাস{" "}
              </p>
            </div>

            <Image src={Arrow} alt="def" width={30} className="block m-auto" />
          </div>



          {/* third section */}
          <div className="grid grid-cols-5 bg-gray-200 py-10 pl-10 rounded-sm w-full hover:outline outline-offset-1 outline-green-500  duration-100 max-sm:mx-10 max-sm:py-8 max-sm:p-4">
            <div>
              <Image src={Doctor} alt="def" width={90} />
            </div>
            <div className="col-span-3">
              <h1 className="bangfont text-2xl font-bold">ক্লাস ৫ -১২</h1>
              <p className="text-xl mt-2 text-gray-600">
                ফ্রি ভিডিও,লাইভে ক্লাস{" "}
              </p>
            </div>

            <Image src={Arrow} alt="def" width={30} className="block m-auto" />
          </div>



          {/* fourth section */}
          <div className="grid grid-cols-5 bg-gray-200 py-10 pl-10 rounded-sm w-full hover:outline outline-offset-1 outline-green-500  duration-100 max-sm:mx-10 max-sm:py-8 max-sm:p-4">
            <div>
              <Image src={Engineer} alt="def" width={90} />
            </div>
            <div className="col-span-3">
              <h1 className="bangfont text-2xl font-bold">ক্লাস ৫ -১২</h1>
              <p className="text-xl mt-2 text-gray-600">
                ফ্রি ভিডিও,লাইভে ক্লাস{" "}
              </p>
            </div>

            <Image src={Arrow} alt="def" width={30} className="block m-auto" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
