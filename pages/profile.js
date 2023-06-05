import Api from "./api/apiCaller"; // Import the Axios instance
import React from "react";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Profile() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const Next = () => {
    router.push("/userUpdate");
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await Api.get("user/userData");
      const responseData = response.data;
      setUserData(responseData);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <React.Fragment>
      <Toaster />
      <div>
        <div className="m-5 bg-gray-200  shadow-md h rounded-xl flex py-4">
          <button className="text-center p-2 text-md font-bold uppercase rounded-md text-green bangofnt m-auto block  hover:bg-green-400 hover:text-white w-40 text-black duration-300">
            প্রোফাইল{" "}
          </button>
          <button className="text-center p-2 text-md font-bold uppercase rounded-md text-green bangofnt m-auto block  hover:bg-green-400 hover:text-white w-40 text-black duration-300">
            আমার কোর্স{" "}
          </button>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="text-center p-2 text-md font-bold uppercase rounded-md text-green bangofnt m-auto block  hover:bg-green-400 hover:text-white w-40 text-black duration-300"
          >
            হোম{" "}
          </button>
        </div>
        <div className="m-5">
          <div className="flex justify-between">
            <h1 className="text-xl bangfont font-semibold text-green-500 ">
              ব্যক্তিগত তথ্য
            </h1>{" "}
            <button
              onClick={Next}
              className="text-xl bangfont font-semibold text-blue-700 flex justify-between"
            >
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
              পরিবর্তন করো
            </button>
          </div>

          {loading ? null : (
            <div className=" ">
              <div className="bg-gray-400 w-40  h-40 profile mt-10"></div>
              <div className="mt-10  grid grid-cols-2 max-sm:grid-cols-1">
                <div className="mx-10 max-sm:m-0">
                  <p className="bangfont text-md font-semibold text-gray-700 mt-4">
                    তোমার নাম
                  </p>
                  <br />
                  <p className="mainfont text-xl  text-green-700 ">
                    {userData.user.name}
                  </p>
                  <p className="bangfont text-md font-semibold text-gray-700 mt-4">
                    তোমার ক্লাস
                  </p>
                  <br />
                  <p className="mainfont text-xl  text-green-700 ">
                    {userData.user.level}
                  </p>

                  <p className="bangfont text-md font-semibold text-gray-700 mt-4">
                    ফোন নাম্বার
                  </p>
                  <br />
                  <p className="mainfont text-xl  text-green-700 ">
                    {userData.user.phone}
                  </p>
                </div>
                <div>
                  <p className="bangfont text-md font-semibold text-gray-700 mt-4">
                    তোমার প্রতিষ্ঠান
                  </p>
                  <br />
                  <p className="mainfont text-xl  text-green-700 ">
                    {userData.user.school}
                  </p>
                  <p className="bangfont text-md font-semibold text-gray-700 mt-4">
                    জন্ম তারিখ
                  </p>
                  <br />
                  <p className="mainfont text-xl  text-green-700 ">
                    {userData.user.birth}
                  </p>
                  <p className="bangfont text-md font-semibold text-gray-700 mt-4">
                    ঠিকানা
                  </p>
                  <br />
                  <p className="mainfont text-xl  text-green-700 ">
                    {userData.user.adress}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
