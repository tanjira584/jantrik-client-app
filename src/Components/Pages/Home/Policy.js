import React from "react";
import icon1 from "../../../images/icon1.webp";
import icon2 from "../../../images/icon2.webp";
import icon3 from "../../../images/icon3.webp";
import icon4 from "../../../images/icon4.webp";
import bg1 from "../../../images/com-banner.jpg";
import "./Policy.css";

const Policy = () => {
    return (
        <div
            className="py-5"
            style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
        >
            <div className="container-md py-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="policy-box d-flex align-items-center justify-content-center">
                            <div className="img">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="ms-3">
                                <h2 className="mb-2">100+</h2>
                                <h4>Distributers</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="policy-box d-flex align-items-center justify-content-center">
                            <div className="img">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="ms-3">
                                <h2 className="mb-2">120M +</h2>
                                <h4>Annual revenue</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="policy-box d-flex align-items-center justify-content-center">
                            <div className="img">
                                <img src={icon3} alt="" />
                            </div>
                            <div className="ms-3">
                                <h2 className="mb-2">70+</h2>
                                <h4>Tools</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="policy-box d-flex align-items-center justify-content-center">
                            <div className="img">
                                <img src={icon4} alt="" />
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

export default Policy;
