import React, { useEffect, useState } from 'react';
import "./mainPage.scss";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setIdForAlbum } from '../../store/albums/actions';




const AlbumCover = ({ item, setId }) => {
  const history = useHistory();

  const selectAlbum = id => {
    setId(id);
    //history.push(`/albums/${id}`)
  };


  return (
    <div
      className="card"
      onClick={() => selectAlbum(item._id)}>

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
  );
};


const mapDispatchToProps = dispatch => ({
  setId: id => dispatch(setIdForAlbum(id))
});



export default connect(null, mapDispatchToProps)(AlbumCover);
