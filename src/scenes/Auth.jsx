import React, { useState, useEffect } from "react";
import {
  login,
  getUser,
  googleLoginUrl,
} from "../services/authService";

const Auth = () => {
  const [user, setUser] = useState(null);
  console.log(user)
  
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getUser();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  const handleLogin = async () => {
    const user = await login("user", "password");
    setUser(user);
  };


  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}</h2>
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Login</button>
          <a href={googleLoginUrl}>
            <button>Sign in with Google</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Auth;
