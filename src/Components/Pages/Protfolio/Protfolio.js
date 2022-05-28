import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import "./Protfolio.css";
import myImg from "../../../images/my-bg2.png";
import sign from "../../../images/signature.png";

const Protfolio = () => {
    return (
        <div>
            <Header></Header>
            <div className="container-md">
                <div className="row py-5">
                    <div className="col-md-5">
                        <div className="about-me-img">
                            <img className="img-fluid" src={myImg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7  d-flex flex-column justify-content-center">
                        <div className="about-me-content px-4">
                            <div className="title mb-5">
                                <h2 className="">
                                    The Proffession I Like Most
                                </h2>
                            </div>
                            <div className="content">
                                <p className="mb-2">
                                    Hi! I am Aryan Twanju, a web
                                    designer/developer focused on crafting great
                                    web experiences. Designing and Coding have
                                    been my passion since the days I started
                                    working with computers but I found myself
                                    into web design/development since 2007. I
                                    enjoy creating beautifully designed,
                                    intuitive and functional websites.
                                </p>
                                <p>
                                    For over past 8 years, I have worked for
                                    some of the best digital agencies and
                                    wonderful clients to create some award
                                    winning works. And, I can make this happen
                                    for your business as well.
                                </p>
                                <div className="signature">
                                    <h4>Tanjir Ahmed</h4>
                                    <span className="d-block mb-4">
                                        Full Stack Web developer
                                    </span>
                                    <img src={sign} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <h2 className="text-center mb-5 border-bottom pb-5">
                        My Skills
                    </h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="profile">
                                <h4 className="fst-italic">Personal Info: </h4>
                                <div>
                                    <h6>
                                        Name:{" "}
                                        <span className="fst-italic">
                                            Tanjir Ahmed
                                        </span>
                                    </h6>
                                </div>
                                <div>
                                    <h6>
                                        Email:{" "}
                                        <span className="fst-italic">
                                            tanjira584@gmail.com
                                        </span>
                                    </h6>
                                </div>
                                <div>
                                    <h6>
                                        Phone:{" "}
                                        <span className="fst-italic">
                                            01613071257
                                        </span>
                                    </h6>
                                </div>
                                <div>
                                    <h6>
                                        Location:{" "}
                                        <span className="fst-italic">
                                            Brahmanbaria, Kasba, Deli
                                        </span>
                                    </h6>
                                </div>
                                <div>
                                    <h6>
                                        Education:{" "}
                                        <span className="fst-italic">
                                            "HSC-2015 (High School Certificate)
                                        </span>
                                    </h6>
                                </div>
                                <div>
                                    <h6>
                                        Project1:{" "}
                                        <span className="fst-italic">
                                            https://motors-client-app.web.app/
                                        </span>
                                    </h6>
                                </div>
                                <div>
                                    <h6>
                                        Project2:{" "}
                                        <span className="fst-italic">
                                            https://canun-app.web.app/
                                        </span>
                                    </h6>
                                </div>
                                <div>
                                    <h6>
                                        Project3:{" "}
                                        <span className="fst-italic">
                                            https://fabulous-watch.netlify.app/
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4 className="fst-italic">Technology: </h4>
                            <ul className="m-0 p-0">
                                <li>
                                    <h6 className="fst-italic">HTML</h6>
                                </li>
                                <li>
                                    <h6 className="fst-italic">CSS</h6>
                                </li>
                                <li>
                                    <h6 className="fst-italic">BOOTSTRAP</h6>
                                </li>
                                <li>
                                    <h6 className="fst-italic">JAVASCRIPT</h6>
                                </li>
                                <li>
                                    <h6 className="fst-italic">REACT JS</h6>
                                </li>
                                <li>
                                    <h6 className="fst-italic">NODEJS</h6>
                                </li>
                                <li>
                                    <h6 className="fst-italic">MONGODB</h6>
                                </li>
                                <li>
                                    <h6 className="fst-italic">EXPRESS JS</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Protfolio;
