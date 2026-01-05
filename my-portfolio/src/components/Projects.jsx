const projects = [
  {
    title: "Chat App",
    description: "A real-time chat app using React and Firebase.",
    link: "#",
  },
  {
    title: "TRIVIA GAME",
    description: "A trivia game app using html,css and javascript.",
    link: "https://trivia-quiz-d44i.onrender.com",
  },
  {
    title: "Portfolio Site",
    description: "My personal portfolio built with React and css.",
    link: "https://personal-portfolio-v1qv.onrender.com",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <p className="projects-subtitle">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <h3>{p.title}</h3>
              <p className="project-description">{p.description}</p>
              <a 
                href={p.link} 
                aria-label={`View ${p.title}`}
                className="project-link"
              >
                View Project
                <span className="project-link-arrow">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;