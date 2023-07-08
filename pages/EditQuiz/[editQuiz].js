import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AdminNavbar from "../AdminNavbar";
import Api from "../api/apiCaller";
import { toast, Toaster } from "react-hot-toast";

export default function EditQuiz() {
  const router = useRouter();
  const { editQuiz } = router.query;
  const [courseID, setCourseId] = useState("");
  const [quiz, setQuiz] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      answer: "",
      explain: "",
    },
  ]);
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await Api.get(`/crud/Editquizes/${editQuiz}`);
        const quizData = response.data.result;
        setCourseId(quizData.course);
        setQuiz(quizData.quiz);
        setTime(quizData.time);
        setTitle(quizData.title);
        setDate(quizData.date);
        setStatus(quizData.status);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchQuizData();
  }, [editQuiz]);

  const handleQuizUpdate = (updatedQuiz) => {
    setQuiz(updatedQuiz);
  };

  const handleAddQuiz = () => {
    setQuiz((prevQuiz) => [
      ...prevQuiz,
      {
        question: "",
        options: ["", "", "", ""],
        answer: "",
        explain: "",
      },
    ]);
  };

  const handleDeleteQuiz = (index) => {
    setQuiz((prevQuiz) => {
      const updatedQuiz = [...prevQuiz];
      updatedQuiz.splice(index, 1);
      return updatedQuiz;
    });
  };

  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target;
    setQuiz((prevQuiz) => {
      const updatedQuiz = [...prevQuiz];
      updatedQuiz[index][name] = value;
      return updatedQuiz;
    });
  };

  const handleOptionChange = (e, index, optionIndex) => {
    const { value } = e.target;
    setQuiz((prevQuiz) => {
      const updatedQuiz = [...prevQuiz];
      updatedQuiz[index].options[optionIndex] = value;
      return updatedQuiz;
    });
  };

  const handleAnswerChange = (e, index) => {
    const { value } = e.target;
    setQuiz((prevQuiz) => {
      const updatedQuiz = [...prevQuiz];
      updatedQuiz[index].answer = value;
      return updatedQuiz;
    });
  };

  const handleExplanationChange = (e, index) => {
    const { value } = e.target;
    setQuiz((prevQuiz) => {
      const updatedQuiz = [...prevQuiz];
      updatedQuiz[index].explain = value;
      return updatedQuiz;
    });
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const deleteQuiz = (index) => {
    setQuiz((prevQuiz) => {
      const updatedQuiz = [...prevQuiz];
      updatedQuiz.splice(index, 1);
      return updatedQuiz;
    });
  };
  const handleDeleteSpecificQuiz = (index) => {
    deleteQuiz(index);
  };
  const handleUpdateQuiz = async (ev) => {
    ev.preventDefault();
    try {
      const response = await Api.put(`/crud/updatequiz/${editQuiz}`, {
        time,
        quiz,
        courseID,
        title,
        date,
        status
      });
      toast.success(response.data.message);
      router.push("/adminAllCourse");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const DeleteById = async () => {
    try {
      await Api.delete(`/crud/Deletequizes/${editQuiz}`);
      toast.success("Quiz deleted successfully!");
      router.push("/adminAllCourse");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Toaster />
      <AdminNavbar />
      <div className="pb-20">
        <div className="mt-20">
          <h1 className="text-4xl mainfont capitalize font-semibold text-center">
            Edit Quiz
          </h1>
          <button
            onClick={DeleteById}
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            Delete this quiz
          </button>
          <button className="text-white bg-blue-600  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">{status}</button>
          <select
            onChange={handleStatus}
            className="text-white bg-blue-600  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            <option selected className="font-bold">
              {" "}
              Select status{" "}
            </option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <p>Add exam title:</p>
          <input
            type="text"
            className="bg-gray-200 p-2 rounded-md outline-dotted outline-1 w-full"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <p>Add time in minutes:</p>
        <input
          type="number"
          className="bg-gray-200 p-2 rounded-md outline-dotted outline-1"
          value={time}
          onChange={handleTimeChange}
        />
        <p>Add exam date:</p>
        <input
          type="text"
          className="bg-gray-200 p-2 rounded-md outline-dotted outline-1"
          value={date}
          onChange={handleDateChange}
        />

        <div className="mt-5 grid grid-cols-2 gap-5">
          {quiz?.map((quizItem, index) => (
            <div key={index} className="mt-10">
              <h1 className="text-xl">Quiz number: {index + 1}</h1>
              <input
                className="p-2 w-full bg-gray-300 outline-dotted outline-1 mt-4 rounded-xl"
                placeholder="Enter the question"
                type="text"
                name="question"
                value={quizItem.question}
                onChange={(e) => handleQuestionChange(e, index)}
              />
              <p className="mt-2">Options:</p>
              {quizItem.options?.map((option, optionIndex) => (
                <input
                  key={optionIndex}
                  className="p-2 w-full bg-gray-100 outline-dashed outline-1 mt-2"
                  placeholder={`Option number ${optionIndex + 1}`}
                  type="text"
                  name="options"
                  data-optionindex={optionIndex}
                  value={option}
                  onChange={(e) => handleOptionChange(e, index, optionIndex)}
                />
              ))}

              <p className="mt-2">Select Right option</p>
              <select
                className="p-2 w-full bg-gray-300 outline-dashed outline-1 mt-2"
                name="answer"
                value={quizItem.answer}
                onChange={(e) => handleAnswerChange(e, index)}
              >
                <option value="">Select right answer</option>
                {quizItem.options?.map((option, optionIndex) => (
                  <option
                    key={optionIndex}
                    value={option}
                    className="text-gray-900"
                  >
                    {option}
                  </option>
                ))}
              </select>

              <p className="mt-2">Explanation:</p>
              <textarea
                className="p-2 w-full bg-gray-300 outline-dashed outline-1 mt-2"
                placeholder="Add the explanation"
                type="text"
                name="explain"
                value={quizItem.explain}
                onChange={(e) => handleExplanationChange(e, index)}
              />
              <button
                type="button"
                onClick={() => handleDeleteSpecificQuiz(index)}
                className="text-md capitalize text-gray-50 bg-red-800 px-3 py-2 rounded-sm mainfont mt-4 font-semibold"
              >
                Delete question
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleAddQuiz}
          className="text-md capitalize text-gray-50 bg-green-800 px-3 py-2 rounded-sm mainfont mt-4 font-semibold"
        >
          Add more question
        </button>
      </div>
      <button
        className="m-auto block py-3 px-4 bg-blue-700 text-white font-semibold rounded-lg"
        onClick={handleUpdateQuiz}
      >
        Update Quiz
      </button>
    </React.Fragment>
  );
}
