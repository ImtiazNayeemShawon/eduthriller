import React from "react";
import Successimg from "./img/success.gif";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();

  const Next = () => {
    router.push("/profile");
  };
  return (
    <React.Fragment>
      <div class="grid place-items-center h-screen">
        <div class="flex justify-center items-center">
          <div className="bg-gray-100 p-10 shadow-2xl rounded-lg">
            <Image
              src={Successimg}
              width={150}
              className="m-auto block"
              alt="succes image"
            />
            <h1 className="text-center  text-3xl font-bold  text-green-600 robofont">
             Login successful!{" "}
            </h1>
            <p className="text-xl mainfont text-gray-600">
              Authentication successful
            </p>
            <button
              onClick={Next}
              className="m-auto block mt-5 bg-blue-700 text-white mainfont text-xl p-2 rounded-md font-semibold"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
