import { describe, it, expect } from "vitest";
import { getBMIDesignation } from "../data/bmi_calculator";

describe("BMI Designation Calculator", () => {
    // Testing for Underweight
    it("returns Underweight for BMI at 0 (minimum)", () => {
        expect(getBMIDesignation(0).designation).toBe("Underweight");
    });

    it("returns Cannot Calculate for BMI just below 0 (epsilon = 0.1)", () => {
        expect(getBMIDesignation(-0.1).designation).toBe("Cannot Calculate");
    });

    it("returns Underweight for BMI at 9.3 (point between 0 and 18.5)", () => {
        expect(getBMIDesignation(9.2).designation).toBe("Underweight");
    });

    it("returns Underweight for BMI at 18.49 (maximum, epsilon = 0.1)", () => {
        expect(getBMIDesignation(18.4).designation).toBe("Underweight");
    });

    it("returns Normal Weight for BMI just above 18.49 (epsilon = 0.1)", () => {
        expect(getBMIDesignation(18.5).designation).toBe("Normal Weight");
    });

    // Testing for Normal Weight
    it("returns Normal Weight for BMI at 18.5 (minimum)", () => {
        expect(getBMIDesignation(18.5).designation).toBe("Normal Weight");
    });

    it("returns Underweight for BMI just below 18.5 (epsilon = 0.1)", () => {
        expect(getBMIDesignation(18.4).designation).toBe("Underweight");
    });

    it("returns Normal Weight for BMI at 23 (point between 18.5 and 25)", () => {
        expect(getBMIDesignation(23).designation).toBe("Normal Weight");
    });

    it("returns Normal Weight for BMI at 24.9 (maximum)", () => {
        expect(getBMIDesignation(24.9).designation).toBe("Normal Weight");
    });

    it("returns Overweight for BMI just above 24.9 (epsilon = 0.1)", () => {
        expect(getBMIDesignation(25).designation).toBe("Overweight");
    });

    // Testing for Overweight
    it("returns Overweight for BMI at 25 (minimum)", () => {
        expect(getBMIDesignation(25).designation).toBe("Overweight");
    });

    it("returns Normal Weight for BMI just below 25 (epsilon = 0.1)", () => {
        expect(getBMIDesignation(24.9).designation).toBe("Normal Weight");
    });

    it("returns Overweight for BMI at 28 (point between 25 and 29.9)", () => {
        expect(getBMIDesignation(28).designation).toBe("Overweight");
    });

    it("returns Overweight for BMI at 29.9 (maximum)", () => {
        expect(getBMIDesignation(29.9).designation).toBe("Overweight");
    });

    it("returns Obesity for BMI just above 29.9 (epsilon = 0.1)", () => {
        expect(getBMIDesignation(30).designation).toBe("Obesity");
    });

    // Testing for Obesity
    it("returns Obesity for BMI at 30 (minimum)", () => {
        expect(getBMIDesignation(30).designation).toBe("Obesity");
    });

    it("returns Overweight for BMI just below 30 (epsilon = 0.1)", () => {
        expect(getBMIDesignation(29.9).designation).toBe("Overweight");
    });

    // Since there is no specific maximum for BMI, we can test a few
    // high values to ensure that the function returns Obesity for all
    it("returns Obesity for 30 =< BMI < 1000", () => {
        for (let i = 30; i < 1000; i += 10) {
            expect(getBMIDesignation(i).designation).toBe("Obesity");
        }
    });
});
