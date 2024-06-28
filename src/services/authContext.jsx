import axios from "axios";

import React, { useState, useContext, createContext, useEffect } from "react";

const authContext = createContext({});
const API_URL = "http://localhost:6001";

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});  

  const getUser = async () => {
    setLoading(true);
    try{
      const response = await axios.get(`${API_URL}/user`, {
        withCredentials: true,
      });

      if(response.data){
        setUserData(response.data);
        setAuthenticated(true)
      }
    }
    catch(error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  };

  const logout = async () => {
    await axios.get(`${API_URL}/logout`, { withCredentials: true });
    setUserData({});
    setAuthenticated(false);
  };


  useEffect(() => {
    getUser()
  }, [])

  return (
    <authContext.Provider value={{ authenticated, setAuthenticated, userData, setUserData, loading, setLoading, logout }}>
      {children}
    </authContext.Provider>
  );
}

export default function useAuth() {
  return useContext(authContext);
}
