import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

// Enhanced Northern Lights animations
const styles = {
  animations: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
    .animate-slide-up { animation: slideUp 0.6s ease-out forwards; }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }

    /* Enhanced Stars with Individual Twinkles */
    @keyframes twinkle1 {
      0%, 100% { opacity: 0.3; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1.2); }
    }

    @keyframes twinkle2 {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      25% { opacity: 1; transform: scale(1.3); }
      75% { opacity: 0.2; transform: scale(0.9); }
    }

    @keyframes twinkle3 {
      0%, 100% { opacity: 0.4; transform: scale(0.9); }
      33% { opacity: 0.8; transform: scale(1.1); }
      66% { opacity: 1; transform: scale(1.4); }
    }

    @keyframes starFloat {
      0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
      25% { transform: translateY(-15px) translateX(10px) rotate(90deg); }
      50% { transform: translateY(-5px) translateX(-8px) rotate(180deg); }
      75% { transform: translateY(-20px) translateX(15px) rotate(270deg); }
      100% { transform: translateY(0px) translateX(0px) rotate(360deg); }
    }

    .stars-layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .star {
      position: absolute;
      background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, transparent 70%);
      border-radius: 50%;
      filter: drop-shadow(0 0 6px rgba(255,255,255,0.8));
    }

    .star-small {
      width: 2px;
      height: 2px;
      animation: twinkle1 3s infinite ease-in-out, starFloat 25s infinite linear;
    }

    .star-medium {
      width: 3px;
      height: 3px;
      animation: twinkle2 4s infinite ease-in-out, starFloat 35s infinite linear;
    }

    .star-large {
      width: 4px;
      height: 4px;
      animation: twinkle3 5s infinite ease-in-out, starFloat 45s infinite linear;
    }

    /* Enhanced Northern Lights - Semi-Transparent */
    @keyframes aurora1 {
      0% {
        transform: translateX(-100%) translateY(0%) scale(1) rotate(-5deg);
        opacity: 0.25;
      }
      25% {
        transform: translateX(-20%) translateY(-15%) scale(1.3) rotate(2deg);
        opacity: 0.5;
      }
      50% {
        transform: translateX(40%) translateY(-8%) scale(1.1) rotate(-3deg);
        opacity: 0.35;
      }
      75% {
        transform: translateX(80%) translateY(-20%) scale(1.4) rotate(4deg);
        opacity: 0.6;
      }
      100% {
        transform: translateX(120%) translateY(0%) scale(1) rotate(-5deg);
        opacity: 0.25;
      }
    }

    @keyframes aurora2 {
      0% {
        transform: translateX(120%) translateY(-10%) scale(1.2) rotate(3deg);
        opacity: 0.15;
      }
      25% {
        transform: translateX(60%) translateY(-25%) scale(1) rotate(-2deg);
        opacity: 0.35;
      }
      50% {
        transform: translateX(10%) translateY(-5%) scale(1.5) rotate(4deg);
        opacity: 0.25;
      }
      75% {
        transform: translateX(-40%) translateY(-18%) scale(1.1) rotate(-1deg);
        opacity: 0.4;
      }
      100% {
        transform: translateX(-120%) translateY(-10%) scale(1.2) rotate(3deg);
        opacity: 0.15;
      }
    }

    @keyframes aurora3 {
      0% {
        transform: translateX(-80%) translateY(-5%) scale(1.1) rotate(2deg);
        opacity: 0.2;
      }
      33% {
        transform: translateX(0%) translateY(-30%) scale(1.4) rotate(-4deg);
        opacity: 0.45;
      }
      66% {
        transform: translateX(70%) translateY(-12%) scale(1.2) rotate(3deg);
        opacity: 0.3;
      }
      100% {
        transform: translateX(140%) translateY(-5%) scale(1.1) rotate(2deg);
        opacity: 0.2;
      }
    }

    .northern-lights {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      pointer-events: none;
      overflow: hidden;
    }

    .aurora-layer {
      position: absolute;
      width: 150%;
      height: 80%;
      top: 10%;
      left: -25%;
    }

    .aurora-wave {
      position: absolute;
      width: 100%;
      height: 100%;
      filter: blur(60px);
      border-radius: 50%;
      mix-blend-mode: screen;
    }

    .aurora-green {
      background: radial-gradient(ellipse 80% 60% at 50% 50%, 
        rgba(0, 255, 150, 0.25) 0%, 
        rgba(50, 255, 200, 0.15) 30%, 
        rgba(100, 255, 180, 0.1) 60%, 
        transparent 100%);
      animation: aurora1 20s infinite ease-in-out;
    }

    .aurora-blue {
      background: radial-gradient(ellipse 70% 50% at 60% 40%, 
        rgba(0, 150, 255, 0.2) 0%, 
        rgba(100, 200, 255, 0.12) 40%, 
        rgba(150, 220, 255, 0.08) 70%, 
        transparent 100%);
      animation: aurora2 25s infinite ease-in-out;
      animation-delay: -8s;
    }

    .aurora-purple {
      background: radial-gradient(ellipse 90% 40% at 40% 60%, 
        rgba(200, 100, 255, 0.15) 0%, 
        rgba(150, 150, 255, 0.1) 35%, 
        rgba(180, 200, 255, 0.05) 65%, 
        transparent 100%);
      animation: aurora3 30s infinite ease-in-out;
      animation-delay: -15s;
    }

    .aurora-cyan {
      background: radial-gradient(ellipse 60% 70% at 70% 30%, 
        rgba(0, 255, 200, 0.2) 0%, 
        rgba(50, 255, 255, 0.12) 45%, 
        rgba(100, 200, 255, 0.08) 75%, 
        transparent 100%);
      animation: aurora1 35s infinite ease-in-out;
      animation-delay: -20s;
    }

    /* Floating particles */
    @keyframes particleFloat {
      0% {
        transform: translateY(100vh) translateX(0px) scale(0);
        opacity: 0;
      }
      10% {
        opacity: 1;
        transform: translateY(90vh) translateX(20px) scale(1);
      }
      90% {
        opacity: 1;
        transform: translateY(10vh) translateX(-20px) scale(1);
      }
      100% {
        transform: translateY(-10vh) translateX(0px) scale(0);
        opacity: 0;
      }
    }

    .aurora-particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .particle {
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      filter: blur(1px);
      animation: particleFloat 15s infinite linear;
    }

    /* Gradient background */
    .aurora-bg {
      background: hsl(var(--border) 217.2 32.6% 17.5%);
    }

    /* Button and card styles remain unchanged */
    .btn-corporate { /* ... same as before ... */ }
    .btn-corporate:hover { /* ... same as before ... */ }
    .hover-lift { /* ... */ }
    .hover-lift:hover { /* ... */ }
    .card-elevated { /* ... */ }
    .bg-gradient-emerald { /* ... */ }
    .bg-gradient-electric { /* ... */ }
    .text-corporate-primary { /* ... */ }
    .text-corporate-secondary { /* ... */ }
    .text-muted-foreground { /* ... */ }
  `
};


const StyleTag = () => <style>{styles.animations}</style>;

const Hero = () => {
  const [stars, setStars] = useState([]);
  const [particles, setParticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = "Lee Maalgraaff";

  useEffect(() => {
    const starArray = [];
    for (let i = 0; i < 120; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() > 0.7 ? "large" : Math.random() > 0.4 ? "medium" : "small",
        delay: Math.random() * 5
      });
    }
    setStars(starArray);

    const particleArray = [];
    for (let i = 0; i < 30; i++) {
      particleArray.push({ id: i, x: Math.random() * 100, delay: Math.random() * 15 });
    }
    setParticles(particleArray);

    setIsLoaded(true);
    setShowTypewriter(true);
  }, []);

  useEffect(() => {
    if (showTypewriter) {
      const timer = setInterval(() => {
        if (!isDeleting) {
          if (displayedText.length < fullName.length) {
            setDisplayedText(fullName.substring(0, displayedText.length + 1));
          } else {
            // Wait for 2 seconds before starting to delete
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length === 0) {
            setIsDeleting(false);
          } else {
            setDisplayedText(fullName.substring(0, displayedText.length - 1));
          }
        }
      }, isDeleting ? 50 : 100); // Faster deletion, slower typing

      return () => clearInterval(timer);
    }
  }, [showTypewriter, isDeleting, displayedText, fullName]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "#";
    link.download = "Lee_Maalgraaff_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isLoaded) return null;

  return (
    <>
      <StyleTag />
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden aurora-bg">
        {/* Stars */}
        <div className="stars-layer">
          {stars.map((s) => (
            <div key={s.id} className={`star star-${s.size}`} style={{ left: `${s.x}%`, top: `${s.y}%`, animationDelay: `${s.delay}s` }} />
          ))}
        </div>

        {/* Particles */}
        <div className="aurora-particles">
          {particles.map((p) => (
            <div key={p.id} className="particle" style={{ left: `${p.x}%`, animationDelay: `${p.delay}s` }} />
          ))}
        </div>

        {/* Aurora */}
        <div className="northern-lights">
          <div className="aurora-layer"><div className="aurora-wave aurora-green"></div></div>
          <div className="aurora-layer"><div className="aurora-wave aurora-blue"></div></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="relative">
              <div className="absolute top-2 left-2 w-80 h-80 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }} />
              <div className="absolute top-1 left-1 w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg opacity-0 animate-slide-up" style={{ animationDelay: "0.4s" }} />
              <div className="relative w-80 h-80 card-elevated rounded-lg overflow-hidden opacity-0 animate-slide-up group" style={{ animationDelay: "0.5s" }}>
                <img src={profileImage} alt="Lee Maalgraaff - Software Developer" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="text-center lg:text-left opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-2">
              <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-blue-400">
                {displayedText}
              </span>
              {showTypewriter && displayedText.length < fullName.length && <span className="animate-pulse">|</span>}
            </h1>
            <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <p className="text-2xl lg:text-3xl text-gray-300 font-semibold">Software Developer</p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto lg:mx-0 mt-4 rounded-full" />
            </div>
            <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <p className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Crafting elegant solutions through innovative software development. Passionate about creating exceptional digital experiences with cutting-edge technologies.
              </p>
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
              <button onClick={handleDownloadResume} className="btn-corporate group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
