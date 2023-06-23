import React from "react";
import { useState } from "react";
import Footer from "../footer";
import { useRouter } from "next/router";
import Api from "../api/apiCaller";
import { toast, Toaster } from "react-hot-toast";

export default function payment() {
  const router = useRouter();
  const [sender, setSender] = useState(null);
  const [reciver, setReciver] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [transaction, setTransaction] = useState(null);
  const { payment } = router.query;

  async function handlePayment(ev) {
    ev.preventDefault();
    try {
      const response = await Api.post("/crud/payment", {
        sender,
        reciver,
        method: paymentMethod,
        transaction,
        courseId: payment,
      });
      toast.success(response.data.message);
      router.push(`/coursedashboard/${payment}`);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <React.Fragment>
      <Toaster />
      <div className="bangfont mt-10 mx-20 max-sm:mx-3 pb-20">
        <h1 className="mainfont font-bold text-2xl text-gray-700 text-center ">
          চেক আউট
        </h1>
        <h1 className="bangfont text-2xl mt-4">আপনার কোর্স</h1>
        <div className="mt-10">
          <h2 className="text-4xl">মেডিকেল ভর্তি ২০২৩ </h2>
          {/* <div className="h-60 w-full  bg-gray-500"></div> */}
          <h1 className="mt-10 text-2xl ">যেভাবে পেমেন্ট করবেন</h1>
          <p className="font-bold underline underline-offset-4 text-xl mt-5">
            ধাপ-০১ঃ
          </p>
          <p className="mt-4 text-xl">
            নিমোক্ত যেকোনো নাম্বারে টাকা সেন্ড মানি করো-
          </p>
          <ul className="list-disc ml-10">
            <li className="mainfont  text-gray-800 font-semibold">
              Nagad:01297654
            </li>
            <li className="mainfont  text-gray-800 font-semibold">
              Bkash:324324112
            </li>
          </ul>
          <p className="font-bold underline underline-offset-4 text-xl mt-5">
            ধাপ-০২ঃ
          </p>
          <p className="text-xl mt-2">
            সেন্ডমানি করার পর নিচের ধাপে প্রয়োজনীয় তথ্য দিয়ে ভর্তি সম্পন্ন
            করো...............
          </p>
          <div className="flex justify-between mt-2">
            <h1 className="text-xl font-bold ">মোট :</h1>
            <h1 className="text-xl font-bold mainfont text-green-800">
              ৳ 2499
            </h1>
          </div>
          <hr className="h-1 rounded-xl bg-green-400" />
          <h1 className="text-2xl mt-4  underline-offset-4 underline">
            ভর্তি সম্পন্ন করুন
          </h1>
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            <div className="mt-4">
              <label className="block">
                আপনি যে নাম্বার থেকে টাকা পাঠিয়েছেন{" "}
              </label>
              <input
                onChange={(e) => setSender(e.target.value)}
                value={sender}
                type="number"
                className="outline outline-1 rounded-md py-2 px-4 outline-gray-400 w-full mainfont"
                placeholder=" আপনি যে নাম্বার থেকে টাকা  পাঠিয়েছেন"
              />
            </div>
            <div className="mt-4 max-sm:mt-2">
              <label className="block">
                আমাদের যে নাম্বারে টাকা পাঠানো হয়েছে{" "}
              </label>
              <input
                type="number"
                onChange={(e) => setReciver(e.target.value)}
                value={reciver}
                className="outline outline-1 rounded-md py-2 px-4 outline-gray-400 w-full mainfont"
                placeholder="আমাদের যে নাম্বারে টাকা পাঠানো হয়েছে"
              />
            </div>
            <div className="mt-4 max-sm:mt-2">
              <label className="block ">পেমেন্ট মেথড </label>
              <input
                type="text"
                onChange={(e) => setPaymentMethod(e.target.value)}
                value={paymentMethod}
                className="outline outline-1 rounded-md py-2 px-4 outline-gray-400 w-full"
                placeholder="example:বিকাশ,নগদ,রকেট "
              />
            </div>
            <div className="mt-4 max-sm:mt-2">
              <label className="block mainfont font-bold">
                Transaction ID{" "}
              </label>
              <input
                onChange={(e) => setTransaction(e.target.value)}
                value={transaction}
                type="text"
                className="outline outline-1 rounded-md py-2 px-4 outline-gray-400 w-full mainfont"
                placeholder="exmple:Transaction ID: 8A293C6B7D

                "
              />
            </div>
          </div>
          <button
            onClick={handlePayment}
            className="bg-green-500 py-3 w-full mt-3 rounded-lg font-bold text-gray-200"
          >
            পেমেন্ট সম্পন্ন করুন{" "}
          </button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
