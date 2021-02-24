import { axiosInstance } from './baseUrl'


export async function register(data) {
  const errorMessage = "Something went wrong, please try again";

  return await axiosInstance.post(`auth/register`, data)

    .then(response => {
      return response.data.message
    })
    .catch(err => {
      if (err.response) {
        throw new Error(err.response.data.message)

      } else if (err.request) {
        return err.request
      }

      return errorMessage
    });
};



