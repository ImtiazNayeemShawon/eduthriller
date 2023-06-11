import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Api from "./api/apiCaller";
import { toast, Toaster } from "react-hot-toast";
import AdminNavbar from "./AdminNavbar";

const AdminPage = () => {
  const router = useRouter();
  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const response = await Api.get("admin/checkAdmin");
      const { loggedIn } = response.data;
      if (!loggedIn) {
        setTimeout(() => {
          router.push("/AdminLogin");
        }, 2000);
      }
    } catch (error) {
      toast.error("Failed to check logged-in status. Please try again.");
      console.log(error);
      setTimeout(() => {
        router.push("/AdminLogin");
      }, 1000);
    }
  };

  return (
    <React.Fragment>
      <div className="h-screen">
        <AdminNavbar />
        <Toaster />
      </div>
    </React.Fragment>
  );
};

export default AdminPage;
