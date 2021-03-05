import React, { useEffect } from 'react';
import Loader from "../../components/loader/Loader"
import ErrorMessage from "../../components/errorMessage/ErrorMessage"
import AlbumCard from '../../components/albums/AlbumCard';
import { connect } from "react-redux";
import { getAlbumsRequest } from "../../store/albums/actions";



const MainPage = props => {
  const { getAlbums, loading, error, albums } = props;

  useEffect(() => {
    getAlbums()
  }, []);


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
