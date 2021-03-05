import React, { useEffect, useState } from 'react';
import "./mainPage.scss";
import Loader from "../../components/Loader/Loader"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import AlbumCard from './AlbumCard';
import { connect } from "react-redux";
import { getAlbumsRequest } from "../../store/albums/actions";



const MainPage = props => {
  const { getAlbums, loading, error, albums } = props;

  useEffect(() => {
    getAlbums()
  }, []);

  //console.log("albums", albums);

  return (
    <div className="container">

      {loading || !albums ?
        <Loader />
        :
        error ?
          <ErrorMessage />
          :
          !albums.length
            ?
            <h3 className="text-light text-center">No albums yet</h3>
            :
            <div className="d-flex justify-content-between mt-5">
              {albums &&
                albums.map(item => {
                  return <AlbumCard
                    key={item._id}
                    item={item}
                    albumIsFavorite={false} />
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
