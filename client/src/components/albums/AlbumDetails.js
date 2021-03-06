import React from 'react';
import { addToFavorites, deleteFromFavorites } from "../../helpers/albums";



const AlbumDetails = ({ album, isFavorite,addToFavorites }) => {
  // const userData = JSON.parse(localStorage.getItem("userData"))
  // const email = userData.email;

  const toFavorites = item => {
    addToFavorites( item )
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
            <div>14 tracks</div>
            <div> 41 minutes</div>
          </div>

          <div className="AlbumButtons pt-4">
            <div>Listen on:</div>

            <div className="d-flex justify-content-between">
              <div className="socialButtons">
                <button className="btn p-0 albumButton">
                  <img
                    className="img-fluid"
                    src="https://music.youtube.com/img/on_platform_logo_dark.svg"
                    alt="..."
                  />
                </button>

                <button className="btn p-0 albumButton">
                  <img
                    className="img-fluid"
                    src="https://hantavirusofficial.com/wp-content/uploads/2019/12/Spotify_Logo_RGB_White.png"
                    alt="..."
                  />
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
