import React from 'react';
import ProjectGrid from '../components/ProjectGrid';
import projectsData from '../data/projects';
const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <ProjectGrid projects={projectsData} />
    </div>
  );
};

export default Projects;
