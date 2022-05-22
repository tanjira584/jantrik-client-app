import React from "react";
import { Link } from "react-router-dom";
import "./Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
    return (
        <div className="py-5" style={{ backgroundColor: "#F2F2F2" }}>
            <div className="container-md">
                <div className="section-info d-flex align-items-center justify-content-between mb-4">
                    <div>
                        <h4>
                            TESTIMONIAL.{" "}
                            <Link to="/review">See All Review</Link>
                        </h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <ul className="m-0 p-0 star-list">
                            <li>
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faStar}
                                ></FontAwesomeIcon>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faStar}
                                ></FontAwesomeIcon>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faStar}
                                ></FontAwesomeIcon>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faStar}
                                ></FontAwesomeIcon>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faStarHalfStroke}
                                ></FontAwesomeIcon>
                            </li>
                        </ul>
                        <span className="ms-3">975 Reviews</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="review">
                            <div className="d-flex aligin-items-center mb-2">
                                <ul className="m-0 p-0 star-list">
                                    <li>
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faStar}
                                        ></FontAwesomeIcon>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faStar}
                                        ></FontAwesomeIcon>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faStar}
                                        ></FontAwesomeIcon>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faStar}
                                        ></FontAwesomeIcon>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faStarHalfStroke}
                                        ></FontAwesomeIcon>
                                    </li>
                                </ul>
                                <span className="ms-3">03/11/2022</span>
                            </div>
                            <h6>Good customer service - The</h6>
                            <p className="mb-2">
                                I've been through many portable compressors and
                                California Air Tools is my final stop. Their
                                compressor is quiet and top quality.
                            </p>
                            <span className="fw-bold text-mute">Jhon Doe</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
