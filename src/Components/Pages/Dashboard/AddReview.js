import React, { useState } from "react";
import "./Dashboard.css";

const AddReview = () => {
    const [review, setReview] = useState({
        name: "",
        company: "",
        desc: "",
        rating: 0,
    });

    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(review);
    };
    return (
        <div className="m-2">
            <div className="px-5 py-4 border-start mb-4">
                <h4 className="fst-italic">Hi ! Tanjir . Give a Quote.</h4>
            </div>
            <div className="border p-5">
                <h4>Review</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Enter Name</label>
                        <input
                            type="text"
                            name="name"
                            value={review.name}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="company">Company Name</label>
                        <input
                            type="text"
                            name="company"
                            value={review.company}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rating">Ratings*</label>
                        <input
                            type="number"
                            name="rating"
                            value={review.rating}
                            onChange={handleChange}
                            className="form-control"
                            disabled={
                                review.rating == 5 || review.rating < 0
                                    ? true
                                    : false
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc">Give a Quote</label>
                        <textarea
                            name="desc"
                            className="form-control"
                            id=""
                            cols="30"
                            rows="4"
                        ></textarea>
                    </div>
                    <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddReview;
