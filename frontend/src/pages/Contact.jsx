import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import contactBanner from "../assets/contact-banner.png";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How can I access placement resources?",
      answer:
        "Go to Explore menu and click on Placement Resources. You can access aptitude resources, DSA resources, interview resources and career resources.",
    },
    {
      question: "How does AI feedback work?",
      answer:
        "After you complete mock interviews or aptitude tests, the platform analyzes your performance and shows strengths, weak areas and improvement suggestions.",
    },
    {
      question: "How can I track my weekly reports?",
      answer:
        "Open Weekly Reports from the Features menu. It shows your attempted tests, score, topics practiced and progress details.",
    },
    {
      question: "How can I prepare for mock interviews?",
      answer:
        "Use the Mock Interviews feature, practice HR and technical questions, and review your feedback after every attempt.",
    },
    {
      question: "Is my data secure on this platform?",
      answer:
        "Your data is stored securely and used only for your placement preparation features such as reports, feedback and practice progress.",
    },
    {
      question: "How can I suggest a new feature?",
      answer:
        "You can submit your idea through this contact form by selecting a proper subject and writing your suggestion in the message box.",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axiosInstance.post("/api/contact", formData);

      alert("Thank you! Your message has been submitted.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <img src={contactBanner} alt="Contact Banner" />

        <div className="contact-overlay">
          <span>WE ARE HERE TO HELP</span>

          <h1>Contact Us</h1>

          <p>
            Need help with placements, interviews, or aptitude preparation?
  We're here for you.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="help-panel">
          <h2>We’re Here to Help</h2>
          <div className="underline"></div>

          <p className="help-desc">
            Whether you have a question, need guidance, or want to share
            feedback, our team is ready to assist you.
          </p>

          <div className="help-card">
            <div className="help-icon">🎧</div>
            <div>
              <h3>Placement Guidance</h3>
              <p>Get help with aptitude, interviews and placement preparation.</p>
            </div>
          </div>

          <div className="help-card">
            <div className="help-icon">📄</div>
            <div>
              <h3>Platform Support</h3>
              <p>Learn how to use features and make the most of the platform.</p>
            </div>
          </div>

          <div className="help-card">
            <div className="help-icon">⚙️</div>
            <div>
              <h3>Technical Issues</h3>
              <p>Report bugs or any technical problems you face.</p>
            </div>
          </div>

          <div className="help-card">
            <div className="help-icon">💬</div>
            <div>
              <h3>Feedback & Suggestions</h3>
              <p>
                Share your ideas and suggestions to improve Smart Placement Hub.
              </p>
            </div>
          </div>
        </div>

        <form className="message-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <p>Please fill out the form and we will get back to you.</p>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          <p className="privacy-text">
            🔒 We respect your privacy. Your information is safe with us.
          </p>
        </form>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-line"></div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              className="faq-item"
              key={index}
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <b>{openFAQ === index ? "−" : "+"}</b>
              </div>

              {openFAQ === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="contact-cta">
        <div>
          <h2>Still have questions?</h2>
          <p>Our platform is here to help you anytime.</p>
        </div>

        <a href="/register">Get Started →</a>
      </section>
    </div>
  );
}