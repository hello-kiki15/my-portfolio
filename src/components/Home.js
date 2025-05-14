// Home.js
import React from 'react';

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome!</h1>
        <p>I'm glad you're here. Let's get to know me better.</p>
        <button className="home-btn" onClick={scrollToAbout}>
          About Me ↓
        </button>
      </div>
    </section>
  );
};

export default Home;
