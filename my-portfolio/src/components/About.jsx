import { useEffect, useRef } from "react";
import {
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaTools,
  FaBullseye,
} from "react-icons/fa";

function About() {

  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
   <section
  id="about"
  className="about fade-in"
  ref={aboutRef}
>
      <h2>About Me</h2>

      <p className="about-text">
        I am a frontend developer passionate about building clean, responsive,
        and interactive web applications. I specialize in React and modern web
        technologies, with a strong focus on user experience and performance.
        I enjoy turning ideas into real, functional products that look great on
        all devices.
      </p>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="info-card">
          <FaCode className="info-icon" />
          <h4>Core Skill</h4>
          <p>Frontend Development (React)</p>
        </div>

        <div className="info-card">
          <FaBriefcase className="info-icon" />
          <h4>Experience</h4>
          <p>4+ Years Learning & Building Projects</p>
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

      {/* Skills */}
      <div className="about-section">
        <h3>Technical Skills</h3>
        <p>
          React • JavaScript • HTML5 • CSS3 • Tailwind CSS • Responsive Design •
          Git & GitHub
        </p>
      </div>

      {/* Tools */}
      <div className="about-section">
        <h3>
          <FaTools /> Tools & Technologies
        </h3>
        <p>VS Code • Git • GitHub • npm • Vite • Chrome DevTools • Figma</p>
      </div>

      {/* Why Me */}
      <div className="about-section">
        <h3>Why Me?</h3>
        <ul>
          <li>✔ Clean and maintainable code</li>
          <li>✔ Mobile-first & responsive design</li>
          <li>✔ Strong attention to UI/UX</li>
          <li>✔ Fast learner & problem solver</li>
        </ul>
      </div>

      {/* Career Goal */}
      <div className="about-section">
        <h3>
          <FaBullseye /> Career Goal
        </h3>
        <p>
          I am currently seeking opportunities as a Junior Frontend Developer
          where I can contribute to real-world projects, grow my skills, and work
          with a collaborative team.
        </p>
      </div>

      {/* Call to Action */}
      <div className="about-buttons">
  <a href="Projects" className="btn primary">
    View Projects
  </a>

  <a
    href="public\cv\My_cv.pdf"
    download
    className="btn outline"
  >
    Download CV
  </a>
</div>
    </section>
  );
}

export default About;