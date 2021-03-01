import React, { useEffect, useState } from 'react';
import "./mainPage.scss";
import { getAlbums } from "../../helpers/albums";
import Loader from "../../components/Loader/Loader"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"



const MainPage = () => {

  const [albums, setAlbums] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    getAlbums()
      .then(res => setAlbums(res))
      .then(setLoading(false))
      .catch(err => setError(err))
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
                return (
                  <div key={item._id}
                    className="card">

                    <img
                      src={item.image}
                      className="card-img-top cursor-pointer bg-image hover-zoom"
                      alt="..."
                    />
                    <div className="card-body p-2 text-center bg-dark text-light">
                      <h5 className="card-title cursor-pointer">{item.title}</h5>
                      <h6 className="">{item.author}</h6>
                      <span>{item.year}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
      }
    </div>
  );
};



export default MainPage;
