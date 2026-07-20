import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./StudentProfile.css";

export default function StudentProfile() {
  const loggedUser = JSON.parse(localStorage.getItem("user")) || {};

  const profileKey = useMemo(() => {
    return `studentProfile_${loggedUser.email || loggedUser._id || "guest"}`;
  }, [loggedUser.email, loggedUser._id]);

  const savedProfile = JSON.parse(localStorage.getItem(profileKey));

  const emptyProfile = {
    profileImage: "",
    name: loggedUser.name || "",
    email: loggedUser.email || "",
    phone: "",
    college: "",
    branch: "",
    year: "",
    cgpa: "",
    skills: "",
    projects: "",
    certifications: "",
    internship: "",
    role: "",
    location: "",
    expectedPackage: "",
  };

  const [isEditing, setIsEditing] = useState(!savedProfile);
  const [form, setForm] = useState(savedProfile || emptyProfile);

  useEffect(() => {
    if (!savedProfile) {
      setForm(emptyProfile);
    }
  }, []);

  const getCompletion = () => {
    const fields = [
      form.name,
      form.email,
      form.phone,
      form.college,
      form.branch,
      form.year,
      form.cgpa,
      form.skills,
      form.projects,
      form.certifications,
      form.role,
      form.location,
    ];

    const filled = fields.filter((item) => item && item.trim() !== "").length;
    return Math.round((filled / fields.length) * 100);
  };

  const completion = getCompletion();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, profileImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem(profileKey, JSON.stringify(form));
    setIsEditing(false);
    alert("Profile saved successfully!");
  };

  return (
    <div className="sp-profile-page">
      <div className="sp-profile-top">
        <Link to="/student/dashboard" className="sp-back-link">
          ← Back to Dashboard
        </Link>

        <button
          type="button"
          className={isEditing ? "sp-edit-btn cancel" : "sp-edit-btn"}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <section className="sp-profile-header">
        <div className="sp-photo-section">
          <div className="sp-photo">
            {form.profileImage ? (
              <img src={form.profileImage} alt="Profile" />
            ) : (
              <span>{form.name ? form.name.charAt(0).toUpperCase() : "S"}</span>
            )}
          </div>

          {isEditing && (
            <label className="sp-upload-btn">
              Upload Photo
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </label>
          )}
        </div>

        <div className="sp-user-info">
          <h1>{form.name || "Complete Your Profile"}</h1>
          <p>{form.email || "Email not available"}</p>

          <div className="sp-tags">
            <span>{form.branch || "Branch not added"}</span>
            <span>{form.year || "Year not added"}</span>
            <span>CGPA: {form.cgpa || "Not added"}</span>
          </div>
        </div>

        <div className="sp-completion">
          <h2>{completion}%</h2>
          <p>Profile Complete</p>

          <div className="sp-progress">
            <div style={{ width: `${completion}%` }}></div>
          </div>
        </div>
      </section>

      <form className="sp-profile-form" onSubmit={handleSave}>
        <section className="sp-card">
          <h2>Personal Information</h2>

          <div className="sp-grid">
            <div className="sp-field">
              <label>Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Enter full name"
              />
            </div>

            <div className="sp-field">
              <label>Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                disabled
                placeholder="Email"
              />
            </div>

            <div className="sp-field">
              <label>Mobile Number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Enter mobile number"
              />
            </div>

            <div className="sp-field">
              <label>College Name</label>
              <input
                name="college"
                value={form.college}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Enter college name"
              />
            </div>

            <div className="sp-field">
              <label>Branch</label>
              <select
                name="branch"
                value={form.branch}
                onChange={handleChange}
                disabled={!isEditing}
              >
                <option value="">Select Branch</option>
                <option>AI & DS</option>
                <option>Computer Engineering</option>
                <option>Information Technology</option>
                <option>ENTC</option>
                <option>Mechanical</option>
                <option>Civil</option>
              </select>
            </div>

            <div className="sp-field">
              <label>Year</label>
              <select
                name="year"
                value={form.year}
                onChange={handleChange}
                disabled={!isEditing}
              >
                <option value="">Select Year</option>
                <option>First Year</option>
                <option>Second Year</option>
                <option>Third Year</option>
                <option>Final Year</option>
              </select>
            </div>

            <div className="sp-field">
              <label>CGPA</label>
              <input
                name="cgpa"
                value={form.cgpa}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Enter CGPA"
              />
            </div>
          </div>
        </section>

        <section className="sp-card">
          <h2>Skills & Projects</h2>

          <div className="sp-field">
            <label>Technical Skills</label>
            <textarea
              name="skills"
              value={form.skills}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Example: Java, Python, React, Node.js, MongoDB"
            />
          </div>

          <div className="sp-field">
            <label>Projects</label>
            <textarea
              name="projects"
              value={form.projects}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Example: PlacementPrep Hub - MERN stack placement preparation platform"
            />
          </div>
        </section>

        <section className="sp-card">
          <h2>Certifications & Internship</h2>

          <div className="sp-field">
            <label>Certifications</label>
            <textarea
              name="certifications"
              value={form.certifications}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Example: AWS Cloud Basics, Python Certification"
            />
          </div>

          <div className="sp-field">
            <label>Internship / Experience</label>
            <textarea
              name="internship"
              value={form.internship}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Example: AI/ML Intern - Company Name"
            />
          </div>
        </section>

        <section className="sp-card">
          <h2>Career Preferences</h2>

          <div className="sp-grid">
            <div className="sp-field">
              <label>Interested Role</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                disabled={!isEditing}
              >
                <option value="">Select Role</option>
                <option>Full Stack Developer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Software Developer</option>
                <option>Data Analyst</option>
                <option>AI/ML Engineer</option>
                <option>Cloud Engineer</option>
              </select>
            </div>

            <div className="sp-field">
              <label>Preferred Location</label>
              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                disabled={!isEditing}
              >
                <option value="">Select Location</option>
                <option>Pune</option>
                <option>Nashik</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="sp-field">
              <label>Expected Package</label>
              <select
                name="expectedPackage"
                value={form.expectedPackage}
                onChange={handleChange}
                disabled={!isEditing}
              >
                <option value="">Select Package</option>
                <option>3 - 5 LPA</option>
                <option>5 - 8 LPA</option>
                <option>8 - 12 LPA</option>
                <option>12+ LPA</option>
              </select>
            </div>
          </div>
        </section>

        <section className="sp-card sp-resume-card">
          <div>
            <h2>Resume Upload</h2>
            <p>Upload latest ATS-friendly resume in PDF format.</p>
          </div>

          <label className="sp-resume-btn">
            Upload Resume
            <input type="file" accept=".pdf" disabled={!isEditing} />
          </label>
        </section>

        {isEditing && (
          <button className="sp-save-btn" type="submit">
            Save Profile
          </button>
        )}
      </form>
    </div>
  );
}