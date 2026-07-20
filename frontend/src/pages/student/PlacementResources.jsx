import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PlacementResources.css";

export default function PlacementResources() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);

  const resources = [
    {
      title: "Aptitude Resources",
      items: [
        {
          name: "Quant Formula Sheet",
          path: "/resources/quant-formula-sheet",
        },
        {
          name: "Shortcut Tricks",
          path: "/resources/shortcut-tricks",
        },
        
        {
          name: "Previous Year Aptitude Questions",
          path: "/resources/previous-year-aptitude",
        },
      ],
    },
    {
  title: "DSA Resources",
  items: [
    {
      name: "Arrays",
      path: "/resources/dsa/arrays",
    },
    {
      name: "Strings",
      path: "/resources/dsa/strings",
    },
    {
      name: "Linked List",
      path: "/resources/dsa/linked-list",
    },
    {
      name: "Stack & Queue",
      path: "/resources/dsa/stack-queue",
    },
    {
      name: "Trees",
      path: "/resources/dsa/trees",
    },
    {
      name: "Graphs",
      path: "/resources/dsa/graphs",
    },
    {
      name: "Sorting",
      path: "/resources/dsa/sorting",
    },
  ],
},
    {
  title: "Interview Resources",
  items: [
    {
      name: "HR Questions",
      path: "/resources/interview/hr-questions",
    },
    {
      name: "Technical Questions",
      path: "/resources/interview/technical-questions",
    },
    {
      name: "Self Introduction",
      path: "/resources/interview/self-introduction",
    },
    {
      name: "GD Tips",
      path: "/resources/interview/gd-tips",
    },
    {
      name: "Professional Communication Skills",
      path: "/resources/interview/communication-skills",
    },
  ],
},
    {
  title: "Career Resources",
  items: [
    {
      name: "LinkedIn Profile Optimization",
      path: "/resources/career/linkedin",
    },
    {
      name: "GitHub Portfolio Tips",
      path: "/resources/career/github",
    },
    {
      name: "Internship Preparation",
      path: "/resources/career/internship",
    },
  ],
},
  ];

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="placement-resources-page">
      <button
      className="simple-back"
      onClick={() => navigate("/")}
    >
      ← Back
    </button>
      <div className="resources-hero">
        <h1>
          Placement <span>Resources</span>
        </h1>

        <p>
          Explore important preparation resources for aptitude, DSA, interviews
          and career development.
        </p>
      </div>

      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div
            className={
              activeCard === index
                ? "resource-card active-resource-card"
                : "resource-card"
            }
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <div className="resource-card-header">
              <h2>{resource.title}</h2>
              <span>{activeCard === index ? "−" : "+"}</span>
            </div>

            <div
              className={
                activeCard === index
                  ? "resource-content open"
                  : "resource-content"
              }
            >
              {resource.items.map((item, i) =>
                typeof item === "string" ? (
                  <p key={i}>{item}</p>
                ) : (
                  <Link
                    key={i}
                    to={item.path}
                    className="resource-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}