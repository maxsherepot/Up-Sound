import React from 'react';
import YouTubeMusic from '../../assets/images/btnsLogo/Youtube_Music_logo.svg';
import Spotify from '../../assets/images/btnsLogo/Spotify_Logo.png';



const AlbumDetails = ({ album, isFavorite, addToFavorites, deleteFromFavorites }) => {

  const toFavorites = item => {
    addToFavorites(item)
  }

  const deleteFavorite = item => {
    deleteFromFavorites(item._id)
  }


  return (
    <div className="mt-5">
      <div className="row">

        <div className="col-6 col-md-4">
          <img
            src={album.image}
            className="img-fluid rounded darkShadow"
            alt="..." />
        </div>

        <div className="col-6 col-md-8 pl-2 pl-md-4 text-light d-flex align-items-center">
          <div>
            <h4 className="albumTitle specialColor">{album.title}</h4>
            <h5>{album.author}</h5>
            <div>{album.year}</div>
            <div>{album.tracks} tracks</div>
            <div>{album.duration}</div>
          </div>
        </div>

        <div className="albumButtons col-12 col-md-4"></div>

        <div className="albumButtons col-12 pt-4 col-md-8 pl-md-4">
          <div className="text-light">Listen on:</div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="socialButtons">
              <button className="btn p-0 albumButton">
                <a href={album.spotify_link}>
                  <img
                    className="img-fluid"
                    src={Spotify}
                    alt="Spotify" />
                </a>
              </button>

              <button className="btn p-0 albumButton">
                <a href={album.youTubeMusic_link}>
                  <img
                    className="img-fluid"
                    src={YouTubeMusic}
                    alt="YouTubeMusic" />
                </a>
              </button>
            </div>
            {
              isFavorite
                ?
                <button
                  onClick={() => deleteFavorite(album)}
                  className="btn btn-dark specialColor deleteButton px-4">
                  Delete from favorites </button>
                :
                <button
                  onClick={() => toFavorites(album)}
                  className="btn btn-dark specialColor favoriteButton px-4">
                  Add to favorites</button>
            }

          </div>
        </div>
      </div>
    </div>
  );
};



export default AlbumDetails;
