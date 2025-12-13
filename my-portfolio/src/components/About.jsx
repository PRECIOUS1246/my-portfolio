import { FaCode, FaBriefcase, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <p className="about-text">
        I build modern, fast, responsive React applications. I am a frontend
        developer passionate about building clean, responsive, and interactive
        web applications. I enjoy working with React, Tailwind CSS, and other
        modern web technologies to create projects that are both functional and
        visually appealing.
      </p>

      <div className="info-cards">
        <div className="info-card">
          <FaCode className="info-icon" />
          <h4>Skill</h4>
          <p>Frontend developer & proficient in Microsoft Office</p>
        </div>

        <div className="info-card">
          <FaBriefcase className="info-icon" />
          <h4>Experience</h4>
          <p>4 Years</p>
        </div>

        <div className="info-card">
          <FaGraduationCap className="info-icon" />
          <h4>Education</h4>
          <p>
            OLA Senior High School <br />
            Ghana Communication Technology University
          </p>
        </div>

        <div className="info-card">
          <FaLaptopCode className="info-icon" />
          <h4>Languages</h4>
          <p>Java, C++, HTML, CSS, JavaScript, React</p>
        </div>
      </div>
    </section>
  );
}

export default About;