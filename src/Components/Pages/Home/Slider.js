import React from "react";
import slideImg from "../../../images/slide1.jpg";

const Slider = () => {
    return (
        <div
            className="slide p-4"
            style={{ backgroundColor: "#F3F3F3", height: "100%" }}
        >
            <div className="row" style={{ height: "100%" }}>
                <div className="col-md-7  height-100 d-flex flex-column justify-content-center">
                    <div className="slide-content p-2 p-md-5">
                        <h5 className="display-9">Combo Deals Power Tools</h5>
                        <h2 style={{ fontSize: "60px", fontWeight: "bold" }}>
                            OFFER 20{" "}
                            <sup
                                style={{ fontSize: "18px" }}
                                className="display-9 text-muted"
                            >
                                % OFF
                            </sup>
                        </h2>
                        <h5 className="mb-3">
                            Circular Saw Tools Ace (Maintainance Kit)
                        </h5>
                        <h5 className="mb-4">
                            Price: <span className="text-primary"> $200</span>
                        </h5>
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
                <div className="col-md-5  height-100  d-flex flex-column justify-content-center">
                    <div className="img">
                        <img style={{ width: "100%" }} src={slideImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
