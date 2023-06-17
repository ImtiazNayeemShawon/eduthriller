import AdminNavbar from "./AdminNavbar";
import Image from "next/image";
import Smp from "../public/smp.webp";
import Api from "./api/apiCaller";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import React, { useContext } from "react";
import { MyContext } from "../auth/AuthContext";

export default function AllCourse() {
  const { loggedIn } = useContext(MyContext);
  const router = useRouter();
  
  if (typeof window !== 'undefined') {
    if (!loggedIn) {
      Router.push("/AdminLogin");
    }
  }


  const [courses, setCourses] = useState([]);
  const edit = (
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
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
  const deleting = (
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
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );

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
      <AdminNavbar />
      <div className="mt-40 h-screen">
        <h1 className="text-xl bangfont  capitalize font-semibold ">
          সকল কোর্স এডিট এবং ডিলিট করুন{" "}
        </h1>
        <div className="grid grid-cols-4 gap-3 mt-10 place-items-center max-sm:grid-cols-2">
          {courses.map((course, index) => (
            <div key={index}>
              {/* course div  */}
              <div className="w-full h-full  max-sm:h-30 bg-gray-100 hover:outline outline-1 outline-green-400 p-2 rounded-md duration-300 ">
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
                <div className="flex justify-between">
                  <button
                    onClick={() => router.push(`/EditCourse/${course._id}`)}
                    className="p-2 bg-blue-500 font-bold text-white px-8 rounded-sm mainfont flex justify-around "
                  >
                    {edit} Edit{" "}
                  </button>

                  <button
                    onClick={() => router.push(`/DeleteCourse/${course._id}`)}
                    className="p-2 bg-red-500 text-white px-8 rounded-sm mainfont flex justify-around font-bold"
                  >
                    {deleting} Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
