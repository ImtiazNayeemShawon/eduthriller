import React, { useState } from "react";
import Api from "./api/apiCaller";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

export default function ForgotPassword() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    Api.post("/user/forgot-password", {
      phone,
    })
      .then((response) => {
        toast.success(response.data.message);
        setTimeout(() => {
          router.push("/reset");
        });
      })
      .catch((error) => {
        if (error.response) {
          // Request was made and server responded with an error status
          const errorMessage = error.response.data.error;
          toast.error(errorMessage);
          setStatus(false);
        } else if (error.request) {
          // Request was made but no response received
          toast.error("No response from the server.");
        } else {
          // Something else happened in making the request
          toast.error("An error occurred while processing the request.");
        }
      });
  };

  return (
    <div className="block m-auto max-sm:mx-3">
      <div className="grid ">
        <div className="mt-40 grid place-content-center  col-span-2">
          <h1 className="text-3xl mainfont font-bold text-center">
            Verify your number{" "}
          </h1>
          {status ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="text-center w-10 h-10 mt-5 text-gray-200 animate-spin  fill-green-500  m-auto block"
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
              <p className="text-center mainfont ">
                Please wait Checking your indentity
              </p>
              <span className="sr-only">Loading...</span>
            </div>
          ) : null}

          <div>
            <Toaster />
            <form className="mt-10" onSubmit={handleSubmit}>
              <label className="mainfont font-semibold">
                Enter Your Phone Number:
                <input
                  type="text"
                  className="bg-slate-300 w-full p-3 rounded-md outline-1 "
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </label>
              <button type="submit"></button>
              <button
                onClick={() => setStatus(true)}
                type="submit"
                className="text-lg text-gray-200 mainbg p-3 rounded-lg w-full mt-4"
              >
                GET OTP
              </button>
            </form>
          </div>
        </div>
        <div className="sideimage  mt-20"></div>
      </div>
    </div>
  );
}
