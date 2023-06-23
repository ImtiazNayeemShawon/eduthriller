import React, { useEffect, useState } from "react";
import Image from "next/image";
import Smp from "../public/smp.webp";
import Api from "./api/apiCaller";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Footer from "./footer";

export default function myCourse() {
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    handleGet();
  }, []);

  async function handleGet() {
    try {
      const response = await Api.get("/crud/courses/enrolled");
      const coursesData = response.data;
      setCourses(coursesData);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const notFound = (
    <section className="bg-white m-auto h-screen">
      <div className="m-auto block">
        <h1 className="text-3xl mainfont uppercase font-bold text-center ">
          404 Course not found{" "}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-40 h-40 text-red-600 m-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
        <button
          onClick={() => {
            router.push("/AllCourse");
          }}
          className="text-xl mainfont capitalize bg-blue-700 text-white py-2 px-4 rounded-lg font-bold m-auto block"
        >
          Explore our courses
        </button>
      </div>
    </section>
  );

  return (
    <React.Fragment>
      <Toaster />
      <div className="m-5 bg-gray-200 shadow-md h rounded-xl flex py-4 ">
        <button
          onClick={() => {
            router.push("/profile");
          }}
          className="text-center p-2 text-md font-bold uppercase rounded-md text-green bangofnt m-auto block hover:bg-green-400 hover:text-white w-40 text-black duration-300"
        >
          প্রোফাইল{" "}
        </button>
        <button className="text-center p-2 text-md font-bold uppercase rounded-md text-green bangofnt m-auto block hover:bg-green-400 hover:text-white w-40 text-black duration-300">
          আমার কোর্স{" "}
        </button>
        <button
          onClick={() => {
            router.push("/");
          }}
          className="text-center p-2 text-md font-bold uppercase rounded-md text-green bangofnt m-auto block hover:bg-green-400 hover:text-white w-40 text-black duration-300"
        >
          হোম{" "}
        </button>
      </div>
      <div>
        <h1 className="text-xl bangfont ">আমার কোর্স সমূহ</h1>
        <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-1 mt-10">
          {courses.length === 0 ? (
            <div className="col-span-4">{notFound}</div>
          ) : (
            courses.map((course) => (
              <div
                key={course._id}
                className="p-3 rounded-lg bg-gray-100 outline outline-1 outline-gray-200"
              >
                <Image
                  src={course.thumbnail}
                  className="w-60 m-auto rounded-lg"
                  alt="def"
                />

                <p className="mt-2 text-xl font-bold bangfont text-center">
                  {course.title}
                </p>
                <button
                  onClick={() => {
                    router.push(`/coursedashboard/${course._id}`);
                  }}
                  className="bg-white w-full uppercase text-green-600 text-xl outline outline-1 py-2 rounded-lg outline-gray-200 m-auto"
                >
                  Continue
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </React.Fragment>
  );
}
