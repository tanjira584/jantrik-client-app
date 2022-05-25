import React from "react";
import "./Dashboard.css";

const ManageUsers = () => {
    return (
        <div className="m-2">
            <div className="px-5 py-4 border-start mb-4">
                <h4 className="fst-italic">
                    Hi ! Tanjir . As a Admin You Can Manage All Users .
                </h4>
            </div>
            <div className="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Promote</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>abc@gmail.com</td>
                            <td>User</td>

                            <td>
                                <button className="btn btn-sm btn-primary me-2">
                                    MAKE ADMIN
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-danger">
                                    DELETE USER
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>xyz@gmail.com</td>
                            <td>User</td>
                            <td>
                                <button className="btn btn-sm btn-primary me-2">
                                    MAKE ADMIN
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-danger">
                                    DELETE USER
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
