import React, { useContext,useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    // this state for user handling
    const [user, setUser] = useState(null);

    const logedinUser = (userData) => {
      setUser(userData);
    };

  return (
    <AppContext.Provider value={{user, logedinUser}}>{children}</AppContext.Provider>
  );
};
const UseGlobalContext = () => {
  return useContext(AppContext);
};

export default { AppContext, AppProvider, UseGlobalContext };
