import React, { useState } from "react";
import "./Header.css";
import flogo from "./../../../images/logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = (btn) => {
        if (btn === "open") {
            setToggle(true);
        } else {
            setToggle(false);
        }
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
                                    to="/purchase"
                                >
                                    Purchase
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to="/dashboard"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to="/login"
                                >
                                    Login
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
