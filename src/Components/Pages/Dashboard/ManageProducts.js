import React from "react";
import useProducts from "../../../hooks/useProducts";

const ManageProducts = () => {
    const [products] = useProducts();
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
                                    <form action="">
                                        <input
                                            type="number"
                                            className="w-25 m-1"
                                            name=""
                                            id=""
                                        />{" "}
                                        <button className="btn btn-sm btn-primary">
                                            Update
                                        </button>
                                    </form>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-danger me-2">
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
