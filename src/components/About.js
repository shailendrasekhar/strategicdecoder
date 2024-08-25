import React from 'react';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          A passionate technologist with a deep interest in artificial intelligence, robotics, and decision-making systems. My journey began with a Bachelor’s degree in Electronics and Communications Engineering, where I laid the foundation for my fascination with the intricate workings of technology.
          <br /><br />
          Driven by curiosity and a desire to push the boundaries of AI, I embarked on an enriching internship at the National University of Singapore. There, I delved into the world of artificial neural networks and Big Data, collaborating with Hewlett Packard on cutting-edge research that fueled my enthusiasm for advanced technologies.
          <br /><br />
          Building on this experience, I pursued a Master’s degree in Artificial Intelligence, where I immersed myself in the study of Logic AI, Machine Learning, Deep Learning, Reinforcement Learning, and the ethical implications of AI in human decision-making. My academic journey also extended to the exciting realms of robotics and multi-robot systems, where I explored the potential of AI to revolutionize the way machines interact with their environment.
          <br /><br />
          My research focused on a crucial aspect of AI: building knowledge transfer frameworks for robotic decision-making. Specifically, I worked on transforming opaque black-box neural networks into transparent behavior trees, paving the way for more understandable and trustworthy AI systems.
          <br /><br />
          Throughout my career, I have sought to bridge the gap between complex AI models and practical, real-world applications. My work is driven by a commitment to innovation, and I am constantly exploring new ways to leverage AI for meaningful impact.
          <br /><br />
          When I’m not immersed in the world of technology, you might find me adventuring in nature, feeding my curiosity through books, or seeking new experiences that challenge the mind and spirit.
          <br /><br />
          I invite you to join me on this journey as we explore the future of AI and its limitless possibilities.
        </p>
        <div className="about-logos">
          <img src="https://facts.net/wp-content/uploads/2023/09/18-astonishing-facts-about-national-university-of-singapore-nus-1695570631.jpg" alt="National University of Singapore" className="about-logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png" alt="Hewlett Packard" className="about-logo" />
        </div>
      </div>
    </section>
  );
}

export default About;
