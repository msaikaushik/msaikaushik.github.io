import React from 'react';
import SkillCard from './SkillCard';
import skillsData from '../data/skills';

const SkillsGrid = () => {
  if (!skillsData || skillsData.length === 0) {
    return <p>No skills to display.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {skillsData.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsGrid;
