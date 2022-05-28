import React from "react";

import bg1 from "../../../images/com-banner.jpg";
import "./Policy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuildingCircleArrowRight,
    faFileInvoiceDollar,
    faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const BussinessCounter = () => {
    return (
        <div
            className="py-5"
            style={{
                //backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundColor: "#DFE4F0",
            }}
        >
            <div className="container-md py-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="counter-box d-flex align-items-center justify-content-center">
                            <div className="img">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faBuildingCircleArrowRight}
                                ></FontAwesomeIcon>
                            </div>
                            <div className="ms-3">
                                <h2 className="mb-2">100+</h2>
                                <h4>Distributers</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="counter-box d-flex align-items-center justify-content-center">
                            <div className="img">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faFileInvoiceDollar}
                                ></FontAwesomeIcon>
                            </div>
                            <div className="ms-3">
                                <h2 className="mb-2">120M +</h2>
                                <h4>Annual revenue</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="counter-box d-flex align-items-center justify-content-center">
                            <div className="img">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faScrewdriverWrench}
                                ></FontAwesomeIcon>
                            </div>
                            <div className="ms-3">
                                <h2 className="mb-2">70+</h2>
                                <h4>Tools</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="counter-box d-flex align-items-center justify-content-center">
                            <div className="img">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faMessage}
                                ></FontAwesomeIcon>
                            </div>
                            <div className="ms-3">
                                <h2 className="mb-2">12K+</h2>
                                <h4>Reviews</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BussinessCounter;
