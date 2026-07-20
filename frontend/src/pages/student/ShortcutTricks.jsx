import React from "react";
import { Link } from "react-router-dom";
import "./ShortcutTricks.css";

export default function ShortcutTricks() {
  const trickSections = [
    {
      title: "HCF and LCM Tricks",
      points: [
        "HCF is always less than or equal to the smallest given number.",
        "LCM is always greater than or equal to the greatest given number.",
        "Product of two numbers = HCF × LCM.",
        "If a number leaves the same remainder R when divided by a, b and c, then required number = LCM(a, b, c) + R.",
        "The greatest number which divides a, b and c leaving remainder R is HCF of (a - R), (b - R), and (c - R).",
        "HCF of a given set of numbers is always a factor of their LCM.",
      ],
    },
    {
      title: "Number System Tricks",
      points: [
        "Whole numbers include 0, 1, 2, 3, 4 and so on.",
        "Natural numbers start from 1.",
        "Prime numbers have exactly two factors: 1 and the number itself.",
        "Composite numbers have more than two factors.",
        "A number is divisible by 2 if its last digit is even.",
        "A number is divisible by 3 if the sum of its digits is divisible by 3.",
        "A number is divisible by 5 if its last digit is 0 or 5.",
        "A number is divisible by 9 if the sum of its digits is divisible by 9.",
        "A number is divisible by 11 if the difference between the sum of alternate digits is divisible by 11.",
      ],
    },
    {
      title: "Speed, Time and Distance Tricks",
      points: [
        "Speed = Distance / Time.",
        "Distance = Speed × Time.",
        "Time = Distance / Speed.",
        "Always keep units same before solving questions.",
        "For train problems, crossing time = Total length / Relative speed.",
        "Opposite direction relative speed = Sum of speeds.",
        "Same direction relative speed = Difference of speeds.",
      ],
    },
    {
      title: "Time and Work Tricks",
      points: [
        "If a person completes work in x days, one day work = 1/x.",
        "More people can complete work in less time.",
        "Less people take more time to complete the same work.",
        "Combined work rate = Sum of individual work rates.",
        "Time taken = 1 / Total work rate.",
      ],
    },
    {
      title: "Average Tricks",
      points: [
        "Average = Sum of observations / Number of observations.",
        "If each value increases by x, average also increases by x.",
        "If each value decreases by x, average also decreases by x.",
        "Average always lies between the smallest and largest value.",
        "When a new person joins and average increases, new value = previous average + increase × total members.",
      ],
    },
    {
      title: "Ratio and Proportion Tricks",
      points: [
        "Ratio of a and b is written as a : b.",
        "If x/y = z/a, then y/x = a/z.",
        "If x/y = z/a, then x/z = y/a.",
        "Mean proportional between x and z is √xz.",
        "Product of means = Product of extremes.",
      ],
    },
    {
      title: "Simple Interest and Compound Interest Tricks",
      points: [
        "Simple Interest is always calculated on principal.",
        "Compound Interest is calculated on principal plus previous interest.",
        "Difference between CI and SI for 2 years = P × R² / 100².",
        "Amount = Principal + Interest.",
        "For quick SI questions, use SI = (P × R × T) / 100.",
      ],
    },
    {
      title: "Percentage Tricks",
      points: [
        "To convert percentage to decimal, divide by 100.",
        "To convert percentage to fraction, write it over 100 and simplify.",
        "1/2 = 50%, 1/4 = 25%, 3/4 = 75%.",
        "Percentage change = [(New Value - Old Value) / Old Value] × 100.",
        "Reverse percentage: Original Value = Final Value / (1 ± Percentage/100).",
      ],
    },
    {
      title: "Profit and Loss Tricks",
      points: [
        "Profit = Selling Price - Cost Price.",
        "Loss = Cost Price - Selling Price.",
        "If two articles are sold at same price, one at x% profit and one at x% loss, overall loss = (x/10)²%.",
        "When no CP or SP is given, assume CP = 100.",
        "For dishonest dealer questions, Gain% = [(True Weight - False Weight) / False Weight] × 100.",
      ],
    },
    {
      title: "Probability Tricks",
      points: [
        "Probability = Favourable Outcomes / Total Outcomes.",
        "If finding direct probability is difficult, find probability of event not happening and subtract from 1.",
        "For “or” based cases, use addition.",
        "For “and” based cases, use multiplication.",
      ],
    },
    {
      title: "Permutation and Combination Tricks",
      points: [
        "Use permutation when order matters.",
        "Use combination when order does not matter.",
        "Permutation without repetition: nPr.",
        "Combination without repetition: nCr.",
        "For arranging letters with repetition, divide total factorial by factorials of repeated letters.",
      ],
    },
  ];

  return (
    <div className="shortcut-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="shortcut-hero">
        <h1>
          Shortcut <span>Tricks</span>
        </h1>

        <p>
          Quick aptitude tricks and shortcuts to solve placement exam questions
          faster and more accurately.
        </p>
      </div>

      <div className="shortcut-grid">
        {trickSections.map((section, index) => (
          <div className="shortcut-card" key={index}>
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