import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onLogOut } from '../../store/auth/actions';
import "./navbar.scss";
import logo from "../../assets/images/logo/logo.png";



const Navbar = props => {

    const loginOut = () => {
        localStorage.removeItem("userData");
        sessionStorage.clear();
        props.logOut();
    }

    const navTitleItems = [
        { linkTo: "/albums", title: "Albums" },
        { linkTo: "/favorites", title: "Favorites" },
        { linkTo: "/about", title: "About" }
    ];

    const navIconItems = [
        { linkTo: "/albums", iconClassName: "fas fa-home" },
        { linkTo: "/favorites", iconClassName: "fas fa-heart" },
        { linkTo: "/about", iconClassName: "fas fa-info-circle" }
    ];



    return (
        <header className="header bg-dark">
            <nav className="navbar navbar-dark container-fluid py-0">
                <div className="navbar-brand p-0" >
                    <Link to="/albums">
                        <img className="py-2" 
                        alt="log"
                        src={logo}></img>
                    </Link>
                </div>

                <div className="mr-4" id="navbarNav">
                    <ul className="navbar-nav align-items-center">

                        {/* show navTitles or navIcons according to monitor width  */}
                        <div className="navTitles">
                            {navTitleItems.map(item => {
                                return (
                                    <li
                                        key={item.title}
                                        className="nav-item mr-5">
                                        <Link to={item.linkTo} className="nav-link">{item.title}</Link>
                                    </li>
                                )
                            })}
                        </div>
                        <div className="navIcons">
                            {navIconItems.map(item => {
                                return (
                                    <li
                                        key={item.iconClassName}
                                        className="nav-item mr-2">
                                        <Link to={item.linkTo} className="nav-link">
                                            <i className={item.iconClassName}></i>
                                        </Link>
                                    </li>
                                )
                            })}
                        </div>
                    </ul>
                </div>

                <div className="specialColor logOutButton mx-2 mx-md-3"
                    onClick={() => loginOut()}
                >Log Out
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

