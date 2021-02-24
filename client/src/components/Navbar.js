import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {

    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <span className="navbar-brand mr-5" >Navbar</span>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item mr-3">
                                    <Link to="/auth" className="nav-link">Auth</Link>
                                </li>
                                <li className="nav-item mr-3">
                                    <Link to="/idPage" className="nav-link">idPage</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/accent" className="nav-link">Second Link</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};



export default Navbar;

