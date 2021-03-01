import React, { useEffect, useState } from 'react';
import "./mainPage.scss";
import { getAlbums } from "../../helpers/albums";
import Loader from "../../components/Loader/Loader"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import AlbumCover from './AlbumCover';
import { connect } from "react-redux";
import { getAlbumsRequest } from "../../store/albums/actions";



const MainPage = props => {
  const { getAlbums, loading, error, albums } = props;

  useEffect(() => {
    getAlbums()
  }, [getAlbums]);


  return (
    <div className="container">

      {loading || !albums ?
        <Loader />
        :
        error ?
          <ErrorMessage />
          :
          <div className="d-flex justify-content-between mt-5">
            {albums &&
              albums.map(item => {
                return <AlbumCover
                  key={item._id}
                  item={item} />
              })
            }
          </div>
      }
    </div>
  );
};


const mapStateToProps = state => ({
  albums: state.albums.albums,
  loading: state.albums.loading,
  error: state.albums.error,
});


const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbumsRequest())
})



export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
