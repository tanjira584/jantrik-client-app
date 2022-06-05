import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    useSignInWithGoogle,
    useSignInWithEmailAndPassword,
    useAuthState,
    useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";

import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [email, setEmail] = useState("");
    const [signInWithGoogle, guser, gloading, gerror] =
        useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, euser, eloading, eerror] =
        useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    /*------Handle Form Submit----*/
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        reset();
    };
    if (euser || guser) {
        const user = euser?.user?.email || guser?.user?.email;
        const name = euser?.user?.displayName || guser?.user?.displayName;
        const currentUser = { email: user, name: name };
        fetch(`https://dry-forest-04223.herokuapp.com/user/${user}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
        })
            .then((res) => res.json())
            .then((data) => {
                const accessToken = data.token;
                localStorage.setItem("accessToken", accessToken);
                return navigate(from);
            });
    }

    /*------Handle Google SignIn-----*/
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    };

    /*-----Handle Password Reset -----*/
    const handleChange = (e) => {
        setEmail(e.target.value);
    };
    const passwordReset = () => {
        sendPasswordResetEmail(email);
    };
    let authError;
    if (eerror) {
        authError = eerror.message;
    }
    return (
        <div className="p-4  bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Enter email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: "Please provide a valid email",
                            },
                        })}
                        onChange={handleChange}
                    />
                    <div>
                        {errors.email?.type === "required" && (
                            <p className="m-0 text-danger">
                                {errors.email.message}
                            </p>
                        )}
                        {errors.email?.type === "pattern" && (
                            <p className="m-0 text-danger">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Enter password
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                            minLength: {
                                value: 6,
                                message:
                                    "Your password must be gather then 6 characters",
                            },
                        })}
                    />
                    <div>
                        {errors.password?.type === "required" && (
                            <p className="m-0 text-danger">
                                {errors.password.message}
                            </p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="m-0 text-danger">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Login Now"
                    />
                    <span onClick={passwordReset} className="text-primary">
                        Forgot Password?
                    </span>
                </div>
                {authError && <p className="text-danger m-0">{authError}</p>}
            </form>
            <div className="d-flex align-items-center py-3">
                <div className="border w-50"></div>
                <div className="mx-4">OR</div>
                <div className="border w-50"></div>
            </div>
            <div>
                <button className="w-100 p-2" onClick={handleGoogleSignIn}>
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default Login;
