import React, { useState } from "react";
import { toast } from "react-toastify";
import useProducts from "../../../hooks/useProducts";

const ManageProducts = () => {
    const [products] = useProducts();
    const [stock, setStock] = useState(0);
    const handleChange = (e) => {
        setStock(e.target.value);
    };

    const handleStockUpdate = (id) => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ stock }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Stock Update Successfully");
                    setStock(0);
                }
            });
    };
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Product Delete Successfully");
                }
            });
    };
    return (
        <div className="m-2">
            <div className="px-5 py-4 border-start mb-4">
                <h4 className="fst-italic">
                    Hi ! Tanjir . As a Admin You Can Manage All Products.
                </h4>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Update Stock</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id} className="">
                                <th scope="row">{index + 1}</th>
                                <td>{product.name}</td>
                                <td>
                                    <img
                                        src={product.img}
                                        alt=""
                                        style={{ width: "50px" }}
                                    />
                                </td>
                                <td>{product.stock}</td>
                                <td>
                                    <input
                                        type="number"
                                        className="w-25 m-1"
                                        name="stock"
                                        id=""
                                        onChange={handleChange}
                                    />{" "}
                                    <button
                                        onClick={() =>
                                            handleStockUpdate(product._id)
                                        }
                                        className="btn btn-sm btn-primary"
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDelete(product._id)
                                        }
                                        className="btn btn-sm btn-danger me-2"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;
