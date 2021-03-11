import { axiosInstance } from './baseUrl';



export async function getFavoriteAlbums(email) {

  return await axiosInstance.get(`albums/favorites/${email}`)
    .then(response => response)
    .catch(err => {
      if (err.response) {
        return err.response.data.message
      }
      return err.message
    });
};


export async function addToFavorites(data) {

  return await axiosInstance.post("albums/favorites", data)
    .then(response => response)
    .catch(err => {
      if (err.response) {
        return err.response.data.message
      }
      return err.message
    });
};


export async function deleteFromFavorites(id) {

  return await axiosInstance.delete(`albums/favorites/${id}`)
    .then(response => response)
    .catch(err => {
      if (err.response) {
        return err.response.data.message
      }
      return err.message
    });
};


export async function getAlbums() {

  return await axiosInstance.get("albums")
    .then(response => response)
    .catch(err => {
      if (err.response) {
        return err.response.data.message
      }
      return err.message
    });
};


export async function getAlbum(id) {

  return await axiosInstance.get(`albums/${id}`)
    .then(response => response)
    .catch(err => {
      if (err.response) {
        return err.response.data.message
      }
      return err.message
    });
};

export async function getFavoriteAlbum(id) {

  return await axiosInstance.get(`albums/favorites/favoriteAlbum/${id}`)
    .then(response => response)
    .catch(err => {
      if (err.response) {
        return err.response.data.message
      }
      return err.message
    });
};

