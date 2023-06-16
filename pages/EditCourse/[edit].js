import React from "react";
import AdminNavbar from "../AdminNavbar";
import { useState, useEffect } from "react";
import Api from "../api/apiCaller";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MyContext } from "../AuthContext";

export default function EditCourse() {
  const router = useRouter();

  const { loggedIn } = useContext(MyContext);
  if (!loggedIn) {
    // useRouter().push("/AdminLogin");
  }

  // ..............................................................................................
  // Course title handling function
  const [title, setTitle] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // ..............................................................................................
  // Course description handling function
  const [description, setDescription] = useState("");
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  // ..............................................................................................
  // multiple teacher adding function for course
  const [teachers, setTeachers] = useState([
    {
      name: "",
      institute: "",
      level: "",
    },
  ]);
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedTeachers = [...teachers];
    updatedTeachers[index] = { ...updatedTeachers[index], [name]: value };
    setTeachers(updatedTeachers);
  };
  const handleAddTeacher = () => {
    setTeachers([...teachers, { name: "", institute: "", level: "" }]);
  };
  const handleDeleteTeacher = (index) => {
    const updatedTeachers = [...teachers];
    updatedTeachers.pop(index, 1);
    setTeachers(updatedTeachers);
  };

  // ..............................................................................................

  // course summary quiz,exams number data handling function
  const [micros, setMicro] = useState([
    {
      title: "",
      number: "",
    },
  ]);
  const handleMicroChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMicro = [...micros];
    updatedMicro[index] = { ...updatedMicro[index], [name]: value };
    setMicro(updatedMicro);
  };
  const handleAddMicro = () => {
    setMicro([...micros, { title: "", number: "" }]);
  };
  const handleDeleteMicro = (index) => {
    const updatedMicro = [...micros];
    updatedMicro.pop(index, 1);
    setMicro(updatedMicro);
  };

  // ..............................................................................................
  // course price data handling function
  const [price, setPrice] = useState("");
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  // ..............................................................................................
  // QuestionItems handling function
  const [questions, setQuestions] = useState([
    {
      title: "",
      description: "",
    },
  ]);
  const handleque = (e, index) => {
    const { name, value } = e.target;
    const updatedQue = [...questions];
    updatedQue[index] = { ...updatedQue[index], [name]: value };
    setQuestions(updatedQue);
  };
  const handleAddque = () => {
    setQuestions([...questions, { title: "", description: "" }]);
  };
  const handleDeleteque = (index) => {
    const updatedQue = [...questions];
    updatedQue.pop(index, 1);
    setQuestions(updatedQue);
  };
  // ..............................................................................................
  //   loading animation page
  const [Loading, setLoading] = useState(true);
  const LazyLoading = (
    <div>
      <div
        role="status"
        className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center mt-40"
      >
        <div className="w-full">
          <div className="h-2.5 bg-gray-300 rounded-full  w-40 mb-4" />
          <div className="h-2 bg-gray-300 rounded-full  max-w-[480px] mb-2.5" />
          <div className="h-2 bg-gray-300 rounded-full  mb-2.5 max-w-[780px]" />
          <div className="h-2 bg-gray-300 rounded-full  max-w-[440px] mb-2.5" />
          <div className="h-2 bg-gray-300 rounded-full  max-w-[460px] mb-2.5" />
          <div className="h-2 bg-gray-300 rounded-full  max-w-[360px]" />
        </div>
        <div
          role="status"
          className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-center h-48 mb-4 bg-gray-400 rounded ">
            <svg
              className="w-12 h-12 text-gray-200 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300" />
          <div className="flex items-center mt-4 space-x-3">
            <svg
              className="text-gray-200 w-14 h-14 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2" />
              <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400" />
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>

        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
        <div className="flex items-center w-full space-x-2">
          <div className="h-2.5 bg-gray-400 rounded-full  w-32" />
          <div className="h-2.5 bg-gray-300 rounded-full  w-24" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-full" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-400 rounded-full  w-full" />
          <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-24" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[400px]">
          <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-80" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-full" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-full" />
          <div className="h-2.5 bg-gray-300 rounded-full  w-24" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[440px]">
          <div className="h-2.5 bg-gray-300 rounded-full  w-32" />
          <div className="h-2.5 bg-gray-300 rounded-full  w-24" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-full" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[360px]">
          <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
          <div className="h-2.5 bg-gray-400 rounded-full  w-80" />
          <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  // ..............................................................................................
  // GET data from backend server
  const { edit } = router.query;

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await Api.get(`/crud/course/${edit}`);
        setLoading(false);
        const Data = response.data.courseData;
        setTitle(Data.title);
        setDescription(Data.description);
        setPrice(Data.price);
        setTeachers(Data.teachers);
        setQuestions(Data.about);
        setMicro(Data.micros);
        setPrivateGroup(Data.groupLink)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchDataById();
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [edit]);
  const [privateGroup, setPrivateGroup] = useState("");
  const handlePrivateGroup = (e) => {
    setPrivateGroup(e.target.value);
  };

  const updateCourse = async () => {
    try {
      await Api.put(`/crud/course/${edit}`, {
        title,
        description,
        price,
        teachers,
        micros,
        questions,
        privateGroup,
      });
      setTimeout(() => {
        router.push("/adminAllCourse");
      }, 2000);
      toast.success(" Updated succesful ");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const quizHandler = () => {
    router.push(`/addquiz/${edit}`);
  };

  return (
    <React.Fragment>
      <Toaster />
      {Loading ? (
        <div className="h-screen">{LazyLoading}</div>
      ) : (
        <div>
          <AdminNavbar />
          <Toaster />
          <h1 className="text-2xl font-bold mt-20 text-center capitalize mainfont text-gray-800">
            Update course{" "}
          </h1>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 mt-12">
              {/* course title  */}
              <button
                onClick={quizHandler}
                className="text-xl bg-green-500 py-3 px-5 rounded-md text-white font-semibold "
              >
                Add new quiz
              </button>
              <div>
                <input
                onChange={handlePrivateGroup}
                value={privateGroup}
                  className="text-xl mt-5 bangfont w-fit bg-gray-100 outline-dashed outline-1 py-3 px-2 rounded-md"
                  placeholder="edit private group link here "
                />
              </div>
              <div className="mt-10">
                <input
                  value={title}
                  onChange={handleTitle}
                  type="text"
                  placeholder="exp:মেডিকেল এডমিশন কোর্স - ২০২৩"
                  className="text-2xl  bangfont w-full bg-gray-100 outline-dashed outline-1 py-3 px-2"
                />
                <br />

                {/* course description  */}
                <div>
                  <textarea
                    value={description}
                    onChange={handleDescription}
                    id="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-dashed outline-1 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10"
                    placeholder="Course description here..."
                  />
                </div>
              </div>

              {/* teachers section */}
              <div className="">
                <h2 className="text-left text-xl mainfont mt-3 ">
                  Add Teachers
                </h2>
                <div className="grid grid-cols-2 gap-5">
                  {teachers.map((teacher, index) => (
                    <div
                      key={index}
                      className="mt-1 bg-white shadow-md px-4 outline-dashed outline-1 p-2"
                    >
                      <p> Teacher {index + 1}</p>
                      <label className="text-sm mainfont ">
                        Name:
                        <input
                          className="p-2 w-full outline-0 bg-gray-100"
                          type="text"
                          name="name"
                          placeholder=" exp:Nishat khan"
                          value={teacher.name}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </label>
                      <br />
                      <label className="text-sm mainfont ">
                        Institute:
                        <input
                          className="p-2 w-full outline-0 bg-gray-100"
                          placeholder=" exp:BUET, BRAC"
                          type="text"
                          name="institute"
                          value={teacher.institute}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </label>
                      <br />
                      <label className="text-sm mainfont ">
                        Level:
                        <input
                          className="p-2 w-full outline-0 bg-gray-100"
                          placeholder=" exp: CSE, MEDICAL, NDC,DU"
                          type="text"
                          name="level"
                          value={teacher.level}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </label>
                      <br />
                    </div>
                  ))}
                </div>
                <div className="flex gap-24">
                  <button
                    type="button"
                    onClick={handleAddTeacher}
                    className="text-md capitalize text-gray-50 bg-green-800 px-3 py-2 rounded-sm mainfont mt-4 font-semibold"
                  >
                    Add more Teacher
                  </button>
                  <button
                    type="button"
                    onClick={handleDeleteTeacher}
                    className="text-md capitalize text-gray-50 bg-red-800 px-3 py-2 rounded-sm mainfont mt-4 font-semibold"
                  >
                    Delete teacher
                  </button>
                </div>
              </div>

              {/* কোর্স সম্পর্কে বিস্তারিত */}
              <div className="mt-10">
                <h1 className="text-sl bangfont font-bold">
                  কোর্স সম্পর্কে বিস্তারিত
                </h1>
                {questions.map((que, index) => (
                  <div key={index}>
                    <input
                      className="p-2 w-full  bg-gray-100 outline-dashed outline-1 mt-4"
                      placeholder=" exp: কোর্সটিতে শিক্ষার্থীরা পাবে:"
                      type="text"
                      name="title"
                      value={que.title}
                      onChange={(e) => handleque(e, index)}
                    />
                    <textarea
                      value={que.description}
                      onChange={(e) => handleque(e, index)}
                      id="message"
                      name="description"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-dashed outline-1 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2"
                      placeholder="কোর্সটি হবে আমাদের Specially designed Priority Based Learning এর মাধ্যম। অর্থ্যাৎ যে অধ্যায় গুলো শর্ট সিলেবাসে ছিল এবং জরুরি বেশি, সেগুলো আগে পড়ানো হবে এবং বেশি সময় নিয়ে পড়ানো হবে। যা তোমাদের সর্বোচ্চ প্রস্তুতি নিশ্চিত করবে। etc etc........."
                    />
                  </div>
                ))}

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleAddque}
                    className="text-md capitalize text-gray-50 bg-green-800 px-3 py-2 rounded-sm mainfont mt-4 font-semibold"
                  >
                    Add more question
                  </button>
                  <button
                    type="button"
                    onClick={handleDeleteque}
                    className="text-md capitalize text-gray-50 bg-red-800 px-3 py-2 rounded-sm mainfont mt-4 font-semibold"
                  >
                    Delete question
                  </button>
                </div>
              </div>
            </div>

            {/* image and price side */}
            <div className="">
              {/* thumbnail uploader */}
              <div className="flex items-center justify-center w-full"></div>
              {/* price input  */}
              <p className="text-left mt-2 mainfont font-semibold ">
                Course price
              </p>
              <input
                className="bg-gray-200 p-2 rounded-md outline-dashed outline-1"
                placeholder="exp: 3000 BDT "
                value={price}
                onChange={handlePrice}
              />

              {/* micro Information about course  */}
              <div className="">
                <h2 className="text-left text-xl mainfont mt-3">
                  Micro Information
                </h2>

                <div className="grid grid-cols-2 gap-5">
                  {micros.map((microData, index) => (
                    <div
                      key={index}
                      className="mt-1 bg-white shadow-md px-4 outline-dashed outline-1 p-2"
                    >
                      <p> Information {index + 1}</p>
                      <label className="text-sm mainfont ">
                        <input
                          className="p-2 w-full outline-0 bg-gray-100"
                          type="text"
                          name="title"
                          placeholder="title"
                          value={microData.title}
                          onChange={(e) => handleMicroChange(e, index)}
                        />
                      </label>
                      <br />
                      <label className="text-sm mainfont ">
                        <input
                          className="p-2 w-full outline-0 bg-gray-100"
                          placeholder="number"
                          type="text"
                          name="number"
                          value={microData.number}
                          onChange={(e) => handleMicroChange(e, index)}
                        />
                      </label>
                    </div>
                  ))}
                </div>

                <div className="flex gap-24">
                  <button
                    type="button"
                    onClick={handleAddMicro}
                    className="text-md capitalize text-gray-50 bg-green-800 px-3 py-2 rounded-sm mainfont mt-4 font-semibold"
                  >
                    Add more Information
                  </button>
                  <button
                    type="button"
                    onClick={handleDeleteMicro}
                    className="text-md capitalize text-gray-50 bg-red-800 px-3 py-2 rounded-sm mainfont mt-4 font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-sl bangfont font-bold">
              কোর্স সম্পর্কে বিস্তারিত
            </h1>
            {questions.map((que, index) => (
              <div key={index}>
                <input
                  className="p-2 w-full  bg-gray-100 outline-dashed outline-1 mt-4"
                  placeholder=" exp: কোর্সটিতে শিক্ষার্থীরা পাবে:"
                  type="text"
                  name="title"
                  value={que.title}
                  onChange={(e) => handleque(e, index)}
                />
                <textarea
                  value={que.description}
                  onChange={(e) => handleque(e, index)}
                  id="message"
                  name="description"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-dashed outline-1 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2"
                  placeholder="কোর্সটি হবে আমাদের Specially designed Priority Based Learning এর মাধ্যম। অর্থ্যাৎ যে অধ্যায় গুলো শর্ট সিলেবাসে ছিল এবং জরুরি বেশি, সেগুলো আগে পড়ানো হবে এবং বেশি সময় নিয়ে পড়ানো হবে। যা তোমাদের সর্বোচ্চ প্রস্তুতি নিশ্চিত করবে। etc etc........."
                />
              </div>
            ))}

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleAddque}
                className="text-md capitalize text-gray-50 bg-green-800 px-3 py-2 rounded-sm mainfont mt-4 font-semibold"
              >
                Add more question
              </button>
              <button
                type="button"
                onClick={handleDeleteque}
                className="text-md capitalize text-gray-50 bg-red-800 px-3 py-2 rounded-sm mainfont mt-4 font-semibold"
              >
                Delete question
              </button>
            </div>
          </div>
          {/* course upload on server  */}
          <button
            onClick={updateCourse}
            className="text-lg text-gray-200 mainbg p-3 rounded-lg  m-auto block capitalize mt-10"
          >
            Update course
          </button>
        </div>
      )}
    </React.Fragment>
  );
}
