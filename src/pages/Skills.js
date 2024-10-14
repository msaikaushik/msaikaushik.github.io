import React from 'react';
import SkillsGrid from '../components/SkillsGrid';

const Skills = () => {
  return (
    <div className="container mx-auto px-8 py-12 bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8
                    bg-gradient-to-r bg-clip-text text-transparent
                    from-teal-600 via-green-700 to-emerald-900
                    dark:bg-gradient-to-r dark:bg-clip-text dark:text-transparent
                    dark:from-red-400 dark:via-yellow-400 dark:to-orange-500">
        My Skills
      </h1>
      <SkillsGrid />
    </div>
  );
};

export default Skills;
