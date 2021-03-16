import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onLogOut } from '../../store/auth/actions';



const Navbar = props => {

    const loginOut = () => {
        localStorage.removeItem("userData");
        sessionStorage.clear();
        props.logOut();
    }


    return (
        <header className="header">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
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

                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item mr-3">
                                <Link to="/albums" className="nav-link">Albums</Link>
                            </li>

                            <li className="nav-item mr-3">
                                <Link to="/favorites" className="nav-link">Favorites</Link>
                            </li>

                            <li className="nav-item mr-3">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>

                        <button
                            onClick={() => loginOut()}
                            className="btn btn-sm btn-dark specialColor logOutButton">Log Out
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};



const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(onLogOut())
});



export default withRouter(
    connect(null, mapDispatchToProps)(Navbar)
);

