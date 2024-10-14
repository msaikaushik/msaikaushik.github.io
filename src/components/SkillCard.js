import React from 'react';
import { Code } from 'lucide-react';

const SkillCard = ({ skill }) => {
  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 dark:bg-green-600 text-green-800 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 dark:bg-yellow-600 text-yellow-800 dark:text-yellow-200';
      case 'advanced':
        return 'bg-red-100 dark:bg-red-600 text-red-800 dark:text-red-200';
      default:
        return 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="flex items-center">
        <Code size={24} className="mr-2 text-gray-800 dark:text-gray-100" /> {/* You can customize this based on the skill */}
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{skill.name}</h3>
      </div>
      <span className={`${getLevelColor(skill.level)} text-sm font-medium px-2.5 py-0.5 rounded`}>
        {skill.level}
      </span>
      {skill.description && (
        <p className="text-gray-600 dark:text-gray-300 mt-2">{skill.description}</p>
      )}
    </div>
  );
};

export default SkillCard;
