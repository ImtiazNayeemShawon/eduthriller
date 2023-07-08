import AdminNavbar from "./AdminNavbar";
import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import AddPaymentDetails from "./addPaymentDetails";

const AdminPage = () => {
  const router = useRouter();
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

  return (
    <React.Fragment>
      <div className="">
        <AdminNavbar />
        <div className="mt-20 ">
          <AddPaymentDetails />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminPage;
