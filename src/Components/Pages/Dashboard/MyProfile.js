import React from "react";
import "./Dashboard.css";

const MyProfile = () => {
    return (
        <div className="m-2">
            <div className="px-5 py-4 border-start mb-4">
                <h4 className="fst-italic">
                    Hi ! Tanjir . You can update your profile.
                </h4>
            </div>
            <div className="profile">
                <div>
                    <h6>
                        Name: <span className="fst-italic">Tanjir Ahmed</span>
                    </h6>
                </div>
                <div>
                    <h6>
                        Email:{" "}
                        <span className="fst-italic">tanjir@gmail.com</span>
                    </h6>
                </div>
                <div>
                    <h6>
                        Phone: <span className="fst-italic">017**********</span>
                    </h6>
                </div>
                <div>
                    <h6>
                        Location:{" "}
                        <span className="fst-italic">
                            District, Upazilla, village
                        </span>
                    </h6>
                </div>
                <div>
                    <h6>
                        Education:{" "}
                        <span className="fst-italic">
                            HSC-2015 (High School Certificate)
                        </span>
                    </h6>
                </div>
                <div className="mb-5">
                    <h6>
                        LinkedIn:{" "}
                        <span className="fst-italic">www.linkedin.com</span>
                    </h6>
                </div>
                <button className="btn btn-primary">Edit Profile</button>
            </div>
        </div>
    );
};

export default MyProfile;
