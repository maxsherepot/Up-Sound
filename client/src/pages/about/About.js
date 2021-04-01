import React from 'react';
import { useHistory } from "react-router-dom";



const About = () => {
  const history = useHistory();

  const toMainPage = () => {
    history.push("/albums");
  };


  return (
    <div className="container text-light">

      <h1 className="text-center mt-5"> Welcome to Up Sound Application</h1>
      <div className="mt-5 px-md-5">
        <p>
          Here you can discover some great music albums, view the details of each one, listen to them on Spotify or YouTube Music, add to the list of your favorite albums.<br></br>
          The program was developed as a home project in February - March 2021. In the future, it is planned to gradually expand the functionality and increase the number of albums.
        </p>
        <p>
          Here I first developed the server part creating a full-stack project. At the front end of the project, I used React and Redux. Additionally, react-loader-spinner, react-paginate, react-toastify, redux-thunk, and other npm modules were installed.<br></br>
          Javascript library axios was used to support requests, receive responses from the server, transform and automatically convert them to JSON.
        </p>
        <p>
          The back end part is made using Node.js. Additionally, Express and MongoDB technologies were also used.<br></br>
          Authorization has also been implemented, thanks to which each registered user receives his unique collection of favorite albums.
        </p>
      </div>

      <div className="d-flex justify-content-center my-5">
        <button
          className="btn btn-dark specialColor toMainButton px-4"
          onClick={() => toMainPage()}
        >To main page
        </button>
      </div>
    </div>
  );
};



export default About;
