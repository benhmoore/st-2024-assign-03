const BMICalculator = () => {
  return (
    <div>
      <form>
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
            type="number"
            className="form-control form-control-lg"
            id="bmi_value"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default BMICalculator;
