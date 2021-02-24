import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';



const Spinner = () => {

    return (
        <Loader
            type="ThreeDots"
            color="#00cea3"
            height={60}
            width={60}
        />
    );
}

export default Spinner;