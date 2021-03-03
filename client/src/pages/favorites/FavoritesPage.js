import React, { useEffect, useState } from 'react';
import "./favoritesPage.scss";
import { getAlbums } from "../../helpers/albums";
import Loader from "../../components/Loader/Loader"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { connect } from "react-redux";
import { getAlbumsRequest } from "../../store/albums/actions";



const FavoritesPage = props => {
  const { getAlbums, loading, error, albums } = props;

  // useEffect(() => {
  //   getAlbums()
  // }, [getAlbums]);


  return (
    <div className="container">

      {loading || !albums ?
        <Loader />
        :
        error ?
          <ErrorMessage />
          :
          <div className="d-flex justify-content-between mt-5 text-light">
            {/* {albums &&
              albums.map(item => {
                return <AlbumCover
                  key={item._id}
                  item={item} />
              })
            } */}
            <h1>Favorite Albums</h1>
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



export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
