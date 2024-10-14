import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
      <img 
        src={project.image || "/api/placeholder/400/200"} 
        alt={project.title} 
        className="w-full h-48 object-cover"
        loading="lazy" // Adds a loading attribute
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies && project.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
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
              className="text-blue-600 hover:underline flex items-center"
            >
              <ExternalLink size={18} className="mr-1" /> Live Demo
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:underline flex items-center"
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
