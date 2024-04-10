import axios from 'axios';

const api = axios.create({
  baseURL: 'https://elh-server.onrender.com/user', // Replace with your server URL
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;