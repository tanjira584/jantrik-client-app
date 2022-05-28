import React from "react";
import DisplayedProduct from "./DisplayedProduct";
import "./HomeProduct.css";
import HomeSidebar from "./HomeSidebar";
import Slider from "./Slider";

const HomeProduct = () => {
    return (
        <div className="py-3">
            <div className="container-md">
                <div className="row">
                    <div className="col-md-3  d-none d-md-block">
                        <HomeSidebar></HomeSidebar>
                    </div>
                    <div className="col-md-9">
                        <Slider></Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;
