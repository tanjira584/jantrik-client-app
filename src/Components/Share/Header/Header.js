import React, { useState } from "react";
import "./Header.css";
import flogo from "./../../../images/logo.webp";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    // if (adminLoading) {
    //     return <p className="text-center">Loading...</p>;
    // }

    const handleToggle = (btn) => {
        if (btn === "open") {
            setToggle(true);
        } else {
            setToggle(false);
        }
    };
    const handleSignout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-md ">
                    <Link className="navbar-brand" to="/">
                        <img src={flogo} alt="" />
                    </Link>
                    <button
                        onClick={() => handleToggle("open")}
                        className="navbar-toggler"
                        type="button"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/products"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/blogs"
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/protfolio"
                                >
                                    Protfolio
                                </Link>
                            </li>

                            {user && (
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        aria-current="page"
                                        to="/dashboard"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                            )}
                            {user && (
                                <button
                                    className="btn text-white-50"
                                    onClick={handleSignout}
                                >
                                    Signout
                                </button>
                            )}
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to="/login"
                                >
                                    Login/Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div
                className={
                    toggle
                        ? "offcanvas-menu-wrap active"
                        : "offcanvas-menu-wrap"
                }
            >
                <nav className="offcanvas-menu">
                    <button
                        className="clsMenu"
                        onClick={() => handleToggle("close")}
                    >
                        X
                    </button>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Degree</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
