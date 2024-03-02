import "./scss/app.scss";
import BMICalculator from "./components/BMICalculator";
import { getBMIDesignation } from "./data/bmi_calculator";

import { BsHash, BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

function App() {
    const [bmiValue, setBmiValue] = useState<string>("");
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
                            <BMICalculator
                                setBmiValue={setBmiValue}
                                bmiValue={bmiValue}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-7">
                    <div className="card mt-3 bg-primary-light text-light">
                        <div className="card-body pb-0">
                            <div className="alert">
                                <h5>
                                    {bmiValue === "" ? (
                                        <>
                                            <BiArrowBack
                                                className="me-2"
                                                style={{ marginTop: "-3px" }}
                                            />
                                            Enter a Value
                                        </>
                                    ) : (
                                        getBMIDesignation(parseFloat(bmiValue))
                                            .designation
                                    )}
                                </h5>
                                <p>
                                    {
                                        getBMIDesignation(parseFloat(bmiValue))
                                            .description
                                    }
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
