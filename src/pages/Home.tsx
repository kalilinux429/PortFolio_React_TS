
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypingEffect from './TypeEffect';
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="text-blue-600 dark:text-green-700">Suchit Kapale</span>
        </h1>
        <div className='flex justify-center items-center h-100'><img 
      src='/Profile.jpeg'
      alt='profile_img'
      className="w-[150px] h-[150px] rounded-[50%] border-2 border-white object-cover"
    />
    </div>
        <p className="text-xl sm:text-2xl text-green-600 dark:text-green-300 mb-8">
         <TypingEffect />
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-100 mb-12 max-w-2xl mx-auto">
          I build exceptional digital experiences that combine clean code with 
          beautiful designs. Let's work together to bring your ideas to life.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/kalilinux429"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/suchit-kapale/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}