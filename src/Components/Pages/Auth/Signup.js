import React from "react";
import { useForm } from "react-hook-form";
import {
    useSignInWithGoogle,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [signInWithGoogle, guser, gloading, gerror] =
        useSignInWithGoogle(auth);

    const [createUserWithEmailAndPassword, euser, eloading, eerror] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    const [updateProfile, updating, uerror] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        reset();
    };
    if (euser || guser) {
        signOut(auth);
        navigate("/login");
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    };
    return (
        <div className="p-4  bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Enter name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required",
                            },
                        })}
                    />
                    <div>
                        {errors.name?.type === "required" && (
                            <p className="m-0 text-danger">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                </div>
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
                        id="password"
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
                <div>
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Signup Now"
                    />
                </div>
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

export default Signup;
