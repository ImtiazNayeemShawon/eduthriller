import React, { useState, useEffect } from "react";
import Api from "./api/apiCaller";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import validator from "validator";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const PhoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmit(ev) {
    ev.preventDefault();
  
    if (!validator.isNumeric(phone) || phone.length !== 11) {
      toast.error("Phone number should be  11 digits");
      return;
    }
  
    try {
      const response = await Api.post("user/login", {
        phone,
        password,
      });
      toast.success(response.data.message);
      setTimeout(() => {
        router.push("./MicroComponents/success");
      }, 2000);
      const token = response.data.accessToken;
      Cookies.set("token", token);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  }
  

  return (
    <React.Fragment>
      <Toaster />
      <div className="grid ">
        <div className="mt-20 grid place-content-center max-sm:mt-20 col-span-2">
          <h1 className="text-3xl mainfont font-bold">Login</h1>
          <p className="text-lg mainfont text-gray-600">
            Don't have an account?
            <a href="signup" className="text-blue-800 ml-2 hover:underline">
              Register
            </a>
          </p>

          <div className="mt-10">
            <p className="mt-5 text-lg text-gray-600 mainfont font-semibold">
              Phone number
            </p>
            <input
              className="bg-slate-300 w-full p-3 rounded-md outline-1 "
              placeholder="Enter your phone number"
              onChange={PhoneHandler}
              type="number"
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
            <Link href="forget" className="text-blue-700 hover:underline">
              Forgot password?
            </Link>
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
