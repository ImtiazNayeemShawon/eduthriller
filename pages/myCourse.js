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
      <div className="m-5 bg-gray-200 shadow-md h rounded-xl mt-20 flex py-4 ">
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
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 mt-10 mx-20 max-sm:mx-2">
          {courses.length === 0 ? (
            <div className="col-span-4">{notFound}</div>
          ) : (
            courses.map((course,index) => (
              <div key={index} className="grid  mt-5 h-80">
              {/* course div  */}
              <div
                onClick={() => router.push(`/coursedashboard/${course._id}`)}
                className=" bg-white outline outline-1  rounded-lg outline-gray-300"
              >
                <Image
                  src={course.thumbnail}
                  width={600}
                  height={600}
                  alt="def"
                  className="rounded-t-lg
                  m-auto block "
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
                 
                  <button className="w-full py-2 hover:bg-gray-300 font-semibold rounded-lg flex justify-around bg-gray-200 my-auto max-sm:px-3">
                  শুরু করি {" "}
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
