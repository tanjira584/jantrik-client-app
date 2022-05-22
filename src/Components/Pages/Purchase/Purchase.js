import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import "./Purchase.css";

const Purchase = () => {
    return (
        <div>
            <Header></Header>
            <div className="container-md py-5">
                <div className="container-md">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="product-details">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="img">
                                            <img
                                                style={{ width: "100%" }}
                                                src="images/garden1.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="product-info">
                                            <h2>Safety Tools One</h2>
                                            <p className="text-secondary">
                                                Phasellus sed volutpat orci.
                                                Fusce eget lore mauris vehicula
                                                elementum gravida nec dui.
                                                Aenean aliquam varius ipsum, non
                                                ultricies tellus sodales eu.
                                                Donec dignissim viverra nunc, ut
                                                aliquet magna posuere eget.
                                            </p>
                                            <span
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "500",
                                                    color: "#F1AB08",
                                                }}
                                                className=" mb-2 text-uppercase d-block"
                                            >
                                                Unite Price: $10
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "500",
                                                    color: "#F1AB08",
                                                }}
                                                className=" mb-2 text-uppercase d-block"
                                            >
                                                Stock: 200 piece
                                            </span>

                                            <div className="d-flex align-items-center mb-3">
                                                <span className="text-muted mb-2 text-uppercase">
                                                    Qty:
                                                </span>
                                                <div className="cart-plus-minus ms-3">
                                                    <button className="dec qtybutton">
                                                        -
                                                    </button>
                                                    <input
                                                        name=""
                                                        className="cart-plus-minus-box outline-none"
                                                        value="120"
                                                        id=""
                                                    />
                                                    <button className="inc qtybutton">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="fw-bold h5 fst-italic">
                                                    Total: $1200
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="order-form">
                                <h4>Order Form</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;
