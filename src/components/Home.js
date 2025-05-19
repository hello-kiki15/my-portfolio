// Home.js
import React from 'react';
import { useEffect } from 'react';

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const homeContent = document.querySelector('.home-content');
    homeContent.classList.add('fade-in');
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm <span className="highlighted-name">Krisha Maharjan</span></h1>
        <h2 className="typewriter">Frontend Developer | UX Enthusiast | Lifelong Learner</h2>
        <p>Crafting elegant solutions with clean code and pixel-perfect designs.</p>
        <button className="home-btn" onClick={scrollToAbout}>
          Get to know me ↓
        </button>
      </div>
    </section>
  );
};

export default Home;
