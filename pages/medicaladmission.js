import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Smp from "../public/smp.webp";
import Api from "./api/apiCaller";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function medicaladmission() {
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    handleget();
  }, []);

  async function handleget() {
    try {
      const response = await Api.get("crud/course");
      const coursesData = response.data.result;
      setCourses(coursesData);
    } catch (error) {
      console.log(error);
    }
  }
  const filteredData = courses.filter((item) => item.catagory === "medical");

  return (
    <React.Fragment>
      <Navbar />
      <div className="mt-20 w-full h-fit bg-green-100 px-10 rounded-md shadow-md py-10  max-sm:p-4">
        <h1 className="text-3xl bangfont font-semibold max-sm:text-md max-sm:font-semibold">
          মেডিকেল এঁর সকল সমাধান এখন{" "}
          <span className="text-red-500 capitalize">eduthriller</span> এর সাথে{" "}
        </h1>
      </div>
      <div className="mt-40 h-screen">
        <h1 className="text-xl bangfont  capitalize font-semibold ">
          আমাদের সকল কোর্স{" "}
        </h1>
        <div className=" gap-3 mt-10 place-items-center ">
          <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
            {filteredData.map((course, index) => (
              <div key={index} className="grid  mt-5 h-96">
                {/* course div  */}
                <div
                  onClick={() => router.push(`/courses/${course._id}`)}
                  className=" bg-white outline outline-1  rounded-lg outline-gray-300"
                >
                  <Image
                    src={course.thumbnail}
                    width={600}
                    height={600}
                    alt="def"
                    className="  m-auto block rounded-t-lg "
                  />

                  <div className="px-4 mt-2">
                    <p className="font-semibold mx-2 text-sm flex mb-2 mt-0 bg-gray-200 w-fit py-1 px-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      ভর্তি হয়েছে {course.enrolledUsers.length} জন{" "}
                    </p>
                    <hr />
                    <h1 className="text-gray-900 text-2xl bangfont font-bold mx-2 mt-2">
                      {course.title}
                    </h1>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-100 mt-3">
                    <button className="px-6 py-2 font-semibold rounded-lg flex text-gray-900 text-xl mainfont">
                      ৳ {course.price}
                    </button>
                    <button className="px-6 max-sm:px-3 py-2 hover:bg-gray-300 font-semibold rounded-lg flex justify-around bg-gray-200">
                      বিস্তারিত দেখি{" "}
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
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
