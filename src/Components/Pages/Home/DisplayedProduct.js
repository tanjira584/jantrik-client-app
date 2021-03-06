import React from "react";
import useProducts from "../../../hooks/useProducts";
import { Link } from "react-router-dom";

const DisplayedProduct = () => {
    const [products] = useProducts();

    const handleProduct = (product) => {
        localStorage.setItem("product", product._id);
    };
    return (
        <div className="py-5">
            <div className="container-md">
                <h2 className="mb-4">Featured Products</h2>
                <div className="row g-4">
                    {products.slice(0, 8).map((product) => (
                        <div className="col-md-3" key={product._id}>
                            <div className="home-prod p-3 border-rounded border">
                                <div className="img mb-2">
                                    <img
                                        src={product.img}
                                        alt=""
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div>
                                    <h5 className="mb-3">{product.name}</h5>
                                    <span
                                        style={{
                                            fontSize: "12px",
                                            borderRadius: "6px",
                                            background: "#f7f7f7",
                                            padding: "6px",
                                        }}
                                        className="text-uppercase text-muted mb-3"
                                    >
                                        {product.category}
                                    </span>
                                    <div>
                                        <span className="fs-4">
                                            ${product.price}
                                        </span>{" "}
                                        <span className="text-muted">
                                            / Piece
                                        </span>
                                    </div>
                                    <div className="mb-3">
                                        <span className="fs-4">
                                            ${product.min}
                                        </span>{" "}
                                        <span className="text-muted">
                                            (Min Order)
                                        </span>
                                    </div>
                                    <Link
                                        className="btn w-100 btn-primary"
                                        onClick={() => handleProduct(product)}
                                        to="/purchase"
                                    >
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DisplayedProduct;
