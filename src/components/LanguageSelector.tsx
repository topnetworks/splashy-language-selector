
import React from 'react';
import { motion } from 'framer-motion';

const LanguageSelector = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-br from-blue-400 to-green-400 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/1af3ac86-8ad2-4f02-811c-8c4468b591c3.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content container with glassmorphism effect */}
      <motion.div
        className="language-container relative z-10 p-8 rounded-2xl w-[90%] max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.19, 1, 0.22, 1],
          delay: 0.2
        }}
      >
        <motion.h1 
          className="splash-heading text-xl md:text-2xl font-normal text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.19, 1, 0.22, 1], 
            delay: 0.5 
          }}
        >
          Escoge tu país / Choose your country:
        </motion.h1>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Spanish flag */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.19, 1, 0.22, 1], 
              delay: 0.7 
            }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center"
          >
            <a href="https://topfinanzas.com/mx" className="block w-full">
              <div className="flag-container rounded-lg overflow-hidden aspect-video shadow-md" style={{ transform: 'scale(0.7)' }}>
                <img 
                  src="/lovable-uploads/9338d6ac-8a45-43f4-8438-fe275c8d16a9.png" 
                  alt="Mexico Flag" 
                  className="flag-image w-full h-full object-cover"
                />
              </div>
              <p className="mt-0 text-center font-medium text-gray-800">Español</p>
            </a>
          </motion.div>
          
          {/* English flag */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.19, 1, 0.22, 1], 
              delay: 0.8 
            }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center"
          >
            <a href="https://us.topfinanzas.com" className="block w-full">
              <div className="flag-container rounded-lg overflow-hidden aspect-video shadow-md" style={{ transform: 'scale(0.7)' }}>
                <img 
                  src="/lovable-uploads/058b89ca-0cec-466d-ade9-9053c68f3271.png" 
                  alt="USA Flag" 
                  className="flag-image w-full h-full object-cover"
                />
              </div>
              <p className="mt-0 text-center font-medium text-gray-800">English</p>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageSelector;
