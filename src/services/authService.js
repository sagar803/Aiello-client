// authService.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_LIVE;

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

// const logout = async () => {
//   await axios.get(`${API_URL}/logout`, { withCredentials: true });
// };

export const getUser = async () => {
  const response = await axios.get(`${API_URL}/user`, {
    withCredentials: true,
  });

  return response.data;
};

export const googleLoginUrl = `${API_URL}/auth/google`;
