import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setIdForAlbum } from '../../store/albums/actions';



const AlbumCard = ({ item, setId, albumIsFavorite }) => {
  const history = useHistory();

  const selectAlbum = id => {
    setId(id);
    sessionStorage.setItem("albumId", id);
    albumIsFavorite
      ?
      history.push(`/favorites/${id}`)
      :
      history.push(`/albums/${id}`)
  };


  return (
    <div className="col-6 col-sm-4 col-lg-3 mb-5">
      <div className="card darkShadow"
        onClick={() => selectAlbum(item._id)}>

        <img
          src={item.image}
          className="card-img-top"
          alt="..."
        />

        <div className="card-body p-3 text-center bg-dark text-light">
          <h5 className="card-title">{item.title}</h5>
          <h6 className="">{item.author}</h6>
          <span>{item.year}</span>
        </div>
      </div>
    </div>
  );
};


const mapDispatchToProps = dispatch => ({
  setId: id => dispatch(setIdForAlbum(id))
});



export default connect(null, mapDispatchToProps)(AlbumCard);
