import React from "react";
import { useState, useContext } from "react";
import Api from "./api/apiCaller"; // Import the Axios instance
import { useRouter } from "next/router";
import axios from "axios";

export default function Login() {
  // statae for manage data
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // const { handleLogin } = useContext(AuthContext);

  const router = useRouter();

  // email handeling event
  const PhoneHandler = (event) => {
    setPhone(event.target.value);
  };
  // password handleing event
  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  // login tirgger
  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      const response = await Api.post("user/login", {
        phone,
        password,
      });
      router.push("MicroComponents/success");
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;

      console.log(response.data.accessToken);
    } catch (e) {
      alert(e);
      router.push("MicroComponents/error");
      
    }
  }

  return (
    <React.Fragment>
      <div className="mt-40 grid place-content-around max-sm:mt-20">
        <h1 className="text-3xl mainfont font-bold">Login</h1>
        <p className="text-lg mainfont text-gray-600">
          Don't have an account?
          <a href="signup" className="text-blue-800 ml-2">
            Register
          </a>
        </p>

        <div className="mt-10">
          <p className="mt-5 text-lg text-gray-600 mainfont">Phone number</p>
          <input
            className="bg-slate-300 w-full p-3 rounded-md outline-1 "
            placeholder="Enter your phone number"
            onChange={PhoneHandler}
            value={phone}
          />
          <p className="mt-5 text-lg text-gray-600  mainfont">Set password </p>
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
    </React.Fragment>
  );
}
