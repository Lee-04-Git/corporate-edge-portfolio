import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const criticalImages = [
      '/src/assets/profile-image.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Optimize third-party scripts loading
    const optimizeScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[data-optimize]');
      scripts.forEach(script => {
        script.setAttribute('defer', '');
      });
    };

    // Run after initial render
    setTimeout(optimizeScripts, 100);

    // Cleanup
    return () => {
      criticalImages.forEach(src => {
        const existingLink = document.querySelector(`link[href="${src}"]`);
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      });
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;