import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);
    return (
        <div className="m-2">
            <div className="px-5 py-4 border-start mb-4">
                <h4 className="fst-italic">
                    Hi ! Tanjir . As a admin You can manage all orders.
                </h4>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Client</th>
                            <th scope="col">Product Id</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Shipment</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{order.email}</td>
                                <td>{order.product}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm">
                                        {order.payment ? "Paid" : "Unpaid"}
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-warning btn-sm">
                                        Pending
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-danger">
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

export default ManageOrders;
