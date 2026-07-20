const calculateScore = (student, job) => {
  let score = 0;

  // CGPA Score (max 25)
  if (student.cgpa) {
    score += (student.cgpa / 10) * 25;
  }

  // Skill Match Score (max 50)
  const studentSkills = student.skills.map((s) => s.toLowerCase());
  const jobSkills = job.requiredSkills.map((s) => s.toLowerCase());

  let matched = 0;
  jobSkills.forEach((skill) => {
    if (studentSkills.includes(skill)) matched++;
  });

  const skillMatchPercent = (matched / jobSkills.length) * 100;
  score += (skillMatchPercent / 100) * 50;

  // Projects Score (max 15)
  if (student.projects && student.projects.length > 0) {
    score += Math.min(student.projects.length * 5, 15);
  }

  // Certifications Score (max 10)
  if (student.certifications && student.certifications.length > 0) {
    score += Math.min(student.certifications.length * 5, 10);
  }

  return Math.round(score);
};

module.exports = calculateScore;