// MyContext.js
import React, { createContext, useEffect, useState } from "react";
import Api from "../pages/api/apiCaller"; // Assuming you have an API module for making requests
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [UserloggedIn, setUserLoggedIn] = useState(null);
  const [UserName, setUserName] = useState("");

  useEffect(() => {
    checkLoggedIn();
    checkUserLoggedIn();
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
  // check user login
  const checkUserLoggedIn = async () => {
    try {
      const response = await Api.get("user/checkLoggedIn");
      const { loggedIn } = response.data;
      const user = response.data.user;
      setUserLoggedIn(loggedIn);
      setUserName(user);
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = {
    UserloggedIn,
  };
  const userdata = {
    UserName,
  };

  return (
    <MyContext.Provider value={{ ...contextValue, ...userLogin, ...userdata }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
