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
    .then(response =>
      console.log("addToFavorites response:", response))

    .catch(err => {
      console.log("addToFavorites error:", err)
      return err
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

