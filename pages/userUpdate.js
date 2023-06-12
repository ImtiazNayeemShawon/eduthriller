import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Api from "./api/apiCaller";
import { useRouter } from "next/router";
import { toast, Toaster } from "react-hot-toast";

export default function userUpdate() {
  const [name, setName] = useState("");
  const [adress, setAddress] = useState("");
  const [birth, setBirth] = useState("");
  const [level, setLevel] = useState("");
  const [school, setSchool] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await Api.get("/user/userData");
      const userData = response.data.user;
      setName(userData.name);
      setAddress(userData.adress);
      setBirth(userData.birth);
      setLevel(userData.level);
      setSchool(userData.school);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const updateUser = async () => {
    try {
      const response = await Api.put("/user/updateUser", {
        name,
        adress,
        birth,
        level,
        school,
      });
      setTimeout(() => {
        router.push("/profile");
      }, 500);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <React.Fragment>
      <Toaster />
      <h1 className="text-xl bangfont font-semibold text-green-500 ">
        ব্যক্তিগত তথ্য
      </h1>{" "}
      <div className="grid grid-cols-2 mt-20 max-sm:grid-cols-1">
        <div>
          <p className="bangfont text-md font-semibold text-gray-700 mt-4">
            তোমার নাম
          </p>
          <input
            className="bg-gray-200 p-2 rounded-md update outline-none mainfont text-xl  text-green-900 w-96"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <p className="bangfont text-md font-semibold text-gray-700 mt-4">
            ঠিকানা
          </p>
          <input
            className="bg-gray-200 p-2 rounded-md update outline-none mainfont text-xl  text-green-900 w-96"
            type="text"
            value={adress}
            onChange={(e) => setAddress(e.target.value)}
          />
          <p className="bangfont text-md font-semibold text-gray-700 mt-4">
            জন্ম তারিখ
          </p>
          <input
            className="bg-gray-200 p-2 rounded-md update outline-none mainfont text-xl  text-green-900 w-96"
            type="text"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </div>

        <div>
          <p className="bangfont text-md font-semibold text-gray-700 mt-4">
            তোমার ক্লাস
          </p>
          <input
            className="bg-gray-200 p-2 rounded-md update outline-none mainfont text-xl  text-green-900 w-96"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
          <p className="bangfont text-md font-semibold text-gray-700 mt-4">
            তোমার প্রতিষ্ঠান
          </p>
          <input
            className="bg-gray-200 p-2 rounded-md update outline-none mainfont text-xl  text-green-900 w-96"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>
        <br />
      </div>
      <button
        onClick={updateUser}
        className="p-2 px-40 block m-auto text-xl bg-green-500 rounded-lg mainfont font-semibold text-white"
        mt-20
      >
        Update
      </button>
    </React.Fragment>
  );
}
