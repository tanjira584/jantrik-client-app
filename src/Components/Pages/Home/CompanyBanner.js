import React from "react";
import logo from "../../../images/logo.webp";
import cbanner from "../../../images/com-banner4.jpg";
import "./CompanyBanner.css";

const CompanyBanner = () => {
    return (
        <div>
            <div className="container-md ">
                <div
                    style={{ backgroundImage: `url(${cbanner})` }}
                    className="com-banner "
                >
                    <div className="d-flex align-items-center justify-content-between py-5  bg-dark p-2 text-dark bg-opacity-75">
                        <div className="w-50 p-3">
                            <div className="log">
                                <img src={logo} alt="" />
                            </div>
                            <h2 style={{ color: "#fff" }}>
                                Jantrik Tool Company, Inc.
                            </h2>
                        </div>
                        <div className="w-50 p-3">
                            <h2 style={{ color: "#fff" }}>
                                Ready Stocks for Rapid Delivery to all our
                                distributors.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyBanner;
