import React from 'react';

function Skills() {
  const skills = [
    { name: 'GITAM', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Gandhi_Institute_of_Technology_and_Management_logo.jpg' },
    { name: 'UGA', logo: 'https://brand.uga.edu/wp-content/uploads/Templates_CircleLogo_FC-300x300.png' },
  ];

  return (
    <section id="skills">
      <h2>Education</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
