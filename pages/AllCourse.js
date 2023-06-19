import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Smp from "../public/smp.webp";
import Api from "./api/apiCaller";
import { Toaster, toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "./footer";

export default function AllCourse() {
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
      <Navbar />
      <div className="mt-20 max-sm:mx-5 mb-20">
        <h1 className="text-xl bangfont  capitalize font-semibold ">
          আমাদের সকল কোর্স{" "}
        </h1>

        {courses.map((course, index) => (
          <div key={index}>
            {/* course div  */}
            <div
              onClick={() => router.push(`/courses/${course._id}`)}
              className="w-full h-full mt-4 max-sm:h-30 bg-gray-100 hover:outline outline-1  outline-green-400 p-2 rounded-md duration-300 cursor-pointer grid grid-cols-2 pt-10 px-10 max-sm:grid-cols-1 outline pb-0 max-sm:px-0 max-sm:pt-0 "
            >
              <div>
                <Image
                  src={course.thumbnail}
                  width={500}
                  height={400}
                  alt="def"
                  className=" rounded-md m-auto block "
                />
                <br />{" "}
              </div>
              <div>
                <h1 className="text-gray-900 text-3xl bangfont font-bold mx-2">
                  {course.title}
                </h1>
                <p className="text-gray-900 text-sm bangfont  text-ellipsis overflow-hidden  h-20 mx-3">
                  {course.description}....
                </p>
                <br />
                <div className="flex justify-between mt-20 max-sm:mt-3 bg-green-200 px-2 py-2 rounded-sm w-full">
                  <p className="text-green-600 text-xl max-sm:text-sm  max-sm:ml-3 my-auto  mt-2 font-semibold">
                    <span className="text-gray-900"> মাত্র ৳ </span>
                    {course.price}BDT
                  </p>
                  <button className="py-3 bangfont px-4 rounded-xl outline outline-1 outline-green-600 text-green-700 font-bold text-xl hover:bg-green-500 hover:text-white duration-200 max-sm:text-sm">
                    বিস্তারিত দেখো{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </React.Fragment>
  );
}
