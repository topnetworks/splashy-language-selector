
import React, { useEffect } from 'react';
import LanguageSelector from '../components/LanguageSelector';

const Index = () => {
  // Load animation when component mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <LanguageSelector />
    </div>
  );
};

export default Index;
