type BMICategoryType =
  | "Cannot Calculate"
  | "Underweight"
  | "Normal Weight"
  | "Overweight"
  | "Obesity";

const BMICategories: Record<BMICategoryType, string> = {
  "Cannot Calculate":
    "Please enter a valid BMI numerical value greater than 0.",
  Underweight:
    "could indicate malnutrition, an eating disorder, or other health issues.",
  "Normal Weight": "is generally considered healthy.",
  Overweight: "may lead to health issues.",
  Obesity: "increases various health risks.",
};

const getBMIDesignation = (bmi: number | string) => {
  if (typeof bmi === "string" || isNaN(bmi as number)) {
    return { designation: "Cannot Calculate" };
  }

  let designation: BMICategoryType = "Cannot Calculate";
  if (bmi < 18.5 && bmi >= 0) {
    designation = "Underweight";
    // Add boundary shift of 0.1 here for testing
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    designation = "Normal Weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    designation = "Overweight";
  } else if (bmi >= 30) {
    designation = "Obesity";
  } else {
    designation = "Cannot Calculate";
  }

  return {
    designation,
    description:
      designation === "Cannot Calculate"
        ? BMICategories[designation]
        : `A BMI of ${bmi.toFixed(2)} ${BMICategories[designation]}`,
  };
};

export { BMICategories, type BMICategoryType, getBMIDesignation };
