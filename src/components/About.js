import { FaLightbulb, FaBookReader, FaCode, FaPaintBrush, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about centered-about">
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">
        I’m an IT student passionate about creating simple, user-friendly websites. I love solving problems and learning how things work behind the scenes. I focus on building useful, clear digital experiences that help people.
      </p>

      <div className="mini-cards">
        <div className="mini-card">
          <FaLightbulb className="card-icon" />
          <h3>Creative Thinker</h3>
          <p>I love transforming rough ideas into real experiences.</p>
        </div>

        <div className="mini-card">
          <FaBookReader className="card-icon" />
          <h3>Lifelong Learner</h3>
          <p>I’m always exploring — design systems, new libraries, or UX trends.</p>
        </div>

        <div className="mini-card">
          <FaCode className="card-icon" />
          <h3>Code Lover</h3>
          <p>React is my playground, and good UI is my language.</p>
        </div>

        <div className="mini-card">
          <FaPaintBrush className="card-icon" />
          <h3>UI Explorer</h3>
          <p>Design isn’t just how it looks — it’s how it feels and flows.</p>
        </div>

        <div className="mini-card">
          <FaUsers className="card-icon" />
          <h3>User First</h3>
          <p>I focus on real people — their clicks, their paths, their comfort.</p>
        </div>
      </div>

      <div className="glass-quote">
        <p>"Good design is invisible, but its impact is unforgettable."</p>
      </div>
    </section>
  );
};

export default About;
