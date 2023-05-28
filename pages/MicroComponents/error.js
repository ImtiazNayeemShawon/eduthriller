import React from "react";
import Errorimg from "./img/error.gif";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Error() {
  const router = useRouter();

  const Next = () => {
    router.push("/login");
  };
  return (
    <React.Fragment>
      <div class="grid place-items-center h-screen">
        <div class="flex justify-center items-center">
          <div className="bg-gray-100 p-10 shadow-2xl rounded-lg">
            <Image
              src={Errorimg}
              width={150}
              className="m-auto block"
              alt="succes image"
            />
            <h1 className="text-center  text-3xl font-bold  text-red-600 robofont">
             Unseccussful{" "}
            </h1>
            <p className="text-xl mainfont text-red-400">
              Authentication failed
            </p>
            <button
              onClick={Next}
              className="m-auto block mt-5 bg-blue-700 text-white mainfont text-xl p-2 rounded-md font-semibold"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
