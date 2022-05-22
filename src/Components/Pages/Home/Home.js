import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import Summery from "../../Share/Summery/Summery";
import CompanyBanner from "./CompanyBanner";
import "./Home.css";
import Reviews from "./Reviews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CompanyBanner></CompanyBanner>
            <div style={{ width: "100%", height: "500px" }}></div>
            <Reviews></Reviews>
            <Summery></Summery>
            <Footer></Footer>
        </div>
    );
};

export default Home;
