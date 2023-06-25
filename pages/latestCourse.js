import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import Smp from "../public/smp.webp";
import Api from "./api/apiCaller";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";

export default function LatestCourse() {
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
      toast.error(error.message);
    }
  }
  return (
    <React.Fragment>
      <Toaster />
      <div className="mt-20 mb-5">
        <h1 className="bangfont text-4xl uppercase font-semibold  text-center">
          আমাদের সকল কোর্স{" "}
        </h1>
      </div>
      <div className="m-auto block max-sm:hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {courses.map((course, index) => (
            <SwiperSlide className="py-20 px-3">
              <div key={index} className="grid  mt-5 h-96">
                {/* course div  */}
                <div
                  onClick={() => router.push(`/courses/${course._id}`)}
                  className=" bg-white outline outline-1  rounded-lg outline-gray-300"
                >
                  <Image
                    src={course.thumbnail}
                    width={600}
                    height={400}
                    alt="def"
                    className="  m-auto block "
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
                    <button className="px-6 py-2 hover:bg-gray-300 font-semibold rounded-lg flex justify-around bg-gray-200">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-10 hidden max-sm:block">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {courses.map((course, index) => (
            <SwiperSlide className=" px-3">
              <div
                key={index}
                className="grid grid-cols-3 mt-5 max-sm:grid-cols-1"
              >
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
                    className="rounded-lg    m-auto block "
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
                    <button className="px-6 py-2 hover:bg-gray-300 font-semibold rounded-lg flex justify-around bg-gray-200 my-auto max-sm:px-3">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
}
