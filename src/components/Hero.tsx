import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullName = "Lee Maalgraaff";

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showTypewriter) {
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index <= fullName.length) {
          setDisplayedText(fullName.substring(0, index));
          index++;
        } else {
          clearInterval(typeTimer);
        }
      }, 150);

      return () => clearInterval(typeTimer);
    }
  }, [showTypewriter]);

  const handleDownloadResume = () => {
    // Create a mock resume download - in real implementation, this would link to actual resume
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Lee_Maalgraaff_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image Card */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            {/* Stacked Card Effect */}
            <div className="absolute top-2 left-2 w-80 h-80 bg-gradient-emerald rounded-lg opacity-20 animate-stacked-cards"></div>
            <div className="absolute top-1 left-1 w-80 h-80 bg-gradient-electric rounded-lg opacity-30 animate-stacked-cards" style={{ animationDelay: '0.1s' }}></div>
            
            {/* Main Profile Card */}
            <div className="relative w-80 h-80 card-elevated rounded-lg overflow-hidden animate-stacked-cards hover-lift group" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src={profileImage} 
                alt="Lee Maalgraaff - Software Developer"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">
          {/* Typewriter Name */}
          <div className="mb-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-corporate-primary mb-2">
              <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-primary">
                {displayedText}
              </span>
              {showTypewriter && displayedText.length < fullName.length && (
                <span className="animate-pulse">|</span>
              )}
            </h1>
          </div>

          {/* Title */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '2.5s', animationFillMode: 'both' }}>
            <p className="text-2xl lg:text-3xl text-corporate-secondary font-semibold">
              Software Developer
            </p>
            <div className="w-24 h-1 bg-gradient-electric mx-auto lg:mx-0 mt-4 rounded-full"></div>
          </div>

          {/* Description */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '3s', animationFillMode: 'both' }}>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Crafting elegant solutions through innovative software development. 
              Passionate about creating exceptional digital experiences with cutting-edge technologies.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '3.5s', animationFillMode: 'both' }}>
            <Button 
              onClick={handleDownloadResume}
              className="btn-corporate hover-glow group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;