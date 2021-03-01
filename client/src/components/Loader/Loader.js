import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';



const Spinner = () => {

    return (
        <div className="text-center">
            <Loader
                type="ThreeDots"
                color="darkgrey"
                height={60}
                width={60}
            />
        </div>
    );
}

export default Spinner;