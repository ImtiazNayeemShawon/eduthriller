import React, { useState, useEffect } from "react";
import Api from "../api/apiCaller";
import { useRouter } from "next/router";
import { toast, Toaster } from "react-hot-toast";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../Navbar";

const Quiz = () => {
  const [Data, setData] = useState("");
  const router = useRouter();
  const { quiz } = router.query;

  const [minute, setMinute] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [title, setTitle] = useState("");
  const [Done, setDone] = useState(false);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await Api.get(`/crud/quizes/${quiz}`);
        setData(response.data.result);
        setMinute(response.data.result.time);
        setTitle(response.data.result.title);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataById();
  }, [quiz]);

  useEffect(() => {
    if (seconds > 0 && minute > 0) {
      const timer = setTimeout(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (seconds === 0 && minute > 0) {
      setSeconds(59);
      setMinute((prevMinute) => prevMinute - 1);
    }
  }, [seconds, minute]);

  const quizTimer = (
    <div className="fixed">
      <nav className="bg-white shadow-lg mb-20 rounded-lg mt-10 max-sm:mt-5 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-0">
        <div className="container flex  items-center justify-between mx-auto ">
          <div className="mt-5 ">
            <button className="bg-green-100 shadow-sm outline outline-1 outline-gray- text-gray-900 font-bold px-20 py-3 round পরিশ্রমীও হও

অনলাইনে একাডেমিক ও ভর্তি প্রস্তুতির দেশসেরা প্ল্যাটফর্ম এডুথ্রিলার।শুধুমাত্র আমাদের কাছে পড়ে অসংখ্য শিক্ষার্থী একাডেমিক ও ভর্তি প্রস্তুতিতে দেশসেরা সাফল্য অর্জন করেছে ভবিষ্যতেও সাফল্যের ধারা অব্যাহত থাকবে ইনশাআল্লাহ । মূল বই ভিত্তিক ও প্রশ্ন প্যার্টানের উপর গুরুত্ব দিয়ে প্রতিটি ক্লাস ও এক্সাম সাজানো হয় যাতে একজন শিক্ষার্থী'র তার লক্ষ্যে সবচেয়ে এগিয়ে থাকে। এডুথ্রিলারের প্রতিটা ক্লাস ও এক্সামের প্রশ্নপত্রed-md text-xl max-sm:px-6">
              {minute}M: {seconds}S
            </button>
          </div>
          <div className="mt-5">
            <button
              onClick={handleUploadQuiz}
              className="bg-green-100 shadow-sm outline outline-1 outline-gray- text-gray-900 font-bold px-20 py-3 rounded-md text-xl max-sm:px-6"
            >
              Submit
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(Data.quiz?.length).fill("")
  );
  const handleAnswerClick = (questionIndex, selectedAnswer) => {
    setSelectedAnswers((prevState) => {
      const updatedAnswers = [...prevState];
      updatedAnswers[questionIndex] = selectedAnswer;
      return updatedAnswers;
    });
  };

  useEffect(() => {
    calculateScore();
  });

  const calculateScore = () => {
    let score = 0;
    Data.quiz?.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        score++;
      }
    });
    return setScore(score);
  };

  const [date] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
    })
  );
  async function handleUploadQuiz(ev) {
    try {
      const response = await Api.post("/crud/submitQuiz", {
        score: finalScore,
        quiz,
        date,
      });
      toast.success(response.data.message);
      setDone(true);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const [finalScore, setFinalscore] = useState(0);

  const ansSize = selectedAnswers?.length; //total selected ans suppose 5
  useEffect(() => {
    if (score > 0) {
      if (ansSize !== score) {
        const minuseScore = (ansSize - score) * 0.25;
        const total = score - minuseScore;
        setFinalscore(total);
      } else {
        setFinalscore(score);
      }
    } else {
      setFinalscore(score);
    }
  });
  const ResultComponent = (
    <div>
      <Navbar />
      <div className="mt-20">
        <div className="flex">
          <button
            type="button"
            onClick={() => router.push(`/meritList/${quiz}`)}
            className="focus:outline-none focus:ring-blue-300 text-center mr-2 max-sm:text-sm max-sm:mt-2 bg-green-500 py-2 px-3 text-white font-semibold bangfont rounded-md"
          >
            মেধা তালিকা
          </button>
          <h1 className="bg-green-700 text-xl py-3 px-5 text-white font-bold uppercase rounded-md w-fit">
            total score : {finalScore}
          </h1>
        </div>

        <div className="grid grid-cols-2 place-items-center mt-20	gap-10 max-sm:grid-cols-1 max-sm:gap-2">
          {Data.quiz?.map((quiz, index) => (
            <div
              key={index}
              className=" p-4 outline-1 rounded-md  mt-5 w-full	h-full outline-blue-300 shadow-gray-200 shadow-md"
            >
              <h1 className="text-xl mb-4 font-semibold bangfont text-gray-700 max-sm:text-md ">
                <span> </span>
                {index + 1} <span>.</span> {quiz.question}
              </h1>
              <div className="grid grid-cols-2 gap-4 mb-2">
                {quiz.options.map((option, optionindex) => (
                  <div key={optionindex} className=" gap-10">
                    <div className="flex">
                      <span className="uppercase font-bold text-gray-700">
                        {String.fromCharCode(97 + optionindex)}
                      </span>
                      ) <span className="bangfont ml-2">{option}</span>
                    </div>
                  </div>
                ))}
              </div>

              {quiz.options.map((option, optionindex) => (
                <div key={optionindex} className="flex gap-10 mt-4">
                  <label
                    className={`bg-gray-200 py-4 mt-2 w-full text-left px-2 rounded-md font-semibold ${
                      selectedAnswers[index] === option &&
                      selectedAnswers[index] !== quiz.answer
                        ? " outline-red-500 outline"
                        : "text-gray-800"
                    } hover:outline-1 hover:outline outline-green-500 flex gap-6`}
                  >
                    <input
                      value={option}
                      type="radio"
                      className="ml-1"
                      name={`option${index}`}
                      checked={selectedAnswers[index] === option}
                      onChange={() => handleAnswerClick(index, option)}
                    />
                    <span className="uppercase">
                      {String.fromCharCode(97 + optionindex)}
                    </span>
                  </label>
                </div>
              ))}
              <div className="mt-5">
                <p className="font-bold mainfont text-xl  text-gray-900 ">
                  Right answer:
                </p>
                <label className="bg-gray-200 py-4 mt-2 w-full text-left px-2 rounded-md font-semibold text-gray-800 outline-1 outline outline-green-500 flex  gap-6">
                  {quiz.answer}
                </label>
              </div>
              <div className="mt-3">
                <Accordion className="shadow-sm ">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="bangfont font-bold text-gray-700 max-sm:text-sm text-center">
                      Explain:
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails key={index}>
                    <Typography className="max-sm:text-sm">
                      {quiz.explain}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <div>
        {Done ? (
          <div>{ResultComponent}</div>
        ) : (
          <div>
            <div className=" bg-gray-200">{quizTimer}</div>

            <h1 className="text-gray-800 text-center text-4xl mainfont font-bold capitalize max-sm:text-2xl my-5 mt-40">
              {title}
            </h1>
            <Toaster />
            {/* quiz component */}
            <div className="mt-20">
              <div className="grid grid-cols-2 place-items-center 	gap-10 max-sm:grid-cols-1 max-sm:gap-2">
                {Data.quiz?.map((quiz, index) => (
                  <div
                    key={index}
                    className=" p-4  rounded-md  mt-5 w-full	h-full  shadow-gray-300 shadow-md"
                  >
                    <h1 className=" mb-4 font-semibold bangfont text-gray-700 max-sm:text-md ">
                      <span> </span>
                      {index + 1} <span>. </span> {quiz.question}
                    </h1>
                    <div className="grid grid-cols-2  gap-3 mb-2">
                      {quiz.options.map((option, optionindex) => (
                        <div key={optionindex} className=" gap-10">
                          <div className="flex">
                            <span className="uppercase font-bold text-gray-700">
                              {String.fromCharCode(97 + optionindex)}
                            </span>
                            ){" "}
                            <span className="bangfont ml-1 max-sm:text-sm gap-2">
                              {option}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {quiz.options.map((option, optionindex) => (
                      <div key={optionindex} className="flex gap-10 mt-1">
                        <label className="bg-white outline outline-1 outline-gray-300 py-4 mt-1 w-full text-left px-2 rounded-md font-semibold text-gray-800 hover:outline-1 hover:outline  flex  gap-6">
                          <input
                            value={option}
                            type="radio"
                            className="ml-1"
                            name={`option${index}`}
                            checked={selectedAnswers[index] === option}
                            onChange={() => handleAnswerClick(index, option)}
                          />
                          <span className="uppercase">
                            {String.fromCharCode(97 + optionindex)}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Quiz;
