import React, { useEffect, useState } from 'react';



const AlbumInfo = ({ album }) => {

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
          <h4 className="card-title specialColor">{album.title}</h4>
          <h5 className="">{album.author}</h5>
          <div>{album.year}</div>
          <div>14 tracks</div>
          <div> 41 minutes</div>
        </div>

      </div>
    </div>
  );
};




export default AlbumInfo
