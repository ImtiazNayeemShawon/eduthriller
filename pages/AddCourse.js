import React from "react";
import AdminNavbar from "./AdminNavbar";
import { useState } from "react";
import Api from "./api/apiCaller";
import { Toaster, toast } from "react-hot-toast";

export default function AddCourse() {
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

  // ccourse thumbnail uploader
  const [file, setFile] = useState(null);
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  // ..............................................................................................
  // course summary quiz,exams number data handling function
  const [micro, setMicro] = useState({
    subject: "",
    exams: "",
    liveclass: "",
    modeltest: "",
    lecture: "",
  });
  const handleMicroChange = (e) => {
    const { name, value } = e.target;
    setMicro((prevMicro) => ({
      ...prevMicro,
      [name]: value,
    }));
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
  // POST data in backend server
  async function handleUploadCourse(ev) {
    ev.preventDefault();

    try {
      const response = await Api.post("/crud/course",{
        title,
        description,
        price,
        teachers,
        micro,
        questions,
        file,
      });
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <AdminNavbar />
      <Toaster />
      <h1 className="text-2xl font-bold mt-20 text-center capitalize mainfont text-gray-800">
        Add course{" "}
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 mt-12">
          {/* course title  */}
          <div>
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
            <h2 className="text-left text-xl mainfont mt-3 ">Add Teachers</h2>
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
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-300 dark:hover:bg-bray-800 hover:bg-gray-100 dark:border-gray-600"
            >
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Uploaded file"
                  className="w-full h-auto"
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG or JPG
                  </p>
                </div>
              )}
              <input
                id="dropzone-file"
                type="file"
                name="thumbnail"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
          {/* price input  */}
          <p className="text-left mt-2 mainfont font-semibold ">Course price</p>
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
              <div className="mt-1 bg-white shadow-md px-4 outline-dashed outline-1 p-2">
                <p>Subject:</p>
                <label className="text-sm mainfont">
                  <input
                    className="p-2 w-full outline-0 bg-gray-100"
                    type="text"
                    name="subject"
                    placeholder="exp: Math, Science"
                    value={micro.subject}
                    onChange={handleMicroChange}
                  />
                </label>
              </div>
              <div className="mt-1 bg-white shadow-md px-4 outline-dashed outline-1 p-2">
                <p>Exams:</p>
                <label className="text-sm mainfont">
                  <input
                    className="p-2 w-full outline-0 bg-gray-100"
                    type="text"
                    name="exams"
                    placeholder="exp: Midterm, Final"
                    value={micro.exams}
                    onChange={handleMicroChange}
                  />
                </label>
              </div>
              <div className="mt-1 bg-white shadow-md px-4 outline-dashed outline-1 p-2">
                <p>Live Class:</p>
                <label className="text-sm mainfont">
                  <input
                    className="p-2 w-full outline-0 bg-gray-100"
                    type="text"
                    name="liveclass"
                    placeholder="exp: Online, Offline"
                    value={micro.liveclass}
                    onChange={handleMicroChange}
                  />
                </label>
              </div>
              <div className="mt-1 bg-white shadow-md px-4 outline-dashed outline-1 p-2">
                <p>Model Test:</p>
                <label className="text-sm mainfont">
                  <input
                    className="p-2 w-full outline-0 bg-gray-100"
                    type="text"
                    name="modeltest"
                    placeholder="exp: Mock Test, Practice Test"
                    value={micro.modeltest}
                    onChange={handleMicroChange}
                  />
                </label>
              </div>
              <div className="mt-1 bg-white shadow-md px-4 outline-dashed outline-1 p-2">
                <p>Lecture sheet:</p>
                <label className="text-sm mainfont">
                  <input
                    className="p-2 w-full outline-0 bg-gray-100"
                    type="text"
                    name="lecture"
                    placeholder="exp: Mock Test, Practice Test"
                    value={micro.lecture}
                    onChange={handleMicroChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* course upload on server  */}
      <button
        onClick={handleUploadCourse}
        className="text-lg text-gray-200 mainbg p-3 rounded-lg  m-auto block capitalize mt-10"
      >
        Upload course now
      </button>
    </React.Fragment>
  );
}
