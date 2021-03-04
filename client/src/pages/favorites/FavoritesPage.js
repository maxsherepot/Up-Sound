import React, { useEffect, useState } from 'react';
import "./favoritesPage.scss";
import { getAlbums, getFavorites } from "../../helpers/albums";
import Loader from "../../components/Loader/Loader"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { connect } from "react-redux";
import { getAlbumsRequest } from "../../store/albums/actions";
import AlbumCover from '../mainPage/AlbumCover';



const FavoritesPage = props => {
  const [favorites, setFavorites] = useState(null);
  const [loading, setloading] = useState(true)

  const userData = JSON.parse(localStorage.getItem("userData") || null)
  const email = userData.email;

  useEffect(() => {
    getFavorites(email)
      .then(res => setFavorites(res))
    setloading(false)
  }, [getFavorites]);


  return (
    <div className="container">
      <h1 className="text-light text-center">Favorite Albums</h1>

      {loading || !favorites ?
        <Loader />
        :
        !favorites.length
          ?
          <h3 className="text-light text-center">No favorite albums yet</h3>
          :
          <div className="d-flex justify-content-between mt-5 text-light">
            {favorites.map(item => {
              return <AlbumCover
                key={item._id}
                item={item} />
            })
            }
          </div>
      }
    </div >
  );
};



// const mapStateToProps = state => ({
//   albums: state.albums.albums,
//   loading: state.albums.loading,
//   error: state.albums.error,
// });


// const mapDispatchToProps = dispatch => ({
//   getAlbums: () => dispatch(getAlbumsRequest())
// })



export default FavoritesPage;
//export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
