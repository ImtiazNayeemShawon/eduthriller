import React from "react";
import { useState } from "react";
import Api from "./api/apiCaller";
import { toast, Toaster } from "react-hot-toast";

export default function addPaymentDetails() {
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [number, setNumber] = useState("");

  async function handlePayment(ev) {
    ev.preventDefault();
    try {
      const response = await Api.post("/crud/paymentDetails", {
        step1,
        step2,
        number,
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  }
  async function handleUpPayment(ev) {
    ev.preventDefault();
    try {
      const response = await Api.put("/crud/paymentDetails", {
        step1,
        step2,
        number,
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <div className="">
      <Toaster />
      <div className="outline outline-1 outline-gray-300 p-4 rounded-lg">
        <h1 className="mainfont font-semibold text-2xl text-center mb-3">
          Add payment details
        </h1>

        <div className="outline outline-1 p-2 rounded-lg outline-gray-300 m-auto">
          <p className="font-bold underline underline-offset-4 text-xl mt-2">
            ধাপ-০১ঃ
          </p>
          <textarea
            onChange={(e) => setStep1(e.target.value)}
            value={step1}
            className="outline w-full outline-1 p-2 outline-gray-400 rounded-lg mt-2"
          />

          <ul className="list-disc ">
            <p>Bkash number for payment</p>
            <input
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              className="outline outline-1 p-2 outline-gray-400 rounded-lg mt-2"
            />
          </ul>
          <p className="font-bold underline underline-offset-4 text-xl mt-5">
            ধাপ-০২ঃ
          </p>

          <textarea
            onChange={(e) => setStep2(e.target.value)}
            value={step2}
            className=" w-full outline outline-1 p-2 outline-gray-400 rounded-lg mt-2"
          />
        </div>
        <div className="flex justify-around">
          <button
            onClick={handlePayment}
            className="py-2 px-4 bg-green-400 text-white m-auto block mt-3"
          >
            Add details
          </button>
          <button
            onClick={handleUpPayment}
            className="py-2 px-4 bg-green-400 text-white m-auto block mt-3"
          >
            Update details
          </button>
        </div>
      </div>
    </div>
  );
}
