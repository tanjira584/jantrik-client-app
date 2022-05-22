import React, { useState } from "react";
import Signup from "./Signup";
import "./Auth.css";
import Login from "./Login";
import Header from "../../Share/Header/Header";
import Footer from "../../Share/Footer/Footer";

const Auth = () => {
    const [authForm, setAuthForm] = useState("login");
    const handleAuthForm = (authForm) => {
        setAuthForm(authForm);
    };
    return (
        <div>
            <Header></Header>
            <div className="py-5 bg-secondary">
                <h2 className="text-center mb-4">CUSTOMER SIGN IN</h2>
                <div className="auth-wraper w-25 mx-auto">
                    <div className="authBtns text-center">
                        <button
                            onClick={() => handleAuthForm("login")}
                            className={
                                authForm === "login"
                                    ? "bg-primary text-light"
                                    : " "
                            }
                        >
                            Login
                        </button>
                        <button
                            onClick={() => handleAuthForm("register")}
                            className={
                                authForm === "register"
                                    ? "bg-primary text-light"
                                    : " "
                            }
                        >
                            Register
                        </button>
                    </div>
                    {authForm === "login" ? <Login></Login> : <Signup></Signup>}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Auth;