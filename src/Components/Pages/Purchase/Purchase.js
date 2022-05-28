import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import "./Purchase.css";

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [qtyerror, setQtyerror] = useState("");

    const [product, setProduct] = useState({});
    const [client, setClient] = useState({
        name: user.displayName,
        email: user.email,
        phone: "",
        country: "",
        city: "",
        zip: "",
        quantity: 0,
    });
    const prodId = localStorage.getItem("product");
    useEffect(() => {
        fetch(`https://dry-forest-04223.herokuapp.com/product/${prodId}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [prodId]);
    const handleChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
        console.log(client.quantity);
    };
    let errorText;
    const handleQuantity = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
        if (parseInt(e.target.value) < parseInt(product.min)) {
            errorText = `Please Order minimum ${product.min} piece`;
            setQtyerror(errorText);
        } else if (parseInt(e.target.value) > parseInt(product.stock)) {
            errorText = `${product.stock} piece product available`;
            setQtyerror(errorText);
        } else {
            errorText = "";
            setQtyerror(errorText);
        }
        // console.log(client.quantity);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://dry-forest-04223.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({
                ...client,
                product: product._id,
                prodName: product.name,
                price: product.price,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                toast("Order Placed Successfully");
                e.target.reset();
                setClient({
                    name: user.displayName,
                    email: user.email,
                    phone: "",
                    country: "",
                    city: "",
                    zip: "",
                    quantity: 0,
                });
            });
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
                                                src={product.img}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="product-info">
                                            <h2>{product.name}</h2>
                                            <p className="text-secondary">
                                                {product.desc}
                                            </p>
                                            <span
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "500",
                                                    color: "#F1AB08",
                                                }}
                                                className=" mb-2 text-uppercase d-block"
                                            >
                                                Unite Price: ${product.price}
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "500",
                                                    color: "#F1AB08",
                                                }}
                                                className=" mb-2 text-uppercase d-block"
                                            >
                                                Stock: {product.stock} piece
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
                                                        name="quantity"
                                                        type="number"
                                                        className="cart-plus-minus-box outline-none"
                                                        value={client.quantity}
                                                        onChange={
                                                            handleQuantity
                                                        }
                                                    />
                                                    <button className="inc qtybutton">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="fw-bold h5 fst-italic">
                                                    Total: ${" "}
                                                    {client.quantity
                                                        ? parseInt(
                                                              client.quantity
                                                          ) *
                                                          parseInt(
                                                              product.price
                                                          )
                                                        : 0}
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
                                            value={user.displayName}
                                            onChange={handleChange}
                                            disabled
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
                                            value={user.email}
                                            onChange={handleChange}
                                            disabled
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
                                            Product Quantity{" "}
                                            <span className="text-muted">
                                                / (Min-{product.min} piece)
                                            </span>
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
                                                type="number"
                                                className="cart-plus-minus-box outline-none"
                                                id=""
                                                value={client.quantity}
                                                onChange={handleQuantity}
                                            />
                                            <button
                                                className="inc qtybutton px-3 bg-primary text-light"
                                                type="button"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p className="m-0 text-danger">
                                            {qtyerror}
                                        </p>
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
                                            $
                                            {client.quantity
                                                ? parseInt(client.quantity) *
                                                  parseInt(product.price)
                                                : 0}
                                        </span>
                                    </div>
                                    <div>
                                        <input
                                            className="btn btn-primary w-100"
                                            type="submit"
                                            value="Place An Order"
                                            disabled={
                                                parseInt(client.quantity) ===
                                                    0 || qtyerror
                                                    ? true
                                                    : false
                                            }
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
