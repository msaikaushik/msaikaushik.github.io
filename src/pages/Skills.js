import React from 'react';
import SkillsGrid from '../components/SkillsGrid';

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">My Skills</h1>
      <SkillsGrid />
    </div>
  );
};

export default Skills;
