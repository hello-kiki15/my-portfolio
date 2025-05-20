import { FaCode, FaUsers, FaCheckCircle } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      title: 'Technical Skills',
      icon: <FaCode size={24} />,
      items: ['React.js','HTML5, CSS3, JavaScript','Python','Java','Flutter (Dart)','GitHub','Postman (API Testing)','SQL / MySQL ','Figma (UI/UX Design)','Responsive Design',],
    },
    {
      title: 'Soft Skills',
      icon: <FaUsers size={24} />,
      items: ['Communication', 'Teamwork', 'Creativity', 'Problem-Solving', 'Time Management','Critical Thinking','Attention to Detail','Conflict Resolution','Self-Motivation'],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skill Set</h2>
      <p className="skills-subtitle">A blend of code, creativity, and collaboration.</p>

      <div className="skill-card-wrapper">
        {skills.map((category, index) => (
          <div className="skill-card clean-card" key={index}>
            <div className="card-header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <ul>
              {category.items.map((skill, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="check-icon" /> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
