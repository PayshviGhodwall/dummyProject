import axios from "axios";

const errorCallBack = (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    //toast.error("an unexpected error occured");
  }
  return Promise.reject(error);
};
axios.defaults.headers.common["x-auth-token-user"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjU2ZmRiYjIzOGEzZjUyYTYzZGRlYTUiLCJpYXQiOjE3MTY5NzcxMzUsImV4cCI6MTcyNDc1MzEzNX0.lutetCwNmi_wiI6_kWb4zFYH__nvCb2o8Nh5xA1CPLw";
axios.interceptors.request.use(async (req) => {
  req.headers["x-auth-token-user"] =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjU2ZmRiYjIzOGEzZjUyYTYzZGRlYTUiLCJpYXQiOjE3MTY5NzcxMzUsImV4cCI6MTcyNDc1MzEzNX0.lutetCwNmi_wiI6_kWb4zFYH__nvCb2o8Nh5xA1CPLw";
  return req;
});

axios.interceptors.response.use(null, errorCallBack);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
