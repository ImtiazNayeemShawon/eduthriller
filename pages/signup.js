import { useRouter } from "next/router";
import Api from "./api/apiCaller";
import React from "react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import validator from 'validator';

export default function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const NameHandler = (event) => {
    setName(event.target.value);
  };

  const PhoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmit(ev) {
    ev.preventDefault();
  
    if (!validator.isNumeric(phone) || phone.length !== 11) {
      toast.error("Phone number should be a numeric value and have 11 digits");
      return;
    }
  
    const response = await Api.post("user/signup", {
      name,
      phone,
      password,
    }).catch((error) => {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    });
  
    if (response && response.data) {
      toast.success(response.data.message);
      router.push("/login");
    }
  }
  

  return (
    <React.Fragment>
      <Toaster />
      <div className="grid grid-cols-2 max-sm:grid-cols-1  max-sm:m-1 m-10 mainfont">
        <div className="p-10 mainfont font-medium max-sm:hidden">
          <div className="mainbg h-10 w-10 rounded-xl  flex ">
            <div className="h-3 bg-white w-3 m-auto rounded-2xl "></div>
          </div>

          <h1 className="text-4xl font-semibold text-left  text-black mt-40 ">
            Signup now to enjoy your study
          </h1>
          <p className="text-left text-thin text-gray-700 leading-7 mt-10">
            Discover Eduthriller, the epitome of academic excellence! Join us
            today and embark on a captivating educational journey that will
            redefine your future!
          </p>

          <div className="mainbg h-40 w-100 rounded-lg mt-20"></div>
        </div>

        <div className="ml-20 max-sm:m-4">
          <div className="mainbg h-10 w-10 rounded-xl  flex  md:hidden">
            <div className="h-3 bg-white w-3 m-auto rounded-2xl "></div>
          </div>
          <h1 className="text-left text-black text-4xl font-semibold">
            Get started
          </h1>
          <p className="text-gray-600 text-lg">Create your account now </p>
          <p className="mt-20 text-lg text-gray-600">Full name</p>
          <input
            className="bg-slate-300 w-full p-3 rounded-md outline-1"
            placeholder="Enter your name"
            onChange={NameHandler}
            value={name}
          />
          <p className="mt-5 text-lg text-gray-600">Enter your phone number</p>
          <input
            className="bg-slate-300 w-full p-3 rounded-md outline-1"
            placeholder="Enter your phone "
            type="number"
            onChange={PhoneHandler}
            value={phone}
          />
          <p className="mt-5 text-lg text-gray-600">Set password</p>
          <input
            type="password"
            className="bg-slate-300 w-full p-3 rounded-md outline-1"
            placeholder="Set your Password"
            onChange={PasswordHandler}
            value={password}
          />
          <br />
          <button
            onClick={handleSubmit}
            className="text-lg text-gray-200 mainbg p-3 rounded-lg w-full mt-20 "
          >
            Signup
          </button>
          <br />
          <p className="mt-5 text-lg">
            Already have an account?
            <a href="login" className="text-blue-800 ml-2">
              Login Now
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
