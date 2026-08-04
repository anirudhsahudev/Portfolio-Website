import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE</h4>
                <h5>ITS Engineering College</h5>
              </div>
              <h3>2028</h3>
            </div>
            <p>
              Pursuing a Bachelor of Technology in Computer Science & Engineering,
              affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU) in Greater Noida.
              Focused on computer science core concepts, responsive frontend architectures, and performance optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Frontend & AI</h5>
              </div>
              <h3>14+</h3>
            </div>
            <p>
              Earned 14 professional certifications spanning Frontend Development, JavaScript,
              HTML5, CSS3, DSA with C, AWS Cloud Foundation, Generative AI, Gemini Certified Student,
              Yuva AI, ChatGpt for L&D, and Modern Web Technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Key Achievements</h4>
                <h5>Certified Gemini Student</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Successfully built and deployed multiple frontend web applications. Certified Gemini Student
              passionate about exploring emerging technologies, AI-assisted development, and prompt engineering to build smarter workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
