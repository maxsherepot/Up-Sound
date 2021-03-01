import { axiosInstance } from './baseUrl';



const errorMessage = "Something went wrong, please try again";

export async function getAlbums() {

  return await axiosInstance.get("albums")
    .then(response => response)
    .catch(err => {
      if (err.response) {
        throw new Error(err.response.data.message)

      } else if (err.request) {
        throw new Error(err.request.message)
      }

      return errorMessage
    });
};

