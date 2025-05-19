import React from 'react';

const Skills = () => {
  const skills = [
    {
      title: '💻 Technical Skills',
      items: ['React.js', 'HTML5, CSS3, JavaScript', 'Git & GitHub', 'Figma (UI/UX Design)', 'Responsive Design'],
      color: '#e0f7fa',
    },
    {
      title: '🌟 Soft Skills',
      items: ['Communication', 'Teamwork', 'Creativity', 'Problem-Solving', 'Time Management'],
      color: '#fce4ec',
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">💡 My Skill Set</h2>
      <p className="skills-subtitle">A blend of code, creativity, and collaboration.</p>

      <div className="skill-card-wrapper">
        {skills.map((category, index) => (
          <div className="skill-card" key={index} style={{ backgroundColor: category.color }}>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((skill, idx) => (
                <li key={idx}>✔️ {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a href="#projects" className="skills-btn">🚀 See My Projects</a>
    </section>
  );
};

export default Skills;
