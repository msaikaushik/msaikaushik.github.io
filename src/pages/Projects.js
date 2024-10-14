import React from 'react';
import ProjectGrid from '../components/ProjectGrid';
import projectsData from '../data/projects';

const Projects = () => {
  return (
    <div className="container mx-auto px-8 py-12 bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">My Projects</h1>
      <ProjectGrid projects={projectsData} />
    </div>
  );
};

export default Projects;
