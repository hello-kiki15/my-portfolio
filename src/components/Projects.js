// Projects.js
import React from 'react';

const projects = [
  {
    title: 'Newari Feast and Festivals',
    image: '/images/newafestFigma.png', 
    link: 'https://www.figma.com/file/yourfigmalink1',
    tags: ['UX Design', 'Mobile App'],
  },
  
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Creative Work</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View on Figma →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
