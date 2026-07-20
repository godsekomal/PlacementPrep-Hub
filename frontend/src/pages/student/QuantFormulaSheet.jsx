import React from "react";
import { Link } from "react-router-dom";
import "./QuantFormulaSheet.css";

export default function QuantFormulaSheet() {
  const formulaSections = [
    {
      title: "LCM and HCF",
      points: [
        "LCM = Least Common Multiple. It is the smallest positive number divisible by the given numbers.",
        "HCF = Highest Common Factor. It is the greatest number that divides the given numbers exactly.",
        "Product of two numbers = HCF × LCM",
        "HCF = Product of two numbers / LCM",
        "LCM = Product of two numbers / HCF",
      ],
    },
    {
      title: "Number System",
      points: [
        "Sum of first n natural numbers = n(n + 1) / 2",
        "Sum of squares = n(n + 1)(2n + 1) / 6",
        "Sum of cubes = [n(n + 1) / 2]²",
        "Sum of first n odd numbers = n²",
        "Sum of first n even numbers = n(n + 1)",
      ],
    },
    {
      title: "Algebra Formulas",
      points: [
        "(a + b)(a - b) = a² - b²",
        "(a + b)² = a² + b² + 2ab",
        "(a - b)² = a² + b² - 2ab",
        "(a + b + c)² = a² + b² + c² + 2(ab + bc + ca)",
        "a³ + b³ = (a + b)(a² - ab + b²)",
        "a³ - b³ = (a - b)(a² + ab + b²)",
      ],
    },
    {
      title: "Speed, Distance and Time",
      points: [
        "Speed = Distance / Time",
        "Distance = Speed × Time",
        "Time = Distance / Speed",
        "Average Speed = Total Distance / Total Time",
        "If two trains move in opposite directions, crossing time = Total Length / Sum of Speeds",
        "If two trains move in same direction, crossing time = Total Length / Difference of Speeds",
      ],
    },
    {
      title: "Time and Work",
      points: [
        "Rate of Work = 1 / Time Taken",
        "Time Taken = 1 / Rate of Work",
        "If A completes work in x days, A's 1 day work = 1/x",
        "Combined work = Sum of individual work rates",
      ],
    },
    {
      title: "Average",
      points: [
        "Average = Sum of Observations / Total Number of Observations",
        "Average Speed = Total Distance / Total Time",
        "Average of n consecutive natural numbers = (n + 1) / 2",
        "Average of n consecutive even numbers = n + 1",
        "Average of n consecutive odd numbers = n",
      ],
    },
    {
      title: "Ratio and Proportion",
      points: [
        "Ratio of two numbers a and b = a : b",
        "If two numbers are in ratio a : b and sum is S, first number = [a / (a + b)] × S",
        "Second number = [b / (a + b)] × S",
        "Mean proportional between x and y = √xy",
        "Product of means = Product of extremes",
      ],
    },
    {
      title: "Simple Interest and Compound Interest",
      points: [
        "Simple Interest = (P × R × T) / 100",
        "Amount = Principal + Interest",
        "Principal = (100 × SI) / (R × T)",
        "Rate = (100 × SI) / (P × T)",
        "Time = (100 × SI) / (P × R)",
        "Compound Amount = P(1 + R/100)ᵀ",
        "Compound Interest = Amount - Principal",
      ],
    },
    {
      title: "Percentage",
      points: [
        "x% = x / 100",
        "a% of b = (a / 100) × b",
        "What percentage of a is b = (b / a) × 100",
        "Percentage Change = (Change / Initial Value) × 100",
        "Successive increase = a + b + (ab / 100)",
        "Successive discount = a + b - (ab / 100)",
      ],
    },
    {
      title: "Profit and Loss",
      points: [
        "Profit = Selling Price - Cost Price",
        "Loss = Cost Price - Selling Price",
        "Profit % = (Profit / Cost Price) × 100",
        "Loss % = (Loss / Cost Price) × 100",
        "Selling Price with profit = [(100 + Profit%) / 100] × Cost Price",
        "Selling Price with loss = [(100 - Loss%) / 100] × Cost Price",
      ],
    },
    {
      title: "Probability",
      points: [
        "Probability = Favourable Outcomes / Total Outcomes",
        "0 ≤ P(A) ≤ 1",
        "P(A') + P(A) = 1",
        "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
        "For independent events, P(A ∩ B) = P(A) × P(B)",
      ],
    },
    {
      title: "Permutation and Combination",
      points: [
        "Permutation: nPr = n! / (n - r)!",
        "Combination: nCr = n! / [r!(n - r)!]",
        "Permutation is used when order matters.",
        "Combination is used when order does not matter.",
      ],
    },
  ];

  return (
    <div className="quant-formula-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="formula-hero">
        <h1>
          Quant <span>Formula Sheet</span>
        </h1>

        <p>
          Important quantitative aptitude formulas for placement preparation.
        </p>
      </div>

      <div className="formula-grid">
        {formulaSections.map((section, index) => (
          <div className="formula-card" key={index}>
            <h2>{section.title}</h2>

            {section.points.map((point, i) => (
              <p key={i}>{point}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}