import { axiosInstance } from './baseUrl';



export async function getFavoriteAlbums(email) {

  return await axiosInstance.get(`albums/favorites/${email}`)
    .then(response => response.data)
    .catch(err => {
      console.log("getFavoriteAlbums error:", err)
      return err
    });
};


export async function addToFavorites(data) {

  return await axiosInstance.post("albums/favorites", data)
    .then(response => response.data.message)
    //console.log("response.data.message:", response.data.message))
    //  return response.data.message

    .catch(err => {
      return err.message
      // console.log("err.message", err.message)
    });
};


export async function deleteFromFavorites(id) {

  return await axiosInstance.delete(`albums/favorites/${id}`)
    .then(response => response.data.message)
    //console.log("response.data.message:", response.data.message))

    .catch(err => {
      return err.message
      //console.log("err.message", err.message)
    });
};


export async function getAlbums() {

  return await axiosInstance.get("albums")
    .then(response => response)
    .catch(err => {
      console.log(err)
      return err
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

