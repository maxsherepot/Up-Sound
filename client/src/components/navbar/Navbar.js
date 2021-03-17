import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onLogOut } from '../../store/auth/actions';
import "./navbar.scss";


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
        <header className="header">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">

                    <span className="navbar-brand" >Navbar</span>

                    <div className="justify-content-between" id="navbarNav">
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

                    <span
                        onClick={() => loginOut()}
                        className="specialColor logOutButton">Log Out
                    </span>
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

