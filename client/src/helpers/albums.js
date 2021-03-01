import { axiosInstance } from './baseUrl';



const errorMessage = "Something went wrong, please try again";

export async function getAlbums() {

  return await axiosInstance.get("albums")
    .then(response => response)
    .catch(err => {
      // console.log(err)
      return errorMessage
    });
};


export async function getAlbum(id) {

  return await axiosInstance.get(`albums/${id}`)
    .then(response => response)

    .catch(err => {
      console.log(err)
      return errorMessage
    });
};

