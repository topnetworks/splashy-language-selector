
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EnglishPage = () => {
  useEffect(() => {
    document.title = "English Version";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-green-400 p-4">
      <motion.div 
        className="language-container p-8 rounded-2xl max-w-md text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-3xl font-light mb-4 splash-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Welcome!
        </motion.h1>
        <motion.p 
          className="text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          This is the English version of the website.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link to="/" className="inline-block px-6 py-3 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg text-gray-800 hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30">
            Back to Language Selection
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnglishPage;
