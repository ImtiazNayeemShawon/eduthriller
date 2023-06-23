import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Api from "../api/apiCaller";
import Navbar from "../Navbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../footer";

export default function dashboard() {
  const router = useRouter();
  const { dashboard } = router.query;
  const [Data, setData] = useState("");

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await Api.get(`/crud/courseDashBoard/${dashboard}`);
        setData(response.data.courseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchDataById();
    });

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dashboard]);

  return (
    <React.Fragment>
      <Navbar />

      <div className="mt-0 ">
        <div className="mt-20 pt-20 p-10 h-60 bg-gray-900 rounded-lg">
          {Data ? (
            <h1 className="text-3xl font-bold bangfont max-sm:text-2xl max-sm:text-center text-white ">
              {Data.title}
            </h1>
          ) : (
            <div>
              <h1 className="text-white text-2xl mainfont font-semibold text-center capitalize">
                Wait for admin approval to acces this course{" "}
              </h1>
            </div>
          )}
        </div>
        <div className="grid grid-cols-8">
          <div></div>
          <div className="col-span-6 max-sm:col-span-8 max-sm:mx-5 bg-gray-100 rounded-md min-h-60 mt-2 shadow-lg ">
            <div className="flex justify-between mt-5 max-sm:block">
              <a
                download
                href={Data.routine}
                className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 max-sm:w-full max-sm:text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Routine
              </a>
              <a href={Data?.groupLink} target="blank">
                <button
                  type="button"
                  Target="blank"
                  className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 max-sm:w-full"
                >
                  <svg
                    className="w-6 h-6 mr-2 -ml-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                    />
                  </svg>
                  Join Facebook private group
                </button>
              </a>
            </div>
            {/* quiz data  */}

            <div className="mt-5 bg-slate-10 outline outline-1 outline-gray-300 rounded-md">
              <Accordion className="shadow-sm ">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="bangfont font-bold text-gray-700 max-sm:text-sm">
                    এক্সাম সমূহ
                  </Typography>
                </AccordionSummary>
                {Data.quizes?.map((q, index) => (
                  <AccordionDetails key={index}>
                    <Typography className="max-sm:text-sm">
                      <div className="flex justify-between outline outline-1 p-2 rounded outline-gray-200 ">
                        <h1 className="max-sm:m-auto my-auto"> {q.title}</h1>

                        <div className="flex mr-0">
                          {/* <button className="focus:outline-none focus:ring-blue-300 text-center mr-2 max-sm:text-sm max-sm:mt-2 bg-yellow-500 py-2 px-3 text-white font-semibold bangfont rounded-md">
                            Biology
                          </button> */}
                          <button
                            type="button"
                            onClick={() => router.push(`/meritList/${q?._id}`)}
                            className="focus:outline-none focus:ring-blue-300 text-center mr-2 max-sm:text-sm max-sm:mt-2 bg-green-500 py-2 px-3 text-white font-semibold bangfont rounded-md"
                          >
                            মেধা তালিকা
                          </button>
                          <button
                            type="button"
                            onClick={() => router.push(`/quizes/${q?._id}`)}
                            className="focus:outline-none focus:ring-blue-300 text-center mr-2 max-sm:text-sm max-sm:mt-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-8 h-8 text-green-600"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                ))}
              </Accordion>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="mt-80">
        <Footer />
      </div>
    </React.Fragment>
  );
}
