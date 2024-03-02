// Create props interface
interface BMICalculatorProps {
    setBmiValue: (bmiValue: string) => void;
    bmiValue: string;
}

const BMICalculator = (props: BMICalculatorProps) => {
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="form-label" htmlFor="weight">
                        BMI Value
                        <br />
                        <small className="text-muted">
                            <a
                                href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html#:~:text=Calculate%20Your%20BMI&text=Body%20Mass%20Index%20(BMI)%20is,or%20health%20of%20an%20individual."
                                target="_blank"
                            >
                                How to Calculate Your BMI
                            </a>
                        </small>
                    </label>
                    <input
                        type="text"
                        pattern="[0-9]*.?[0-9]*"
                        className="form-control form-control-lg"
                        id="bmi_value"
                        value={props.bmiValue}
                        onChange={(e) => props.setBmiValue(e.target.value)}
                        required
                        min="0"
                        max="100"
                    />
                </div>
            </form>
        </div>
    );
};

export default BMICalculator;
