import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import "./loader.scss";


const Spinner = () => {

    return (
        <div className="spinner">
            <Loader type="Audio" />
        </div>
    );
}


export default Spinner;