import React from "react";
import { useState, useEffect } from "react";
import Footer from "../footer";
import { useRouter } from "next/router";
import Api from "../api/apiCaller";
import { toast, Toaster } from "react-hot-toast";
import Navbar from "../Navbar";

export default function payment() {
  const router = useRouter();
  const [sender, setSender] = useState(null);
  const [reciver, setReciver] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [transaction, setTransaction] = useState(null);
  const { payment } = router.query;
  const [Data, setData] = useState("");

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
  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await Api.get(`/crud/course/${payment}`);
        setData(response.data.courseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchDataById();
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [payment]);

  const [paymentDetails, setPaymentDetails] = useState([]);

  useEffect(() => {
    handleGet();
  }, []);

  async function handleGet() {
    try {
      const response = await Api.get("crud/paymentDetails");
      const paymentsData = response.data.result;
      setPaymentDetails(paymentsData);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <React.Fragment>
      <Toaster />
      <Navbar />
      <div className="bangfont mt-20 mx-20 max-sm:mx-2 pb-20">
        <div className="mt-1">
          <h1 className="text-3xl font-bold bangfont max-sm:text-2xl max-sm:text-left flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-green-600"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>{" "}
            আপনার কোর্স : {Data.title}
          </h1>
          <h1 className="mt-5 text-2xl ">যেভাবে পেমেন্ট করবেন-</h1>
          <div className="outline outline-1 p-2 rounded-lg outline-gray-300">
            <p className="font-bold underline underline-offset-4 text-xl mt-2">
              ধাপ-০১ঃ
            </p>
            <p className="mt-4 text-xl">{paymentDetails[0]?.step1}</p>
            <ul className="list-disc ml-10">
              <div
                className="mainfont font-semibold text-gray-800 max-sm:text-sm"
                dangerouslySetInnerHTML={{ __html: paymentDetails[0]?.number }}
              />
            </ul>
            <p className="font-bold underline underline-offset-4 text-xl mt-5">
              ধাপ-০২ঃ
            </p>

            <p className="text-xl mt-2">{paymentDetails[0]?.step2}</p>
          </div>
          <div className="flex justify-between mt-2">
            <h1 className="text-xl font-bold flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              মোট :
            </h1>
            <h1 className="text-xl font-bold mainfont text-green-600">
              ৳ {Data.price}
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 max-sm:gap-2">
            <div className="mt-8">
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
            <div className="mt-8 max-sm:mt-0">
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
            <div className="mt-4 max-sm:mt-0">
              <label className="block ">পেমেন্ট মেথড </label>
              <input
                type="text"
                onChange={(e) => setPaymentMethod(e.target.value)}
                value={paymentMethod}
                className="outline outline-1 rounded-md py-2 px-4 outline-gray-400 w-full"
                placeholder="example:বিকাশ,নগদ,রকেট "
              />
            </div>
            <div className="mt-4 max-sm:mt-0">
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
