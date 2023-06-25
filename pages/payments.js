import React, { useState, useEffect } from "react";
import Api from "./api/apiCaller";
import { toast, Toaster } from "react-hot-toast";
import AdminNavbar from "./AdminNavbar";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MyContext } from "../auth/AuthContext";

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const { loggedIn } = useContext(MyContext);
  const router = useRouter();

  if (typeof window !== "undefined") {
    if (!loggedIn) {
      router.push("/AdminLogin");
    }
  }
  useEffect(() => {
    handleGet();
  }, []);

  async function handleGet() {
    try {
      const response = await Api.get("crud/payment");
      const paymentsData = response.data.result;
      setPayments(paymentsData);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const approveEnrollment = (enrollmentId, courseId) => {
    Api.put(`/crud/enrollments/${enrollmentId}/approve`, { courseId })
      .then((response) => {
        toast.success(response.data.message);
        handleGet(); // Fetch updated payments after approval
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const filteredData = payments.filter((item) => item.approved === false);
  return (
    <div>
      <AdminNavbar />
      <Toaster />
      <h1 className=" mt-20 mainfont text-2xl font-semibold text-gray-700 capitalize text-center">
        Payments forms
      </h1>
      <div className="mt-20">
        {filteredData.length === 0 ? (
          <div className="text-3xl mainfont font-semibold text-center capitalize">
            No request found may all request are approved
          </div>
        ) : (
          <div>
            {filteredData.map((data, i) => (
              <div
                className="bg-teal-100 shadow-sm shadow-neutral-300 px-10 py-10 mt-10 rounded-lg"
                key={i}
              >
                <div className="grid grid-cols-2 gap-4">
                  <p className="px-2 py-3 bg-white rounded-lg text-lg text-gray-800 mainfont capitalize">
                    name: {data.user.name}
                  </p>
                  <p className="px-2 py-3 bg-white rounded-lg text-lg text-gray-800 mainfont capitalize">
                    phone: {data.user.phone}
                  </p>
                  <p className="px-2 py-3 bg-white rounded-lg text-lg text-gray-800 mainfont capitalize">
                    sender number: {data.sender}
                  </p>
                  <p className="px-2 py-3 bg-white rounded-lg text-lg text-gray-800 mainfont capitalize">
                    reciver number: {data.reciver}
                  </p>
                  <p className="px-2 py-3 bg-white rounded-lg text-lg text-gray-800 mainfont capitalize">
                    payment method: {data.method}
                  </p>
                  <p className="px-2 py-3 bg-white rounded-lg text-lg text-gray-800 mainfont capitalize">
                    transaction ID: {data.transaction}
                  </p>
                  <p className="px-2 py-3 bg-white rounded-lg text-lg text-gray-800 mainfont capitalize">
                    Course ID: {data.courseId}
                  </p>
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => approveEnrollment(data._id, data.courseId)}
                    className="bg-blue-700 py-2 px-4 text-lg uppercase font-bold mainfont rounded-md text-gray-100"
                  >
                    Approve
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
