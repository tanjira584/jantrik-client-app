import React, { useState } from "react";
import "./Header.css";
import flogo from "./../../../images/logo.webp";

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
            <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
                <div class="container-md ">
                    <a class="navbar-brand" href=" ">
                        <img src={flogo} alt="" />
                    </a>
                    <button
                        onClick={() => handleToggle("open")}
                        class="navbar-toggler"
                        type="button"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href=" "
                                >
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href=" "
                                >
                                    Login
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href=" "
                                >
                                    Signup
                                </a>
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
