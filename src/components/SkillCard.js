import React from 'react';
import { Code } from 'lucide-react';

const SkillCard = ({ skill }) => {
  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="flex items-center">
        <Code size={24} className="mr-2" /> {/* You can customize this based on the skill */}
        <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
      </div>
      <span className={`${getLevelColor(skill.level)} text-sm font-medium px-2.5 py-0.5 rounded`}>
        {skill.level}
      </span>
      {skill.description && (
        <p className="text-gray-600 mt-2">{skill.description}</p>
      )}
    </div>
  );
};

export default SkillCard;
