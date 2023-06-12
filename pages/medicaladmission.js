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
      <div className="mt-20 w-full h-fit bg-course px-10 rounded-md shadow-md py-10  max-sm:p-4">
        <h1 className="text-3xl bangfont font-semibold max-sm:text-md max-sm:font-semibold">
          মেডিকেল এঁর সকল সমাধান এখন{" "}
          <span className="text-red-500 capitalize">eduthriller</span> এর সাথে{" "}
        </h1>
        <p className="mt-2 text-xl bangfont text-gray-600 font-semibold max-sm:text-sm">
          সম্পূর্ণ সিলেবাসের 💯 তে 💯 প্রস্তুতি
        </p>
      </div>
      <div className="mt-40 h-screen">
        <h1 className="text-xl bangfont  capitalize font-semibold ">
          আমাদের সকল কোর্স{" "}
        </h1>
        <div className="grid grid-cols-4 gap-3 mt-10 place-items-center max-sm:grid-cols-1">
          {filteredData.map((course, index) => (
            <div key={index}>
              {/* course div  */}
              <div
                onClick={() => router.push(`/courses/${course._id}`)}
                className="w-full h-full mt-4 max-sm:h-30 bg-gray-100 hover:outline outline-1 outline-green-400 p-2 rounded-md duration-300 cursor-pointer"
              >
                <Image
                  src={Smp}
                  width={400}
                  height={100}
                  alt="def"
                  className=" rounded-md m-auto block"
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
