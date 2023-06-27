import AdminNavbar from "./AdminNavbar";
import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AddPaymentDetails from "./addPaymentDetails";

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
      //  router.push("/AdminLogin");
    }
  };

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
