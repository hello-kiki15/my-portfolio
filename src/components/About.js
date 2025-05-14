// About.js (React Component)
import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/path/to/your-photo.jpg" alt="Your Name" />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hi, I'm [Your Name], a passionate <span className="highlight">Web Developer</span> and <span className="highlight">UX/UI Designer</span> based in [Your Location]. With a strong background in front-end development, I specialize in creating beautiful and functional user interfaces. 
            I'm always excited to learn new technologies and find creative solutions to design challenges. Outside of coding, I love [Your Hobbies/Interests] and enjoy collaborating on exciting projects!
          </p>
          <a href="#contact" className="about-btn">Let's Connect</a>
        </div>
      </div>
    </section>
  );
};

export default About;
