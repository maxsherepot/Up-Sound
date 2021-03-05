import { axiosInstance } from './baseUrl';



const errorMessage = "Something went wrong, please try again";



export async function getFavoriteAlbums(email) {

  return await axiosInstance.get(`albums/favorites/${email}`)
    .then(response => response.data)
    .catch(err => {
      console.log("getFavoriteAlbums error:", err)
      return err
    });
};


export async function addToFavorites(data) {
  const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null
  const token = userData.token;
  //console.log(data)
  const header = {
    headers: {
      'Authorization': `${token}`
    },
  }

  return await axiosInstance.post("albums/favorites", data, header)
    .then(response =>
      console.log("addToFavorites response:", response))

    .catch(err => {
      console.log("getFavoriteAlbums error:", err)
      return errorMessage
    });
};


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
      return err
    });
};

export async function getFavoriteAlbum(id) {

  return await axiosInstance.get(`albums/favorites/favoriteAlbum/${id}`)
    .then(response => response)

    .catch(err => {
      console.log(err)
      return err
    });
};

