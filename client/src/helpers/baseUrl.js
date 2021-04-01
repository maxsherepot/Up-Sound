import axios from 'axios';



const URL = "/api/";
const axiosInstance = axios.create({
  baseURL: URL
});



export { axiosInstance };
