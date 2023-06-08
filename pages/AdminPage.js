import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Api from "./api/apiCaller";
// import { toast, Toaster } from "react-hot-toast";
// import { useState } from "react";
import AdminNavbar from "./AdminNavbar";

const AdminPage = () => {
  const router = useRouter();
  // const [IsloggedIn, setIsLoggedin] = useState(true);

  // useEffect(() => {
  //   checkLoggedIn();
  // }, []);

  // const checkLoggedIn = async () => {
  //   try {
  //     const response = await Api.get("/admin/checkLoggedIn");
  //     const { loggedIn } = response.data;
  //     setIsLoggedin(loggedIn);
  //     if (IsloggedIn) {
  //       router.push("/adminPage");
  //     }
  //   } catch (error) {
  //     toast.error(error.message);
  //     // router.push("/AdminLogin");
  //   }
  // };

  return (
    <React.Fragment>
      <div className="h-screen">
        <AdminNavbar />
        {/* <Toaster /> */}
      </div>
    </React.Fragment>
  );
};

export default AdminPage;
