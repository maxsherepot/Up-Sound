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

        <div className="col-4">
          <img
            src={album.image}
            className="img-fluid rounded darkShadow"
            alt="..." />
        </div>

        <div className="col-8 text-light pt-5 pl-5">

          <div className="AlbumInformation">
            <h4 className="card-title specialColor">{album.title}</h4>
            <h5 className="">{album.author}</h5>
            <div>{album.year}</div>
            <div>{album.tracks} tracks</div>
            <div>{album.duration}</div>
          </div>

          <div className="AlbumButtons pt-4">
            <div>Listen on:</div>

            <div className="d-flex justify-content-between">
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
                    className="btn btn-dark specialColor favoriteButton px-3">
                    Delete from favorites </button>
                  :
                  <button
                    onClick={() => toFavorites(album)}
                    className="btn btn-dark specialColor favoriteButton">
                    Add to favorites</button>
              }

            </div>
          </div>
        </div>
      </div>
    </div >
  );
};



export default AlbumDetails;
