import React from "react";
import DisplayedProduct from "./DisplayedProduct";
import "./HomeProduct.css";
import HomeSidebar from "./HomeSidebar";

const HomeProduct = () => {
    return (
        <div className="py-3">
            <div className="container-md">
                <div className="row">
                    <div className="col-md-3">
                        <HomeSidebar></HomeSidebar>
                    </div>
                    <div className="col-md-9">
                        <DisplayedProduct></DisplayedProduct>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;
