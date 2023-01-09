import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

function UserProvider(props) {
  const { children } = props;
  const url = "http://localhost:4000/api/users";
  const [users, setusers] = useState([]); //all the users array
  const [errorMsg, setErrorMsg] = useState(null);

  //sign up add new user
  const addNewUser = async (userObj) => {
    try {
      const response = await axios.post(url, userObj, {});
      console.log(response.headers["x-auth-token"]);
      console.log(response);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      setusers([...users, ...response.date]);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  //auth for login
  const authUser = async (userObj) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth",
        userObj,
        {}
      );
      console.log(response);
      localStorage.setItem("token", response.data);
    } catch (error) {
      setErrorMsg(error);
    }
  };

  return (
    <div>
      <UserContext.Provider
        value={{
          addNewUser,
          users,
          authUser,
        }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default UserProvider;
