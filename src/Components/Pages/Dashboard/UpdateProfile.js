import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const UpdateProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [profile, setProfile] = useState({
        name: user.displayName,
        email: user.email,
        phone: "",
        location: "",
        education: "",
        link: "",
    });
    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(profile);
        fetch(
            `https://dry-forest-04223.herokuapp.com/user/admin/${user.email}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify({ ...profile }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Profile Update Successfully");
                }
            });
    };
    if (loading) {
        return <p className="text-center">Loading...</p>;
    }
    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="p-5 border">
                <h2 className="text-center fst-italic">
                    Update Your Profile !
                </h2>
                <div className="mb-3">
                    <label className="mb-2" htmlFor="name">
                        Enter name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={user.displayName}
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label className="mb-2" htmlFor="email">
                        Enter email
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        value={user.email}
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label className="mb-2" htmlFor="phone">
                        Enter Phone
                    </label>
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={profile.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="mb-2" htmlFor="location">
                        Enter Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        className="form-control"
                        value={profile.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="mb-2" htmlFor="education">
                        Enter Educaton
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="education"
                        value={profile.education}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="mb-2" htmlFor="link">
                        Enter Linkedin Link
                    </label>
                    <input
                        type="text"
                        name="link"
                        className="form-control"
                        value={profile.link}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type="submit"
                    className="btn btn-success"
                    value="Update Profile"
                />
            </form>
        </div>
    );
};

export default UpdateProfile;
