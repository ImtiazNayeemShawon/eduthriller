import React from "react";
import AdminNavbar from "./AdminNavbar";
import { useState } from "react";
import Api from "./api/apiCaller";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";

export default function AddCourse() {
  const router = useRouter();
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
  const [thumbnail, setThumbnail] = useState("");
  const handleFileUpload = (e) => {
    setThumbnail(e.target.value);
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
  // POST data in backend server
  async function handleUploadCourse(ev) {
    ev.preventDefault();

    try {
      const response = await Api.post("/crud/course", {
        title,
        description,
        price,
        teachers,
        micros,
        questions,
        thumbnail,
      });
      toast.success(response.data.message);
      router.push("/AllCourse");
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
            <input
              type="text"
              name="thumbnail"
              placeholder="past your thumbnail link"
              className="w-full  text-whitebg-gray-200 p-2 rounded-md outline-dashed outline-1"
              onChange={handleFileUpload}
            />
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
              {micros.map((microData, index) => (
                <div
                  key={index}
                  className="mt-1 bg-white shadow-md px-4 outline-dashed outline-1 p-2"
                >
                  <p> Teacher {index + 1}</p>
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
