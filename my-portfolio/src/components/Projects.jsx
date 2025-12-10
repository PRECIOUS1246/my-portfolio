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
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.title} className="project">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} aria-label={`View ${p.title}`}>
              View
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;