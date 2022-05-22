import React from "react";
import "./Summery.css";
const Summery = () => {
    return (
        <div className="py-5 summery " style={{ backgroundColor: "#DFE4F0" }}>
            <div className="container-md">
                <div className="d-flex  align-items-center justify-content-between">
                    <div className="pe-4">
                        <h3 className="mb-4">ABOUT JANTRIK</h3>
                        <p className="m-0">
                            Serving machine shops and job shops alike, Travers
                            is your metalworking and industrial supply
                            superstore with over 500,000 tools from more than
                            800 trusted brands, including a large Made-in-USA
                            product offering.
                        </p>
                        <p className="m-0">
                            {" "}
                            We feature a complete inventory of the following:
                        </p>
                        <ul className="mt-4">
                            <li>Auto Parts</li>
                            <li>Cutting Tools</li>
                            <li>Decoration Tools</li>
                            <li>Electrical Tools</li>
                            <li>Garden Tools</li>
                            <li>Measuring Tools</li>
                            <li>Plumbing Tools</li>
                            <li>Power Tools</li>
                            <li>Safety Tools</li>
                        </ul>
                    </div>
                    <div className=" ps-4">
                        <p className="m-0">
                            Our online store is your easy one-stop source for
                            all things metalworking, and we are positive we can
                            help you find the perfect quality solutions for all
                            your machine shop needs.
                        </p>
                        <p className="m-0">
                            For assistance with finding the right tools or any
                            other questions, please feel free to call our
                            customer support team at 800-221-0270 or use our
                            chat feature now.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summery;
