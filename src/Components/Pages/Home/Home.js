import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import Summery from "../../Share/Summery/Summery";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ width: "100%", height: "500px" }}></div>
            <Summery></Summery>
            <Footer></Footer>
        </div>
    );
};

export default Home;
