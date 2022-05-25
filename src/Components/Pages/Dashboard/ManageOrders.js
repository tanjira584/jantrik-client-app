import React from "react";
import "./Dashboard.css";

const ManageOrders = () => {
    return (
        <div className="m-2">
            <div className="px-5 py-4 border-start mb-4">
                <h4 className="fst-italic">
                    Hi ! Tanjir . As a admin You can manage all orders .
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Garden Tool One</td>
                            <td>100</td>
                            <td>10</td>
                            <td>1000</td>
                            <td>
                                <button className="btn btn-sm btn-primary me-2">
                                    Pay
                                </button>
                                <button className="btn btn-sm btn-danger">
                                    Cancel
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Plumbing Tool One</td>
                            <td>50</td>
                            <td>12</td>
                            <td>600</td>
                            <td>
                                <button className="btn btn-sm btn-success">
                                    Paid
                                </button>
                                <button className="btn btn-sm btn-warning ms-2">
                                    trnsId: 0384839ddhs383
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;
