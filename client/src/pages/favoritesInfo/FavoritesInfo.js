import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Loader from '../../components/Loader/Loader';
import { getFavoriteAlbumRequest } from "../../store/albums/actions";
import FavoriteAlbumInfo from './FavoriteAlbumInfo';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';



const FavoritesInfo = props => {
  const { getFavoriteAlbum, albumId, favoriteAlbum, loading, error } = props;

  useEffect(() => {
    getFavoriteAlbum(albumId)
  }, [albumId]);

  //console.log("albumId", albumId);
  console.log("favoriteAlbum", favoriteAlbum);


  return (
    <div className="container">

      {loading || !favoriteAlbum ?
        <Loader />
        :
        error ?
          <ErrorMessage/>
          :
          <FavoriteAlbumInfo album={favoriteAlbum} />
      }

    </div>
  );
};


const mapStateToProps = state => ({
  albumId: state.albums.albumId,
  favoriteAlbum: state.albums.favoriteAlbum,
});


const mapDispatchToProps = dispatch => ({
  getFavoriteAlbum: albumId => dispatch(getFavoriteAlbumRequest(albumId))
})



export default connect(mapStateToProps, mapDispatchToProps)(FavoritesInfo);

