// import { useRouter } from "next/router";
import AdminNavbar from "./AdminNavbar";
import React from "react";

const AdminPage = () => {
  // const router = useRouter();

  return (
    <React.Fragment>
      <div className="h-screen">
        <AdminNavbar />
      </div>
    </React.Fragment>
  );
};

export default AdminPage;
