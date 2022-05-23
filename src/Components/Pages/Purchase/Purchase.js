import React, { useState } from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import "./Purchase.css";

const Purchase = () => {
    const [client, setClient] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        zip: "",
        quantity: 0,
        amount: 0,
    });
    const handleChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(client);
    };
    return (
        <div>
            <Header></Header>
            <div className="container-md py-5">
                <div className="container-md">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="product-details">
                                <div className="row">
                                    <div className="col-md-12 pe-5">
                                        <div className="img mb-3">
                                            <img
                                                style={{ width: "100%" }}
                                                src="images/garden1.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
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
                                                        defaultValue="120"
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
                        <div className="col-md-5 ps-5">
                            <div className="order-form">
                                <h4 className="mb-3">Proceed Your Order</h4>
                                <form
                                    onSubmit={handleSubmit}
                                    className="border p-4"
                                >
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="form-label"
                                        >
                                            Enter name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter name"
                                            name="name"
                                            value={client.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter email"
                                            name="email"
                                            value={client.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="phone"
                                            className="form-label"
                                        >
                                            Phone number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            placeholder="Phone"
                                            name="phone"
                                            value={client.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="state"
                                            className="form-label"
                                        >
                                            State / Country
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="state"
                                            placeholder="State / Country"
                                            name="country"
                                            value={client.country}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="city"
                                            className="form-label"
                                        >
                                            City / Town
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            placeholder="City / Town"
                                            name="city"
                                            value={client.city}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="zip"
                                            className="form-label"
                                        >
                                            Postcode / Zip
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="zip"
                                            placeholder="Postcode / Zip"
                                            name="zip"
                                            value={client.zip}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="quantity"
                                            className="form-label"
                                        >
                                            Product Quantity
                                        </label>
                                        <div className="cart-plus-minus d-block">
                                            <button
                                                className="dec qtybutton px-3 bg-primary text-light"
                                                type="button"
                                            >
                                                -
                                            </button>
                                            <input
                                                name="quantity"
                                                className="cart-plus-minus-box outline-none"
                                                id=""
                                                value={client.quantity}
                                                onChange={handleChange}
                                            />
                                            <button
                                                className="inc qtybutton px-3 bg-primary text-light"
                                                type="button"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="quantity"
                                            className="form-label"
                                        >
                                            <span className="fw-bold fst-italic">
                                                Total Amount:{" "}
                                            </span>
                                        </label>
                                        <span className="fst-italic fw-bold ms-4">
                                            ${client.amount}
                                        </span>
                                    </div>
                                    <div>
                                        <input
                                            className="btn btn-primary w-100"
                                            type="submit"
                                            value="Place An Order"
                                        />
                                    </div>
                                </form>
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
