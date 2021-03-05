import React, { useEffect, useState } from 'react';
import "./idPage.scss";
import { connect } from "react-redux";
import Loader from '../../components/Loader/Loader';
import { getAlbumRequest } from "../../store/albums/actions";
import AlbumInfo from './AlbumInfo';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';



const IdPage = props => {
  const { getAlbum, albumId, album, loading, error } = props;

  useEffect(() => {
    getAlbum(albumId)
  }, [albumId]);

  //console.log("albumId", albumId);
  console.log("album", album);


  return (
    <div className="container">

      {loading || !album ?
        <Loader />
        :
        error ?
          <ErrorMessage/>
          :
          <AlbumInfo album={album} />
      }

    </div>
  );
};


const mapStateToProps = state => ({
  albumId: state.albums.albumId,
  album: state.albums.album,
});


const mapDispatchToProps = dispatch => ({
  getAlbum: albumId => dispatch(getAlbumRequest(albumId))
})



export default connect(mapStateToProps, mapDispatchToProps)(IdPage);

