import { Code, Briefcase, Book } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Container for Image and Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Image Section */}
          <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
            <img
              src="/Profile.jpeg"
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-lg shadow-lg object-cover"
            />
          </div>
          {/* Content Section */}
          <div className="md:w-2/3 md:pl-8">
            <div className="text-center md:text-left mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Get to know me better
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who am I?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm a passionate Full Stack Developer with over 3.2 years of experience
                in building web applications. I specialize in React, Node.js, Express, and
                modern web technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                My journey in software development began with a curiosity for creating
                things that make a difference. Today, I focus on building scalable,
                user-friendly applications that solve real-world problems.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              I enjoy bringing ideas to life through clean, efficient code and
              modern development practices.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Working with startups and enterprises has given me diverse experience
              in different domains.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Book className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm constantly learning new technologies and keeping up with industry
              best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
