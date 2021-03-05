import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onLogOut } from '../store/auth/actions';



const Navbar = props => {

    const loginOut = () => {
        localStorage.removeItem("userData");
        props.logOut();
    }


    return (
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

                            <li className="nav-item">
                                <Link to="/albums" className="nav-link">Albums</Link>
                            </li>

                            <li className="nav-item mr-3">
                                <Link to="/favorites" className="nav-link">Favorites</Link>
                            </li>

                            <button
                                onClick={() => loginOut()}
                                className="btn btn-sm btn-light ml-5">Log Out
                                </button>
                        </ul>
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

