import { axiosInstance } from './baseUrl'


const errorMessage = "Something went wrong, please try again";


export async function register(data) {

  return await axiosInstance.post(`auth/register`, data)
    .then(response => {
      return response.data.message
    })
    .catch(err => {
      if (err.response) {
        throw new Error(err.response.data.message)

      } else if (err.request) {
        throw new Error(err.request.message)
      }

      return errorMessage
    });
};


export async function login(data) {

  return await axiosInstance.post(`auth/login`, data)
    .then(response => {
      return response.data
    })
    .catch(err => {
      if (err.response) {
        throw new Error(err.response.data.message)

      } else if (err.request) {
        throw new Error(err.request.message)
      }

      return errorMessage
    });
};



