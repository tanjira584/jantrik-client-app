import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Dashboard.css";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/users", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);
    const handleRollUpdate = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("User Promoted Successfully");
                }
            });
    };
    return (
        <div className="m-2">
            <div className="px-5 py-4 border-start mb-4">
                <h4 className="fst-italic">
                    Hi ! Tanjir . As a Admin You Can Manage All Users .
                </h4>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
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
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.role || "User"}</td>

                                <td>
                                    <button
                                        onClick={() =>
                                            handleRollUpdate(user.email)
                                        }
                                        className="btn btn-sm btn-primary me-2"
                                    >
                                        MAKE ADMIN
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-danger">
                                        DELETE USER
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

export default ManageUsers;
