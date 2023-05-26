import React from "react";
import { useState } from "react";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // email handeling event
  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };
  // password handleing event
  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="mt-40 grid place-content-around max-sm:mt-20">
        <h1 className="text-3xl mainfont font-bold">Login</h1>
        <p className="text-lg mainfont text-gray-600">
          Don't have an account?
          <a href="singup" className="text-blue-800 ml-2">
            Register
          </a>
        </p>
       
        <div className="mt-10">
          <p className="mt-5 text-lg text-gray-600 mainfont">Email Adress</p>
          <input
            className="bg-slate-300 w-full p-3 rounded-md outline-1"
            placeholder="Enter your Email"
            onChange={EmailHandler}
            value={Email}
          />
          <p className="mt-5 text-lg text-gray-600  mainfont">Set password </p>
          <input
            type="password"
            className="bg-slate-300 w-full p-3 rounded-md outline-1"
            placeholder="Enter your Password "
            onChange={PasswordHandler}
            value={Password}
          />{" "}
          <br />
          <button className="text-lg text-gray-200 mainbg p-3 rounded-lg w-full mt-20 ">
            Login
          </button>
          <br />
        </div>
      </div>
    </React.Fragment>
  );
}
