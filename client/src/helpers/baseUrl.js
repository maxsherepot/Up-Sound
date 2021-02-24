import axios from 'axios';


// const URL = 'http://79.164.176.102:12345/api/'
const URL = "/api/";


const axiosInstance = axios.create({
  baseURL: URL
});


// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem('drSoftToken');
//   config.headers.accessToken = token;
//   config.headers["Content-Type"] = 'application/json; charset=utf-8';
//   return config;
// });


export { axiosInstance };
