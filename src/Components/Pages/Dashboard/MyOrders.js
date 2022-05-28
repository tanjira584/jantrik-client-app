import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Dashboard.css";
import { confirmAlert } from "react-confirm-alert";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://dry-forest-04223.herokuapp.com/orders", {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);
    const handleCancel = (id) => {
        confirmAlert({
            title: "Confirm to submit",
            message: "Are you sure to do this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        fetch(
                            `https://dry-forest-04223.herokuapp.com/order/${id}`,
                            {
                                method: "DELETE",
                                headers: {
                                    authorization: `Bearer ${localStorage.getItem(
                                        "accessToken"
                                    )}`,
                                },
                            }
                        )
                            .then((res) => res.json())
                            .then((data) => {
                                if (data.acknowledged) {
                                    toast("Order Delete Successfully");
                                }
                            });
                    },
                },
                {
                    label: "No",
                    onClick: () => {
                        return;
                    },
                },
            ],
        });
    };

    return (
        <div className="m-2">
            <div className="px-5 py-4 border-start mb-4">
                <h4 className="fst-italic">
                    Hi ! Tanjir . See your all orders here .
                </h4>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Unite</th>
                            <th scope="col">Total</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{order.prodName || order.product}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td>
                                    {parseInt(order.quantity) *
                                        parseInt(order.price)}
                                </td>
                                <td>
                                    {order?.paid ? (
                                        <button className="btn btn-sm btn-success me-2">
                                            Paid
                                        </button>
                                    ) : (
                                        <Link
                                            to={`/dashboard/payment/${order._id}`}
                                            className="btn btn-sm btn-primary me-2"
                                        >
                                            Pay
                                        </Link>
                                    )}
                                    {order?.paid ? (
                                        <button className="btn btn-sm btn-warning ms-2">
                                            trnsId: 0384839ddhs383
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                handleCancel(order._id)
                                            }
                                            className="btn btn-sm btn-danger"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
