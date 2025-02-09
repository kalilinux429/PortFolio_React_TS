import React from 'react';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey and achievements
          </p>
        </div>

        <div className="space-y-12">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mr-4">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.company} • {exp.duration}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-4">
                {exp.description.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-600 dark:text-gray-400 flex items-start"
                  >
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}