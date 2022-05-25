import React, { useState } from "react";
import useProducts from "../../../hooks/useProducts";
import "./HomeSidebar.css";

const HomeSidebar = () => {
    const [li, setLi] = useState("");

    const [products] = useProducts();
    const handleLi = (id) => {
        setLi(id);
    };
    return (
        <div>
            <div className="categories">
                <ul>
                    <li className="category-heading">Product Categories</li>
                    {products.map((product) => (
                        <li
                            onClick={() => handleLi(product._id)}
                            key={product._id}
                            className={li === product._id ? "active" : " "}
                        >
                            {product.category}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HomeSidebar;
