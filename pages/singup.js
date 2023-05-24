import React from "react";

export default function Singup() {
  return (
    <React.Fragment>
      {/* singup form  */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1  max-sm:m-1 m-10 mainfont">
        {/* design side */}
        <div className="p-10 mainfont font-medium max-sm:hidden">
          {/* dot */}
          <div className="mainbg h-10 w-10 rounded-xl  flex ">
            <div className="h-3 bg-white w-3 m-auto rounded-2xl "></div>
          </div>

          <h1 className="text-4xl font-semibold text-left  text-black mt-40 ">
            Singup now to enjoy your study
          </h1>
          <p className="text-left text-thin text-gray-700 leading-7 mt-10">
            Discover Eduthriller, the epitome of academic excellence! Join us
            today and embark on a captivating educational journey that will
            redefine your future!
          </p>

          {/* scroller section */}
          <div className="mainbg h-40 w-100 rounded-lg mt-20"></div>
        </div>

        {/* form side */}
        <div className="ml-20 max-sm:m-4">
         {/* dot */}
         <div className="mainbg h-10 w-10 rounded-xl  flex  md:hidden">
            <div className="h-3 bg-white w-3 m-auto rounded-2xl "></div>
          </div>
          <h1 className="text-left text-black text-4xl font-semibold">
            Get started
          </h1>
          <p className="text-gray-600 text-lg">Create your account now </p>

          <p className="mt-20 text-lg text-gray-600">Full name</p>
          <input className="bg-slate-300 w-full p-3 rounded-md outline-1" />
          <p className="mt-5 text-lg text-gray-600">Email Adress</p>
          <input className="bg-slate-300 w-full p-3 rounded-md outline-1" />
          <p className="mt-5 text-lg text-gray-600">Strong password </p>
          <input type="password" className="bg-slate-300 w-full p-3 rounded-md outline-1" /> <br/>
          <button className="text-lg text-gray-200 mainbg p-3 rounded-lg w-full mt-20 ">Singup</button><br/>
          <p className="mt-5 text-lg">Already have an account?<a href="Login " className="text-blue-800 ml-2">Login Now</a></p>
        </div>
      </div>
    </React.Fragment>
  );
}
