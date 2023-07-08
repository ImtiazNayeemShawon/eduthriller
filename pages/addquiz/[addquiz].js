import React from "react";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import AdminNavbar from "../AdminNavbar";
import Api from "../api/apiCaller";
import { toast, Toaster } from "react-hot-toast";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { useRef } from "react";
import dynamic from "next/dynamic";

export default function quiz() {
  const router = useRouter();
  const { addquiz } = router.query;
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
  const [module, setModule] = useState("");

  const [date, setDate] = useState("");

  useEffect(() => {
    setCourseId(addquiz);
  }, [addquiz]);

  const handlequiz = (e, index) => {
    const { name, value } = e.target;
    const updatedQuiz = [...quiz];
    if (name === "options") {
      const optionIndex = parseInt(e.target.dataset.optionindex);
      updatedQuiz[index].options[optionIndex] = value;
    } else {
      updatedQuiz[index][name] = value;
    }
    setQuiz(updatedQuiz);
  };

  const handleAddquiz = () => {
    setQuiz([
      ...quiz,
      {
        question: "",
        options: ["", "", "", ""],
        answer: "",
        explain: "",
      },
    ]);
  };

  const handleDeletequiz = (index) => {
    const updatedQuiz = [...quiz];
    updatedQuiz.splice(index, 1);
    setQuiz(updatedQuiz);
  };

  const timeHandler = (e) => {
    setTime(e.target.value);
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const DateHandler = (e) => {
    setDate(e.target.value);
  };
  const moduleHandler = (e) => {
    setModule(e.target.value);
  };

  async function handleUploadCourse(ev) {
    ev.preventDefault();
    try {
      const response = await Api.post("/crud/addquiz", {
        time,
        quiz,
        courseID,
        title,
        date,
        module,
      });
      toast.success(response.data.message);
      router.push("/adminAllCourse");
    } catch (error) {
      toast.error(error.message);
    }
  }

  const [loggedIn, setIsLoggedIn] = useState(null); // Use null as the initial value
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const isLoggedIn = decodedToken.admin;
      setIsLoggedIn(isLoggedIn);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  useEffect(() => {
    if (loggedIn === null) {
      return;
    }
    if (!loggedIn) {
      router.push("AdminLogin");
    }
  }, [loggedIn, router]);
  const JoditEditor = dynamic(() => import("jodit-react"), {
    ssr: false,
  });
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readonly: false, // Set to true to make the editor read-only
    toolbar: true, // Show the toolbar
    spellcheck: false, // Enable spellchecking
    showCharsCounter:false, // Show a character counter
    showWordsCounter:false, // Show a word counter
    showXPathInStatusbar: false, // Hide the XPath information in the status bar
    askBeforePasteHTML: false, // Disable the confirmation dialog when pasting HTML
    width: '500px', // Set the height of the editor

    defaultMode: '1', // Set the default mode (0 - WYSIWYG, 1 - SOURCE)
    buttons: 'bold,italic,underline,|,align,ul,ol,|,image,video,table', // Specify the buttons to display in the toolbar
    uploader: {
      insertImageAsBase64URI: true // Insert uploaded images as base64 URIs instead of URLs
    },
  };

  return (
    <React.Fragment>
      <Toaster />
      <AdminNavbar />
      <div className="pb-20">
        <div className="mt-20">
          <h1 className="text-4xl mainfont capitalize font-semibold text-center">
            Add quiz
          </h1>
          <p>Module name </p>
          <input
            type="text"
            className="bg-gray-200 p-2 rounded-md outline-dotted outline-1 w-full"
            value={module}
            onChange={moduleHandler}
          />
          <p>Add exam title </p>
          <input
            type="text"
            className="bg-gray-200 p-2 rounded-md outline-dotted outline-1 w-full"
            value={title}
            onChange={titleHandler}
          />
        </div>
        <div className="flex justify-between">
          <div >
            <p>Add time as minute </p>
            <input
              type="number"
              className="bg-gray-200 p-2 rounded-md outline-dotted outline-1"
              value={time}
              onChange={timeHandler}
            />
            <p>Add exam date </p>
            <input
              type="text"
              className="bg-gray-200 p-2 rounded-md outline-dotted outline-1"
              value={date}
              onChange={DateHandler}
            />
          </div>
          <div>
            <p className="mt-2">explaination:</p>
            <div>
              <JoditEditor
                value={content}
                ref={editor}
                config={config}
                onBlur={(content) => setContent(content)}
              />
            </div>
            <p>Output</p>
            <textarea
              className="p-2 w-full bg-gray-300 outline-dashed outline-1 mt-2"
              value={content}
            />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-5">
          {quiz.map((quizItem, index) => (
            <div key={index} className="mt-10">
              <h1 className="text-xl">Quiz number: {index + 1}</h1>
              <input
                className="p-2 w-full bg-gray-300 outline-dotted outline-1 mt-4 rounded-xl"
                placeholder="Enter the question"
                type="text"
                name="question"
                value={quizItem.question}
                onChange={(e) => handlequiz(e, index)}
              />
              <p className="mt-2">Options:</p>
              {quizItem.options.map((option, optionIndex) => (
                <input
                  key={optionIndex}
                  className="p-2 w-full bg-gray-100 outline-dashed outline-1 mt-2"
                  placeholder={`Option number ${optionIndex + 1}`}
                  type="text"
                  name="options"
                  data-optionindex={optionIndex}
                  value={option}
                  onChange={(e) => handlequiz(e, index)}
                />
              ))}

              <p className="mt-2">Select Right option</p>
              <select
                className="p-2 w-full bg-gray-300 outline-dashed outline-1 mt-2"
                name="answer"
                value={quizItem.answer}
                onChange={(e) => handlequiz(e, index)}
              >
                <option value="">Select right answer</option>
                {quizItem.options.map((option, optionIndex) => (
                  <option
                    key={optionIndex}
                    value={option}
                    className="text-gray-900"
                  >
                    {option}
                  </option>
                ))}
              </select>

              <textarea
                className="p-2 w-full bg-gray-300 outline-dashed outline-1 mt-2"
                placeholder="past the explaination here"
                type="text"
                name="explain"
                value={quizItem.explain}
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
      <button
        className="m-auto block py-3 px-4 bg-blue-700 text-white font-semibold rounded-lg"
        onClick={handleUploadCourse}
      >
        Upload quiz
      </button>
    </React.Fragment>
  );
}
