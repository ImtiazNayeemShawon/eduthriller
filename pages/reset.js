import React, { useState } from "react";
import Api from "./api/apiCaller";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

export default function ResetPassword() {
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    Api.post("/user/reset-password", {
      token,
      newPassword,
    })
      .then((response) => {
        toast.success(response.data.message);
        router.push("/login");
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };

  return (
    <div>
      <Toaster />

      <form onSubmit={handleSubmit}>
        <div className="grid ">
          <div className="mt-20 grid place-content-center max-sm:mt-20 col-span-2">
            <h1 className="text-3xl mainfont font-bold text-center">
              Reset Password
            </h1>

            <div className="mt-10">
              <p className="mt-5 text-lg text-gray-600 mainfont font-semibold">
                Your token from SMS :
              </p>
              <input
                className="bg-slate-300 w-full p-3 rounded-md outline-1 "
                placeholder="Your token from SMS"
                type="text"
                value={token}
                onChange={handleTokenChange}
              />
              <p className="mt-5 text-lg text-gray-600  mainfont font-semibold">
                Set new password{" "}
              </p>
              <input
                className="bg-slate-300 w-full p-3 rounded-md outline-1"
                placeholder="Enter your Password "
                type="password"
                value={newPassword}
                onChange={handleNewPasswordChange}
              />{" "}
              <button
                type="submit"
                className="text-lg text-gray-200 mainbg p-3 rounded-lg w-full mt-20 "
              >
                Reset
              </button>
              <br />
            </div>
          </div>
          <div className="sideimage  mt-20"></div>
        </div>
      </form>
    </div>
  );
}
