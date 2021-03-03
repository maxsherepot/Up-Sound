import React, { useEffect, useState } from 'react';
import "./idPage.scss";
import { connect } from "react-redux";
import Loader from '../../components/Loader/Loader';
import { getAlbumRequest } from "../../store/albums/actions";
import AlbumInfo from './AlbumInfo';



const IdPage = props => {
  const { getAlbum, albumId, album, loading, error } = props;

  // const album = {
  //   author: "Travis Scott",
  //   image: "http://a10.gaanacdn.com/images/albums/3/2203403/crop_480x480_2203403.jpg",
  //   title: "STARGAZING ",
  //   year: "2018",
  //   _id: "603cd0dadc393230795ce530"
  // }

  useEffect(() => {
    getAlbum(albumId)
  }, [getAlbum]);

  console.log("album", album);

  return (
    <div className="container">

      {!album ?
        <Loader />
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

