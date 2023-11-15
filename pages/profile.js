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
  const token = Cookies.get("token");

  const Next = () => {
    router.push("/userUpdate");
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  const fetchData = async () => {
    try {
      const response = await Api.get("user/userData");
      const responseData = response.data;
      setUserData(responseData);
      setLoading(false);
    } catch (error) {
      const errorMessage =
        error.response.data.error ||
        "Failed to fetch user data. Please try again later.";
      toast.error(errorMessage);
    }
  };

  return (
    <React.Fragment>
      <Toaster />
      {loading ? (
        <div>
          <div role="status" className="text-center flex justify-center mt-40">
            <svg
              aria-hidden="true"
              className="w-20 h-20 mr-2 text-gray-300 animate-spin  fill-green-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <div className="m-5 bg-gray-200 mt-20  shadow-md h rounded-xl flex py-4">
            <button className="text-center p-2 text-md font-bold uppercase rounded-md text-green bangofnt m-auto block  hover:bg-green-400 hover:text-white w-40 text-black duration-300">
              প্রোফাইল{" "}
            </button>
            <button
              onClick={() => {
                router.push("/myCourse");
              }}
              className="text-center p-2 text-md font-bold uppercase rounded-md text-green bangofnt m-auto block  hover:bg-green-400 hover:text-white w-40 text-black duration-300"
            >
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
      )}
    </React.Fragment>
  );
}
