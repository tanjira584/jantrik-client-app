import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import CompanyBanner from "../Home/CompanyBanner";
import HomeSidebar from "../Home/HomeSidebar";

const Product = () => {
    return (
        <div>
            <Header></Header>
            <CompanyBanner></CompanyBanner>
            <div className="container-md py-5">
                <div className="row">
                    <div className="col-md-3">
                        <HomeSidebar></HomeSidebar>
                    </div>
                    <div className="col-md-9">
                        <h2>All Product Goes Here</h2>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Product;
