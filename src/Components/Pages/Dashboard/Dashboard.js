import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import bg1 from "../../../images/com-banner4.jpg";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../../hooks/useAdmin";
import auth from "../../../firebase.init";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    // if (adminLoading) {
    //     return <p className="text-center">Loading...</p>;
    // }

    return (
        <div>
            <Header></Header>
            <div className="container-md">
                <div
                    className=""
                    style={{
                        backgroundImage: `url(${bg1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                >
                    <div className="py-5 bg-dark opacity-75">
                        <h2 className="text-center fst-italic text-light py-4">
                            Welcome to dashboard
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard-sidebar  bg-dark opacity-75 py-4 border-top px-3">
                            <ul>
                                <li>
                                    <Link className="active" to="/dashboard">
                                        My Profile
                                    </Link>
                                </li>
                                {!admin && (
                                    <li>
                                        <Link to="/dashboard/my-order">
                                            My Orders
                                        </Link>
                                    </li>
                                )}
                                {!admin && (
                                    <li>
                                        <Link to="/dashboard/add-review">
                                            Add a Review
                                        </Link>
                                    </li>
                                )}
                                {admin && (
                                    <li>
                                        <Link to="/dashboard/manage-user">
                                            Manage Users
                                        </Link>
                                    </li>
                                )}
                                {admin && (
                                    <li>
                                        <Link to="/dashboard/manage-order">
                                            Manage Orders
                                        </Link>
                                    </li>
                                )}
                                {admin && (
                                    <li>
                                        <Link to="/dashboard/manage-product">
                                            Manage Products
                                        </Link>
                                    </li>
                                )}
                                {admin && (
                                    <li>
                                        <Link to="/dashboard/add-product">
                                            Add Product
                                        </Link>
                                    </li>
                                )}

                                <li>
                                    <Link to="/signout">Sign Out</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
