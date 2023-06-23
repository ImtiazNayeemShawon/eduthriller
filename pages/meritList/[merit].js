import React, { useState, useEffect } from "react";
import AdminNavbar from "../Navbar";
import Api from "../api/apiCaller";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MyContext } from "/auth/AuthContext";

export default function Merit() {
  const [results, setResults] = useState([]);
  const router = useRouter();

  const { UserloggedIn, user } = useContext(MyContext);
  const userdata = useContext(MyContext);
  const [username, setUserName] = useState("");

  useEffect(() => {
    setUserName(userdata.UserName.name);
  });

  const { merit } = router.query;

  useEffect(() => {
    const getMerit = async () => {
      try {
        const response = await Api.get(`/crud/QuizResult/${merit}`);
        const responseData = response.data;
        console.log(responseData);
        if (Array.isArray(responseData)) {
          const sortedResults = responseData.sort(
            (a, b) => parseFloat(b.score) - parseFloat(a.score)
          );
          setResults(sortedResults);
        } else {
          console.error("Invalid response data format: expected an array.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (merit) {
      getMerit();
    }
  }, [merit]);

  return (
    <React.Fragment>
      <AdminNavbar />
      <div className="mt-20">
        {results.length > 0 ? (
          results.map((item, index) => (
            <div
              key={item._id}
              className={`flex gap-20  max-sm:gap-3 bg-white shadow-md outline outline-1 outline-gray-200 py-4 px-2 rounded-sm mt-2 ${
                item.user?.name === username ? "bg-green-100" : ""
              }`}
            >
              <p className="text-lg mainfont font-semibold text-gray-800 max-sm:my-auto ml-3">
                {index + 1}.
              </p>
              <div className="max-sm:block ">
                <p className="text-lg mainfont font-semibold text-gray-800 max-sm">
                  {item.user?.name || "Unknown"}
                </p>
                <p className="text-lg mainfont font-semibold text-blue-700 max-sm:text-sm max-sm:font-medium">
                  {item.user?.school || "Unknown"}
                </p>
                <p className="text-lg mainfont font-semibold text-green-800 max-sm:text-sm">
                  প্রাপ্ত নম্বর : {item.score}
                </p>
              </div>
              <p className="text-2xl font-bold  text-green-800 max-sm:justify-end mr-1 ml-auto my-auto">
                #{index + 1}
              </p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </React.Fragment>
  );
}
