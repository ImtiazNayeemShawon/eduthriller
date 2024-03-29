import React, { useState, useEffect } from "react";
import Api from "./api/apiCaller";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import Router from "next/router";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const PhoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      const response = await Api.post("admin/check", {
        phone,
        password,
      });
      toast.success(response.data.message);
      const token = response.data.accessToken;
      Cookies.set("token", token);
      Router.push("./MicroComponents/AdminSuccess");
    } catch (error) {
      toast.error("Please Try again");
    }
  }

  return (
    <React.Fragment>
      <Toaster />
      <div className="grid ">
        <div className="mt-20 grid place-content-center max-sm:mt-20 col-span-2">
          <h1 className="text-3xl mainfont font-bold text-center">
            Admin Login
          </h1>

          <div className="mt-10">
            <p className="mt-5 text-lg text-gray-600 mainfont font-semibold">
              Phone number
            </p>
            <input
              className="bg-slate-300 w-full md:w-96 p-3 rounded-md outline-1 "
              placeholder="Enter your phone number"
              onChange={PhoneHandler}
              value={phone}
            />
            <p className="mt-5 text-lg text-gray-600  mainfont font-semibold">
              Set password{" "}
            </p>
            <input
              type="password"
              className="bg-slate-300 w-full p-3 rounded-md outline-1"
              placeholder="Enter your Password "
              onChange={PasswordHandler}
              value={password}
            />{" "}
            <br />
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-lg text-gray-200 mainbg p-3 rounded-lg w-full mt-20 "
            >
              Login
            </button>
            <br />
          </div>
        </div>
        <div className="sideimage  mt-20"></div>
      </div>
    </React.Fragment>
  );
}
