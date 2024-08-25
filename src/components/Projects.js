import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    { title: 'Decentralized Multi-Agent Task Allocation System ', description: 'Developed a decentralized multi-agent task allocation system that dynamically assigns tasks based on agent battery life and travel time optimization, enhancing operational efficiency. Innovated a battery-aware task allocation approach, significantly improving system longevity and performance in prolonged operations by considering agents battery status. Implemented real-time algorithms for optimal task-agent pairing, ensuring efficient task allocation, reducing completion time, and designing a scalable system applicable to various contexts like logistics and manufacturing.', link: 'https://github.com/shailendrasekhar' },
    { title: 'Autonomous Maze Navigation using SLAM', description: 'Developed 3D SLAM algorithms (Gmapping, Cartographer, and Hector SLAM) to build dynamic visual maps of indoor mazes in changing environments to track the position of a robot. Integrated motion control algorithms with reactive pathfinding techniques employing left-hand rule & right-hand rule, enabling autonomous navigation of waypoints. Optimized robot route planning & movement.', link: 'https://github.com/shailendrasekhar' },
    { title: 'Formula 1 Race Winners Predictor', description: 'Performed data preprocessing, including cleaning and transforming a historical race dataset with over 10,000 observations and 70+ variables, achieving 99.99% data integrity accuracy. Extracted and engineered key features from raw datasets, identifying influential factors that enhanced model performance by 15%. Calibrated and optimized 6 machine learning models (e.g., Decision Tree, Random Forest, KNN, SVM), achieving a best-in-class predictive accuracy of 93% and an overall precision of 87%.', link: 'https://github.com/shailendrasekhar' },
    { title: 'Comparative Analysis of Different Deep Reinforcement Learning Algorithms', description: 'Built and trained different value-based reinforcement learning agents to master the game Freeway. An in-depth performance analysis of Q-learning, Deep Q-learning, Double Deep Q-learning, and Duelling Double Deep Q-learning was done to understand the difference in learning between these methods. Almost all the models achieved a 90%+ success rate for this particular environment.', link: 'https://github.com/shailendrasekhar' },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
