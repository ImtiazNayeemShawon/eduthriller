import React from "react";
import AdminNavbar from "../AdminNavbar";
import Api from "../api/apiCaller";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";

export default function AllCourse() {
  const router = useRouter();
  const { id } = router.query;
  const checkLoggedIn = async () => {
    try {
      const response = await Api.get("admin/checkAdmin");
      const { loggedIn } = response.data;
      if (!loggedIn) {
        setTimeout(() => {
          router.push("/AdminLogin");
        }, 2000);
      }
    } catch (error) {
      toast.error("Failed to check logged-in status. Please try again.");
      console.log(error);
      setTimeout(() => {
        router.push("/AdminLogin");
      }, 1000);
    }
  };
  const DeleteById = async () => {
    try {
      await Api.delete(`/crud/course/${id}`);
      toast.success("Course deleted successfully!");
      router.push("/adminAllCourse");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <React.Fragment>
      <AdminNavbar />
      <Toaster />
      <div className="grid place-content-center mt-40 ">
        {/* <button className="m-auto block  bg-green-500 px-20" onClick={ DeleteById}>Delete</button> */}
        <div className=" top-0 left-0 right-0 z-50  p-4  overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ">
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="p-6 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this course?
                </h3>
                <button
                  onClick={DeleteById}
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={() => router.push("/adminAllCourse")}
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
