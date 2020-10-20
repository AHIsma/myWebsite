import React from 'react';
import Navigation from '../Components/Navigation';
import ProjectList from '../Components/portfolio/ProjectList';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Navigation />
      <ProjectList />
    </div>
  );
};

export default Portfolio;