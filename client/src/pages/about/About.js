import React from 'react';
import { useHistory } from "react-router-dom"
import "./about.scss"



const About = () => {
  const history = useHistory()

  const toMainPage = () => {
    history.push("/albums")
  }


  return (
    <div className="container">

      <h1>ABOUT</h1>

      <button
        className="btn btn-light"
        onClick={() => toMainPage()}
      >To main page
      </button>
    </div>
  );
};



export default About;

