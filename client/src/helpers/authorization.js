import { axiosInstance } from './baseUrl';



export async function register(data) {

  return await axiosInstance.post(`auth/register`, data)
    .then(response => response.data.message)
    .catch(err => {
      if (err.response) {
        throw new Error(err.response.data.message)
      } else if (err.request) {
        throw new Error(err.request.message)
      }
      return err.message;
    });
};


export async function login(data) {

  return await axiosInstance.post(`auth/login`, data)
    .then(response => response.data)
    .catch(err => {
      if (err.response) {
        throw new Error(err.response.data.message)
      } else if (err.request) {
        throw new Error(err.request.message)
      }
      return err.message;
    });
};



