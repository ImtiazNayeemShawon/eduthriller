import React, { useState, useEffect } from "react";
import Api from "../api/apiCaller";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

export default function Merit() {
  const [results, setResults] = useState([]);
  const router = useRouter();
  const [username, setUsername] = useState();

  const token = Cookies.get("token");
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const username = decodedToken.username;
      setUsername(username);
    }
  }, [token]);

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
      <div className="mt-20">
        {results.length > 0 ? (
          results.map((item, index) => (
            <div
              key={item._id}
              className={`flex gap-20  max-sm:gap-3 bg-white shadow-md outline outline-1 outline-gray-200 py-4 px-2 rounded-sm mt-2 ${
                item.user?.name === username ? "bg-green-400" : "bg-gray-800"
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
