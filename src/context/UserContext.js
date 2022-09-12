import { createContext, useContext, useState } from "react";

const UserContext = createContext();

//Provider component
const UserContextProvider = ({ children }) => {
  const [me, setMe] = useState();
  const login = (e) => {
    e.preventDefault();
    setMe({ username: "claurennt", email: "claudia@wbs.com", isAdmin: true });
  };
  //children are the components wrapped by the provider
  return (
    <UserContext.Provider value={{ me, login }}>
      {children}
    </UserContext.Provider>
  );
};

//custom context hook
const useUserContext = () => useContext(UserContext);
export { UserContextProvider, useUserContext };
