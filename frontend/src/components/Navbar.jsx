import React from 'react';
import { Sun, Moon } from 'lucide-react';

 const Navbar = ({ darkMode, setDarkMode }) => {
    return (
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">DataInsight</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Features</a>
              <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">How It Works</a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Pricing</a>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar