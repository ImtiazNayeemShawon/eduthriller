import React from "react";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import AdminNavbar from "../AdminNavbar";
import Api from "../api/apiCaller";
import { toast, Toaster } from "react-hot-toast";


export default function quiz() {
  const router = useRouter();
  const { addquiz } = router.query;
  const [courseID, setCourseId] = useState("");

  useEffect(() => {
    setCourseId(addquiz);
  }, [addquiz]);

  // quiz item handling function
  const [quiz, setQuiz] = useState([
    {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      option5: "",
      explain: "",
      rightOption: "",
    },
  ]);
  const handlequiz = (e, index) => {
    const { name, value } = e.target;
    const updatedQuiz = [...quiz];
    updatedQuiz[index] = { ...updatedQuiz[index], [name]: value };
    setQuiz(updatedQuiz);
  };
  
  const handleAddquiz = () => {
    setQuiz([
      ...quiz,
      {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        option5: "",
        explain: "",
        rightOption: "",
      },
    ]);
  };

  const handleDeletequiz = (index) => {
    const updatedQuiz = [...quiz];
    updatedQuiz.pop(index, 1);
    setQuiz(updatedQuiz);
  };

  const [time, setTime] = useState();
  const timeHandler = (e) => {
    setTime(e.target.value);
  };

  async function handleUploadCourse(ev) {
    ev.preventDefault();
    try {
      const response = await Api.post("/crud/addquiz", {
        time,
        quiz,
        courseID,
      });
      toast.success(response.data.message);
      router.push("/adminAllCourse");
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <React.Fragment>
        <Toaster/>
      <AdminNavbar />
      <div className="pb-20">
        <div className="mt-20">
          <h1 className="text-4xl mainfont capitalize font-semibold text-center">
            Add quiz
          </h1>
        </div>
        <p>Add time as minute </p>
        <input
          type="number"
          className="bg-gray-200 p-2 rounded-md outline-dotted outline-1"
          value={time}
          onChange={timeHandler}
        />

        <div className="mt-5 grid grid-cols-2 gap-5">
          {quiz.map((quiz, index) => (
            <div key={index} className="mt-10">
              <h1 className="text-xl">Quiz number : {index + 1}</h1>
              <input
                className="p-2 w-full  bg-gray-300 outline-dotted outline-1 mt-4 rounded-xl"
                placeholder="Enter the question "
                type="text"
                name="question"
                value={quiz.question}
                onChange={(e) => handlequiz(e, index)}
              />
              <p className="mt-2">Option number 1:</p>
              <input
                className="p-2 w-full  bg-gray-100 outline-dashed outline-1 mt-2"
                placeholder=" exp: what is the defi..........."
                type="text"
                name="option1"
                value={quiz.option1}
                onChange={(e) => handlequiz(e, index)}
              />
              <p className="mt-2">Option number 2:</p>
              <input
                className="p-2 w-full  bg-gray-100 outline-dashed outline-1 mt-2"
                placeholder=" exp: what is the defi..........."
                type="text"
                name="option2"
                value={quiz.option2}
                onChange={(e) => handlequiz(e, index)}
              />
              <p className="mt-2">Option number 3:</p>
              <input
                className="p-2 w-full  bg-gray-100 outline-dashed outline-1 mt-2"
                placeholder=" exp: what is the defi..........."
                type="text"
                name="option3"
                value={quiz.option3}
                onChange={(e) => handlequiz(e, index)}
              />
              <p className="mt-2">Option number 4:</p>
              <input
                className="p-2 w-full  bg-gray-100 outline-dashed outline-1 mt-2"
                placeholder=" exp: what is the defi..........."
                type="text"
                name="option4"
                value={quiz.option4}
                onChange={(e) => handlequiz(e, index)}
              />
              <p className="mt-2">Option number 5:</p>
              <input
                className="p-2 w-full  bg-gray-100 outline-dashed outline-1 mt-2"
                placeholder=" exp: what is the defi..........."
                type="text"
                name="option5"
                value={quiz.option5}
                onChange={(e) => handlequiz(e, index)}
              />
              <p className="mt-2">Add Right option </p>
              <input
                className="p-2 w-full  bg-gray-400 outline-dashed outline-1 mt-2"
                placeholder="add the Right option"
                type="text"
                name="rightOption"
                value={quiz.rightOption}
                onChange={(e) => handlequiz(e, index)}
              />
              <p className="mt-2">Add explaination </p>
              <textarea
                className="p-2 w-full  bg-gray-400 outline-dashed outline-1 mt-2"
                placeholder="add the Right option"
                type="text"
                name="explain"
                value={quiz.explain}
                onChange={(e) => handlequiz(e, index)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleAddquiz}
          className="text-md capitalize text-gray-50 bg-green-800 px-3 py-2 rounded-sm mainfont mt-4 font-semibold"
        >
          Add more question
        </button>
        <button
          type="button"
          onClick={handleDeletequiz}
          className="text-md capitalize text-gray-50 bg-red-800 px-3 py-2 rounded-sm mainfont mt-4 font-semibold"
        >
          Delete question
        </button>
      </div>
      <button className="m-auto block py-3 px-4 bg-blue-700 text-white font-semibold rounded-lg" onClick={handleUploadCourse}>
        Upload quiz
      </button>
    </React.Fragment>
  );
}
