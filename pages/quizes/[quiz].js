import React, { useState, useEffect } from "react";
import Api from "../api/apiCaller";
import { useRouter } from "next/router";
import { toast, Toaster } from "react-hot-toast";
import Navbar from "../Navbar";

const Quiz = () => {
  const [Data, setData] = useState("");
  const router = useRouter();
  const { quiz } = router.query;

  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [title, setTitle] = useState("");
  const [Done, setDone] = useState(false);
  const [explanationState, setExplanationState] = useState(
    Array(Data.quiz?.length).fill(false)
  );

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await Api.get(`/crud/quizes/${quiz}`);
        setData(response.data.result);
        setMinute(response.data.result.time);
        // setMinute(1);

        setTitle(response.data.result.title);
        upload();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataById();
  }, [quiz]);

  useEffect(() => {
    if (minute === 0) {
    } else if (seconds > 0 && minute > 0) {
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
      <nav className="bg-white shadow-lg mb-20 rounded-lg mt-5 max-sm:mt-5 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-0">
        <div className="container flex  items-center justify-between mx-auto ">
          <div className="mt-5 ">
            <button className="bg-green-100 shadow-sm outline outline-1 outline-gray- text-gray-900 font-bold px-20 py-3 rounded-md text-xl max-sm:px-6 flex justify-around">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 block m-auto mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {minute}M: {seconds}S
            </button>
          </div>
          <div className="mt-5">
            <button
              onClick={handleUploadQuiz}
              className="bg-green-100 shadow-sm outline outline-1 outline-gray- text-gray-900 font-bold px-20 py-3 rounded-md text-xl max-sm:px-6 flex m-auto"
            >
              Submit{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 block m-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
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
    } catch (error) {}
  }

  const [finalScore, setFinalScore] = useState(0);

  const ansSize = selectedAnswers?.length; // total selected answers, suppose 5
  useEffect(() => {
    if (score > 0) {
      if (ansSize !== score) {
        const minusScore = (ansSize - score) * 0.25;
        const total = score - minusScore;
        setFinalScore(total >= 0 ? total : 0);
      } else {
        setFinalScore(score);
      }
    } else {
      setFinalScore(score >= 0 ? score : 0);
    }
  }, [ansSize, score]);
  const toggleExplanation = (index) => {
    const newExplanationState = [...explanationState];
    newExplanationState[index] = !newExplanationState[index];
    setExplanationState(newExplanationState);
  };

  const ResultComponent = (
    <div>
      <Navbar />
      <div className="mt-20 py-5">
        <div className="flex justify-around">
          <button
            type="button"
            onClick={() => router.push(`/meritList/${quiz}`)}
            className="bg-green-500 text-xl py-3 px-5 text-white font-bold uppercase rounded-md w-fit flex justify-between"
          >
            <span>মেধা তালিকা </span>
          </button>
          <h1 className="bg-blue-700 text-xl py-3 px-5 text-white font-bold uppercase rounded-md w-fit">
            total score : {finalScore}
          </h1>
        </div>

        <div className="grid grid-cols-2 place-items-center mt-20	gap-10 max-sm:grid-cols-1 max-sm:gap-2 max-sm:mx-3 ">
          {Data.quiz?.map((quiz, index) => (
            <div
              key={index}
              className=" p-4 outline-1 rounded-md  mt-5 w-full	h-full outline-blue-300 shadow-gray-400 shadow

              "
            >
              <div className="flex text-xl gap-2 mb-4 font-semibold mainfont text-gray-700 max-sm:text-md ">
                {index + 1}.
                <div
                  className="text-xl mb-4 font-semibold mainfont text-gray-700 max-sm:text-md "
                  dangerouslySetInnerHTML={{ __html: quiz.question }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-2">
                {quiz.options.map((option, optionindex) => (
                  <div key={optionindex} className=" gap-10">
                    <div className="flex">
                      <span className="uppercase font-bold text-gray-700">
                        {String.fromCharCode(97 + optionindex)}
                      </span>
                      ) <span className="mainfont ml-2">{option}</span>
                    </div>
                  </div>
                ))}
              </div>

              {quiz.options.map((option, optionindex) => (
                <div key={optionindex} className="flex gap-10 mt-4">
                  <label
                    className={`bg-gray-200 py-4 mt-2 w-full text-left px-2 rounded-md font-semibold ${
                      selectedAnswers[index] === option
                        ? selectedAnswers[index] === quiz.answer
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : option === quiz.answer
                        ? "bg-green-500 text-white"
                        : "text-gray-800"
                    }  flex gap-6`}
                  >
                    <input
                      value={option}
                      type="checkbox"
                      className="ml-1 "
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

              <div className="mt-3">
                <button
                  className="font-semibold bg-blue-700 py-1 px-3 rounded-lg text-white capitalize block m-auto "
                  onClick={() => toggleExplanation(index)}
                >
                  {explanationState[index]
                    ? "Hide answer description"
                    : "Show answer description"}
                </button>
                {explanationState[index] && (
                  <div className="border-2 border-gray-800 mt-2 rounded-2xl p-4">
                    <p className="text-center text-lg mainfont capitalize">
                      answer description
                    </p>
                    <div
                      className=" text-gray-800 max-sm:text-sm"
                      dangerouslySetInnerHTML={{ __html: quiz.explain }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <div className="">
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
              <div className="grid grid-cols-2 place-items-center 	gap-10 max-sm:grid-cols-1 max-sm:gap-2 max-sm:mx-3 max-sm:gap-y-10">
                {Data.quiz?.map((quiz, index) => (
                  <div
                    key={index}
                    className=" p-4  rounded-md  mt-5  w-full	h-full shadow shadow-gray-400 outline outline-1 outline-gray-500   max-sm:mx-5"
                  >
                    <div className="flex text-xl gap-2 mb-4 font-semibold mainfont text-gray-700 max-sm:text-md ">
                      {index + 1}.
                      <div
                        className="text-xl mb-4 font-semibold mainfont text-gray-700 max-sm:text-md "
                        dangerouslySetInnerHTML={{ __html: quiz.question }}
                      />
                    </div>
                    <div className="grid grid-cols-2  gap-3 mb-2 ">
                      {quiz.options.map((option, optionindex) => (
                        <div key={optionindex} className=" gap-10 ">
                          <div className="flex">
                            <span className="uppercase font-bold text-gray-700">
                              {String.fromCharCode(97 + optionindex)}
                            </span>
                            ){" "}
                            <span className="mainfont ml-1 my-auto block max-sm:text-sm gap-2">
                              {option}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {quiz.options.map((option, optionindex) => (
                      <div key={optionindex} className="flex gap-10 mt-1">
                        <label className="  outline-gray-300 py-4  w-full text-left px-2 text-gray-800 hover:outline-1 hover:outline  flex  gap-6 bg-gray-200  mt-4  rounded-md font-semibold">
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
