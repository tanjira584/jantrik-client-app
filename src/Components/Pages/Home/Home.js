import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import Summery from "../../Share/Summery/Summery";
import BlogSection from "./BlogSection";
import BussinessCounter from "./BussinessCounter";
import CompanyBanner from "./CompanyBanner";
import DisplayedProduct from "./DisplayedProduct";
import "./Home.css";
import HomeProduct from "./HomeProduct";
import Policy from "./Policy";
import Reviews from "./Reviews";
import SecondaryBannar from "./SecondaryBannar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CompanyBanner></CompanyBanner>
            <HomeProduct></HomeProduct>
            <SecondaryBannar></SecondaryBannar>
            <DisplayedProduct></DisplayedProduct>
            <BussinessCounter></BussinessCounter>
            <Reviews></Reviews>
            <BlogSection></BlogSection>
            <Policy></Policy>
            <Summery></Summery>
            <Footer></Footer>
        </div>
    );
};

export default Home;
