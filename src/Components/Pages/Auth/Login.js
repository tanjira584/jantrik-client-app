import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data.email, data.password);
    };
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
                <div className="d-flex justify-content-between align-items-center">
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Login Now"
                    />
                    <span>Forgot Password?</span>
                </div>
            </form>
        </div>
    );
};

export default Login;
