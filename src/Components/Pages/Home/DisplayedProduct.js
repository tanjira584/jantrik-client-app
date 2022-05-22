import React from "react";
import useProducts from "../../../hooks/useProducts";

const DisplayedProduct = () => {
    const [products] = useProducts();
    return (
        <div>
            {products.map((product) => (
                <h2>{product.category}</h2>
            ))}
        </div>
    );
};

export default DisplayedProduct;
