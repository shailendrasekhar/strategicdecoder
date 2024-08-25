import React from 'react';

function Skills() {
  const skills = [
    { name: 'Python', logo: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000' },
    { name: 'C++', logo: 'https://img.icons8.com/?size=100&id=57869&format=png&color=000000' },
    { name: 'Pandas', logo: 'https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000' },
    { name: 'NumPy', logo: 'https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000' },
    { name: 'Scikit Learn', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ioErrXCaT2yZgsMaefs8irg9dRTWVk882Q&s' },
    { name: 'MatPlot Lib', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png' },
    { name: 'Seaborn', logo: 'https://user-images.githubusercontent.com/315810/92159303-30d41100-edfb-11ea-8107-1c5352202571.png' },
    { name: 'PyTorch', logo: 'https://img.icons8.com/?size=100&id=O6SWwpPIM0GB&format=png&color=000000' },
    { name: 'TensorFlow', logo: 'https://jrmeyer.github.io/misc/tf-logo.png' },
    { name: 'Keras', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/2048px-Keras_logo.svg.png' },
    { name: 'Kerasrl', logo: 'https://avatars.githubusercontent.com/u/1627180?s=40&v=4' },
    { name: 'Torchrl', logo: 'https://img.icons8.com/?size=100&id=111050&format=png&color=000000' },
    { name: 'OpenCV', logo: 'https://img.icons8.com/?size=100&id=bpip0gGiBLT1&format=png&color=000000' },
    { name: 'Hadoop', logo: 'https://img.icons8.com/?size=100&id=69132&format=png&color=000000' },
    { name: 'Apache', logo: 'https://img.icons8.com/?size=100&id=QI5tXddVmn1b&format=png&color=000000' },
    { name: 'SQL', logo: 'https://img.icons8.com/?size=100&id=13406&format=png&color=000000' },
    { name: 'Azure ML Studio', logo: 'https://img.icons8.com/?size=100&id=Z3gpQ9TJhj3Y&format=png&color=000000' },
    { name: 'Git', logo: 'https://img.icons8.com/?size=100&id=106562&format=png&color=000000' },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
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
