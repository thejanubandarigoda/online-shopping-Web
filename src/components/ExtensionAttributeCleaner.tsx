'use client';

import { useEffect } from 'react';

export default function ExtensionAttributeCleaner() {
  useEffect(() => {
    // Remove any extension-added attributes from the html element
    const htmlElement = document.documentElement;
    
    if (htmlElement.hasAttribute('webcrx')) {
      htmlElement.removeAttribute('webcrx');
    }
    
    // Add more attribute cleanups here if needed
  }, []);

  // This component doesn't render anything
  return null;
} 