import AdminNavbar from "./AdminNavbar";
import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const AdminPage = () => {
  const [loggedIn, setLoggedIn] = useState(null);
const router = useRouter();

useEffect(() => {
  checkLoggedIn();
}, []);

const checkLoggedIn = async () => {
  try {
    const response = await Api.get("admin/checkAdmin");
    const { loggedIn } = response.data;
    setLoggedIn(loggedIn);

    if (!loggedIn) {
      setTimeout(() => {
        router.push("/AdminLogin");
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <React.Fragment>
      <div className="h-screen">
        <AdminNavbar />
      </div>
    </React.Fragment>
  );
};

export default AdminPage;
