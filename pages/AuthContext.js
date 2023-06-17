// MyContext.js
import React, { createContext, useEffect, useState } from "react";
import Api from "./api/apiCaller"; // Assuming you have an API module for making requests
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const response = await Api.get("admin/checkAdmin");
      const { loggedIn } = response.data;
      setLoggedIn(loggedIn);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    loggedIn,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default { MyContext, MyContextProvider };
