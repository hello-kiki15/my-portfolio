import React from 'react';

const About = () => {
  return (
    <section id="about" className="about centered-about">
      <h2 className="about-title">Hi, I’m Krisha Maharjan</h2>
      <p className="about-subtitle">A frontend enthusiast who believes in clean code, beautiful UI, and human-focused design.</p>

      <div className="mini-cards">
        <div className="mini-card">
          <span>💡</span>
          <h3>Creative Thinker</h3>
          <p>I love transforming rough ideas into real experiences.</p>
        </div>

        <div className="mini-card">
          <span>📚</span>
          <h3>Lifelong Learner</h3>
          <p>I’m always exploring — design systems, new libraries, or UX trends.</p>
        </div>

        <div className="mini-card">
          <span>💻</span>
          <h3>Code Lover</h3>
          <p>React is my playground, and good UI is my language.</p>
        </div>
      </div>

      <div className="glass-quote">
        <p>"Pixels matter. People matter more."</p>
      </div>

    </section>
  );
};

export default About;
