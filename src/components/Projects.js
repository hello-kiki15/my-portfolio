import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Creative Work</h2>

      <p className="projects-intro">
        Throughout my academic journey, I've worked on multiple diverse projects that reflect both my technical skills and creativity. 
        Here are some of the projects I've developed:
      </p>

      <div className="project-cards">
        <div className="project-card">
          <h3>🏨 Hotel Booking and Management System</h3>
          <p>
            Built using <strong>Java</strong>, this project includes form input handling and validation. 
            Emphasized user interaction logic and usability testing.
          </p>
        </div>

        <div className="project-card">
          <h3>🚖 Taxi Booking System</h3>
          <p>
            A <strong>Python</strong>-based functional booking system with edge-case handling and basic UI validation 
            to ensure consistent user input.
          </p>
        </div>

        <div className="project-card">
          <h3>📝 To-Do List Web App</h3>
          <p>
            Developed with <strong>React.js</strong>, featuring a clean and mobile-friendly UI, interactive task handling, 
            and responsive design manually tested across devices.
          </p>
        </div>

        <div className="project-card">
          <h3>📱 Mobile Application</h3>
          <p>
            Created a cross-platform app using <strong>Flutter</strong>, offering a responsive and feature-rich user experience. 
            Performed layout and feature usability tests on Android devices.
          </p>
        </div>
      </div>

      <div className="external-links">
        <a className="fancy-btn github" href="https://github.com/hello-kiki15" target="_blank" rel="noopener noreferrer">
          💼 View My GitHub
        </a>
        <a className="fancy-btn figma" href="https://www.figma.com/design/ybVc1EH3fAqwOivTJXD5gL/Newari-Feast-and-Festivals?node-id=0-1&t=QLoESsGZ3rcMGsWc-1" target="_blank" rel="noopener noreferrer">
          🎨 View My Figma Designs
        </a>
      </div>
    </section>
  );
};

export default Projects;
