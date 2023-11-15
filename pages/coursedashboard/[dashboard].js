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
import Exam from "/public/exam.png";
import Image from "next/image";
import { saveAs } from "file-saver";

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

  const downloadImage = () => {
    saveAs(Data?.routine, "Routine.jpg"); // Put your image url here.
  };
  const lock = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
  return (
    <React.Fragment>
      <div className="mt-0 ">
        <div className="mt-20 pt-20 p-10 h-60 bg-gray-900 rounded-lg">
          {Data ? (
            <h1 className="text-3xl font-bold bangfont max-sm:text-2xl max-sm:text-center text-white ">
              {Data.title}
            </h1>
          ) : (
            <div>
              <h1 className="text-white text-2xl bangfont font-semibold text-center capitalize">
                Wait for admin approval to acces this course{" "}
              </h1>
            </div>
          )}
        </div>
        <div className="grid grid-cols-8">
          <div></div>
          <div className="col-span-6 max-sm:col-span-8 max-sm:mx-5 bg-gray-100 rounded-md min-h-60 mt-2 shadow-lg ">
            <div className="flex justify-between mt-5 max-sm:block">
              <button
                onClick={downloadImage}
                className="text-white bg-[#050708] cursor-pointer hover:bg-[#050708]/90  focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 max-sm:w-full max-sm:text-center"
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
              </button>

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
              {Data.quizes
                ?.reduce((acc, q) => {
                  const moduleIndex = acc.findIndex(
                    (group) => group[0]?.module === q.module
                  );
                  if (moduleIndex === -1) {
                    acc.push([q]);
                  } else {
                    acc[moduleIndex].push(q);
                  }
                  return acc;
                }, [])
                .map((group, groupIndex) => (
                  <Accordion className="shadow-sm" key={groupIndex}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${groupIndex + 1}-content`}
                      id={`panel${groupIndex + 1}-header`}
                    >
                      {group.some((q) => q.status === "active") ? (
                        <p className=" text-lg text-gray-700 max-sm:text-sm bangfont font-semibold">
                          {group[0]?.module}
                          
                        </p>
                      ) : (
                        <div className="flex justify-between flex-wrap ">
                          <button>Coming Soon</button>
                          <button> {lock}</button>
                        </div>
                      )}
                    </AccordionSummary>
                    <AccordionDetails>
                      {group.map((q, index) => (
                        <h2 key={index} className="max-sm:text-sm bangfont">
                          <div className="flex justify-between outline outline-1 p-2 rounded outline-gray-200 flex-wrap">
                            <h1 className="max-sm: text-sm my-auto bangfont">{q.title}</h1>
                            <div className="flex mr-0">
                              {q.status === "active" ? ( // Only show the buttons for active quizzes
                                <>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      router.push(`/meritList/${q?.quiz}`)
                                    }
                                    className="focus:outline-none focus:ring-blue-300 text-center mr-2 max-sm:text-sm max-sm:mt-2 bg-green-500 py-1 px-3 text-white font-semibold bangfont rounded-md"
                                  >
                                    মেধা তালিকা
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      router.push(`/quizes/${q?.quiz}`)
                                    }
                                    className="focus:outline-none focus:ring-blue-300 text-center mr-2 max-sm:text-sm max-sm:mt-2"
                                  >
                                    <Image src={Exam} width={30} />
                                  </button>
                                </>
                              ) : (
                                <p>{lock}</p>
                              )}
                            </div>
                          </div>
                        </h2>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
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
