import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
