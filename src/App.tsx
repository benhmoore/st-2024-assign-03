// import { useState } from 'react'
import { BsHash, BsInfoCircle } from "react-icons/bs";
import "./scss/app.scss";
import BMICalculator from "./components/BMICalculator";

function App() {
    return (
        <div className="container">
            <div className="alert alert-secondary mt-5 mb-0">
                <h5>
                    <BsInfoCircle
                        className="me-2"
                        style={{ marginTop: "-3px" }}
                    />
                    Usage Disclaimer
                </h5>
                <p className="mb-0">
                    This application was written for a class assignment and is
                    for demonstration purposes only.
                </p>
                <small>
                    See{" "}
                    <a
                        href="https://www.cdc.gov/obesity/downloads/bmiforpactitioners.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        BMI Considerations
                    </a>{" "}
                    for more information.
                </small>
            </div>
            <div className="row">
                <div className="col-md-8 col-lg-5 g-3">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title mt-2">
                                <BsHash
                                    className="me-2"
                                    style={{ marginTop: "-3px" }}
                                />
                                BMI Designation Calculator
                            </h4>
                        </div>
                        <div className="card-body">
                            <BMICalculator />
                        </div>
                        <div className="card-footer justify-content-end align-items-end d-flex p-3">
                            <button
                                type="submit"
                                className="btn btn-primary justify-content-end"
                            >
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-7">
                    <div className="card mt-3 bg-primary-light text-light">
                        <div className="card-body pb-0">
                            <div className="alert">
                                <h5>Underweight</h5>
                                <p>
                                    A BMI of less than 18.5 indicates that you
                                    are underweight, which means you may be
                                    malnourished or have some sort of illness.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
