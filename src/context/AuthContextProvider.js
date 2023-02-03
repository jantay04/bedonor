import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API =
  "http://donationapi-env.eba-ucpyqvmr.eu-central-1.elasticbeanstalk.com/auth";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  async function register(formData, navigate) {
    try {
      let res = await axios.post(`${API}/register`, formData);
      console.log(res);
      navigate("/auth");
    } catch (err) {
      console.log(err);
    }
  }

  async function login(formData, navigate, username) {
    try {
      let res = await axios.post(`${API}/auth`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("username", JSON.stringify(username));
      navigate("/");
      console.log(`${username}`);
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  return (
    <authContext.Provider
      value={{
        user,

        register,
        login,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
