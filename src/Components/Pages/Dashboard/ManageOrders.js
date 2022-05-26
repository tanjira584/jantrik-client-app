import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Dashboard.css";

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);
    const handleShipment = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ shipment: true }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Product is ready for Shipped");
                }
            });
    };
    const handleCancel = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Order Delete Successfully");
                }
            });
    };
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
                                <td>{order.prodName || order.product}</td>
                                <td>
                                    {order.paid ? (
                                        <button className="btn btn-success btn-sm">
                                            Paid
                                        </button>
                                    ) : (
                                        <button className="btn btn-warning btn-sm">
                                            Unpaid
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm"
                                        onClick={() =>
                                            handleShipment(order._id)
                                        }
                                        disabled={order.paid ? false : true}
                                    >
                                        {order.paid ? "Shipped" : "Panding"}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        disabled={order.paid ? true : false}
                                        onClick={() => handleCancel(order._id)}
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

export default ManageOrders;
