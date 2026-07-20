import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PreviousYearAptitude.css";

export default function PreviousYearAptitude() {
  const [showAnswers, setShowAnswers] = useState({});

  const questions = [
    { q: "What is 25% of 480?", options: ["100", "110", "120", "130"], answer: "120" },
    { q: "A student scored 420 marks out of 600. Find the percentage.", options: ["60%", "65%", "70%", "75%"], answer: "70%" },
    { q: "If 40% of a number is 320, find the number.", options: ["700", "750", "800", "850"], answer: "800" },
    { q: "The price increased from ₹800 to ₹920. Find the percentage increase.", options: ["10%", "12%", "15%", "20%"], answer: "15%" },
    { q: "Find the average of 10, 20, 30, 40 and 50.", options: ["25", "30", "35", "40"], answer: "30" },
    { q: "The average of 6 numbers is 18. Find their total sum.", options: ["96", "108", "120", "132"], answer: "108" },
    { q: "Average of first 5 even numbers is:", options: ["4", "5", "6", "7"], answer: "6" },
    { q: "The average of 15 and 25 is:", options: ["18", "20", "22", "25"], answer: "20" },
    { q: "A shopkeeper bought an item for ₹800 and sold it for ₹1000. Find profit.", options: ["₹100", "₹150", "₹200", "₹250"], answer: "₹200" },
    { q: "A mobile bought for ₹12000 is sold for ₹10800. Find loss percentage.", options: ["5%", "8%", "10%", "12%"], answer: "10%" },
    { q: "CP = ₹500, Profit = 20%. Find SP.", options: ["₹550", "₹580", "₹600", "₹620"], answer: "₹600" },
    { q: "SP = ₹900, Loss = ₹100. Find CP.", options: ["₹950", "₹1000", "₹1050", "₹1100"], answer: "₹1000" },
    { q: "A can complete work in 10 days. A's one day work is:", options: ["1/5", "1/10", "1/15", "1/20"], answer: "1/10" },
    { q: "A can do work in 12 days and B in 18 days. Together they complete it in:", options: ["6 days", "7.2 days", "8 days", "9 days"], answer: "7.2 days" },
    { q: "5 workers finish work in 20 days. 10 workers finish same work in:", options: ["5 days", "8 days", "10 days", "15 days"], answer: "10 days" },
    { q: "12 men complete work in 18 days. Men needed to complete in 9 days:", options: ["18", "20", "22", "24"], answer: "24" },
    { q: "Speed = 60 km/hr, Time = 2.5 hr. Distance is:", options: ["120 km", "130 km", "140 km", "150 km"], answer: "150 km" },
    { q: "Distance = 300 km, Speed = 60 km/hr. Time is:", options: ["3 hr", "4 hr", "5 hr", "6 hr"], answer: "5 hr" },
    { q: "A train travels 180 km in 3 hours. Speed is:", options: ["50 km/hr", "55 km/hr", "60 km/hr", "65 km/hr"], answer: "60 km/hr" },
    { q: "Speed = Distance / ?", options: ["Time", "Work", "Profit", "Average"], answer: "Time" },
    { q: "Ratio 2:3 has total 50. First part is:", options: ["20", "25", "30", "35"], answer: "20" },
    { q: "If a:b = 4:5 and total is 90, value of b is:", options: ["40", "45", "50", "55"], answer: "50" },
    { q: "Mean proportional between 4 and 9 is:", options: ["5", "6", "7", "8"], answer: "6" },
    { q: "If 2:3 = 4:x, find x.", options: ["4", "5", "6", "8"], answer: "6" },
    { q: "Simple Interest on ₹1000 at 10% for 2 years is:", options: ["₹100", "₹150", "₹200", "₹250"], answer: "₹200" },
    { q: "Formula of Simple Interest is:", options: ["P/R/T", "PRT/100", "P+R+T", "P×R"], answer: "PRT/100" },
    { q: "Principal ₹2000, Rate 5%, Time 2 years. SI is:", options: ["₹100", "₹150", "₹200", "₹250"], answer: "₹200" },
    { q: "Amount = Principal + ?", options: ["Rate", "Time", "Interest", "Loss"], answer: "Interest" },
    { q: "Probability of getting head when tossing a coin is:", options: ["1/4", "1/3", "1/2", "1"], answer: "1/2" },
    { q: "Probability range is:", options: ["0 to 1", "1 to 10", "-1 to 1", "0 to 100"], answer: "0 to 1" },
    { q: "A die is thrown. Probability of getting 6 is:", options: ["1/2", "1/3", "1/6", "1/4"], answer: "1/6" },
    { q: "Probability formula is:", options: ["Total/Favourable", "Favourable/Total", "Profit/CP", "Distance/Time"], answer: "Favourable/Total" },
    { q: "5P2 is equal to:", options: ["10", "15", "20", "25"], answer: "20" },
    { q: "5C2 is equal to:", options: ["5", "10", "15", "20"], answer: "10" },
    { q: "Permutation is used when:", options: ["Order matters", "Order does not matter", "Only addition", "Only average"], answer: "Order matters" },
    { q: "Combination is used when:", options: ["Order matters", "Order does not matter", "Only speed", "Only ratio"], answer: "Order does not matter" },
    { q: "LCM of 4 and 6 is:", options: ["8", "10", "12", "14"], answer: "12" },
    { q: "HCF of 12 and 18 is:", options: ["3", "4", "6", "9"], answer: "6" },
    { q: "Product of two numbers = HCF × ?", options: ["Average", "LCM", "Ratio", "Speed"], answer: "LCM" },
    { q: "LCM of 8 and 14 is:", options: ["28", "42", "56", "64"], answer: "56" },
    { q: "Sum of first n natural numbers is:", options: ["n²", "n(n+1)/2", "n(n+1)", "2n"], answer: "n(n+1)/2" },
    { q: "Sum of first n odd numbers is:", options: ["n", "n²", "2n", "n+1"], answer: "n²" },
    { q: "A number divisible by 2 is called:", options: ["Odd", "Prime", "Even", "Composite"], answer: "Even" },
    { q: "A number having exactly two factors is:", options: ["Even", "Odd", "Prime", "Whole"], answer: "Prime" },
    { q: "Find odd one out: Apple, Mango, Banana, Carrot", options: ["Apple", "Mango", "Banana", "Carrot"], answer: "Carrot" },
    { q: "If A = 1, B = 2, then Z = ?", options: ["24", "25", "26", "27"], answer: "26" },
    { q: "Find next number: 2, 4, 8, 16, ?", options: ["18", "20", "24", "32"], answer: "32" },
    { q: "Choose synonym of Happy.", options: ["Sad", "Joyful", "Angry", "Tired"], answer: "Joyful" },
    { q: "Choose correct spelling.", options: ["Recieve", "Receive", "Receeve", "Receve"], answer: "Receive" },
    { q: "Antonym of Strong is:", options: ["Powerful", "Weak", "Hard", "Bold"], answer: "Weak" },
  ];

  const toggleAnswer = (index) => {
    setShowAnswers({
      ...showAnswers,
      [index]: !showAnswers[index],
    });
  };

  return (
    <div className="previous-year-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="previous-hero">
        <h1>
          Previous Year <span>Aptitude Questions</span>
        </h1>

        <p>
          Practice 50 mixed aptitude questions with correct answers for
          placement preparation.
        </p>
      </div>

      <div className="pyq-list">
        {questions.map((item, index) => (
          <div className="pyq-card" key={index}>
            <div className="question-number">{index + 1}</div>

            <div className="question-content">
              <h2>{item.q}</h2>

              <div className="pyq-options">
                {item.options.map((option, i) => (
                  <p key={i}>
                    {String.fromCharCode(65 + i)}. {option}
                  </p>
                ))}
              </div>

              {showAnswers[index] && (
                <div className="answer-box">
                  Correct Answer: {item.answer}
                </div>
              )}
            </div>

            <button
              className="answer-toggle-btn"
              onClick={() => toggleAnswer(index)}
            >
              {showAnswers[index] ? "Hide" : "Answer"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}