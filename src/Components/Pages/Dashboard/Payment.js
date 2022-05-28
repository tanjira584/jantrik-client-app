import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51L3ZnoA6IBTGNGbPAsYSBjmafIRVn6qkspPMe1voZpkGPqJlR9eGHYu4CrHACqTarJ5NSwU6fZQIEztNHFEXifaf00zADiQ2Iy"
);

const Payment = () => {
    const { id } = useParams();

    const url = `https://dry-forest-04223.herokuapp.com/order/${id}`;
    const { data: order, isLoading } = useQuery("order", () =>
        fetch(url, {
            method: "Get",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <p className="text-center">Loading......</p>;
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-7">
                    <div className="billing-address">
                        <h2>Billing Address</h2>
                    </div>
                </div>
                <div className="col-md-5">
                    <h2>Payment By Card</h2>
                    <div className="mb-4 shadow p-4 rounded">
                        <h4>Hello, Mr. Tanjir Ahmed</h4>
                        <h6>
                            Your Total Coast:{" "}
                            <span className="text-primary">
                                $
                                {parseInt(order.quantity) *
                                    parseInt(order.price)}
                            </span>
                        </h6>
                    </div>
                    <div className="shadow p-4">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order}></CheckoutForm>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
