import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
      <img 
        src={project.image || "/api/placeholder/400/200"} 
        alt={project.title} 
        className="w-full h-48 object-cover"
        loading="lazy" // Adds a loading attribute
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies && project.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-blue-200 text-sm font-medium px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              <ExternalLink size={18} className="mr-1" /> Live Demo
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 hover:underline flex items-center"
            >
              <Code size={18} className="mr-1" /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
