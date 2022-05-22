import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="container-md">
                <h2 className="text-center">Dashboard</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
