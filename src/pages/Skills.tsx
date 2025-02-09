import React from 'react';

const skills = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Next.js', level: 80 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MongoDB', level: 80 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'CI/CD', level: 80 },
  ],
};

export default function Skills() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="space-y-16">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Frontend Development
            </h3>
            <div className="space-y-4">
              {skills.frontend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Backend Development
            </h3>
            <div className="space-y-4">
              {skills.backend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tools & Technologies
            </h3>
            <div className="space-y-4">
              {skills.tools.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}