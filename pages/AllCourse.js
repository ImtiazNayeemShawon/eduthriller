import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Smp from "../public/smp.webp";
import Api from "./api/apiCaller";
import { Toaster, toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
      <div className="mt-40 h-screen">
        <h1 className="text-xl bangfont  capitalize font-semibold ">
          আমাদের সকল কোর্স{" "}
        </h1>
        <div
          // type="button"
          // onClick={alert}
          className="grid grid-cols-4 gap-3 mt-10 place-items-center max-sm:grid-cols-2"
        >
          {courses.map((course, index) => (
            <div key={index}>
              {/* course div  */}
              <div
                onClick={() => router.push(`/courses/${course._id}`)}
                className="w-full h-full  max-sm:h-30 bg-gray-100 hover:outline outline-1 outline-green-400 p-2 rounded-md duration-300 cursor-pointer"
              >
                <Image
                  src={Smp}
                  alt="def"
                  className="w-66 rounded-md m-auto block"
                />
                <br />
                <h1 className="text-gray-900 text-xl bangfont font-bold ">
                  {course.title}
                </h1>
                <br />
                <p className="text-green-600 text-xl font">
                  ৳ {course.price}BDT
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
