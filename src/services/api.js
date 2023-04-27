import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:7575",
  baseURL: "https://api.mtv.pottmayer.dev",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("@mtv:token");

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const networkError = error.response === undefined;
    const unauthorizedError = error.response?.status === 401;

    if (unauthorizedError) {
      localStorage.removeItem("@mtv:token");
      localStorage.removeItem("@mtv:user");

      window.location.replace("/");
    }

    return Promise.reject(error);
  }
);

export default api;
