import { useEffect, useRef, useState } from "react";

// Subtle Star Animation
const styles = `
  @keyframes twinkle1 {0%,100%{opacity:0.2;transform:scale(0.8);}50%{opacity:0.5;transform:scale(1.2);}}
  @keyframes twinkle2 {0%,100%{opacity:0.3;transform:scale(1);}25%{opacity:0.6;transform:scale(1.3);}75%{opacity:0.2;transform:scale(0.9);}}
  @keyframes twinkle3 {0%,100%{opacity:0.25;transform:scale(0.9);}33%{opacity:0.5;transform:scale(1.1);}66%{opacity:0.6;transform:scale(1.4);}}
  @keyframes starFloat {0%{transform:translateY(0px) translateX(0px) rotate(0deg);}25%{transform:translateY(-10px) translateX(5px) rotate(90deg);}50%{transform:translateY(-5px) translateX(-5px) rotate(180deg);}75%{transform:translateY(-15px) translateX(8px) rotate(270deg);}100%{transform:translateY(0px) translateX(0px) rotate(360deg);}}
  
  .stars-layer { position:absolute;top:0;left:0;width:100%;height:100%;z-index:0; pointer-events:none; }
  .star { position:absolute; background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 50%, transparent 80%); border-radius:50%; filter:drop-shadow(0 0 2px rgba(255,255,255,0.4)); }
  .star-small { width:2px;height:2px; animation: twinkle1 3s infinite ease-in-out, starFloat 20s infinite linear; }
  .star-medium { width:3px;height:3px; animation: twinkle2 4s infinite ease-in-out, starFloat 25s infinite linear; }
  .star-large { width:4px;height:4px; animation: twinkle3 5s infinite ease-in-out, starFloat 30s infinite linear; }
`;

const StyleTag = () => <style>{styles}</style>;

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Generate Stars
  useEffect(() => {
    const starArray = [];
    for (let i = 0; i < 50; i++) { // fewer, more subtle stars
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() > 0.7 ? "large" : Math.random() > 0.4 ? "medium" : "small",
        delay: Math.random() * 5
      });
    }
    setStars(starArray);
  }, []);

  const skills = [
    "JavaScript/TypeScript", "React/Next.js", "Node.js", "Python", 
    "AWS/Cloud Architecture", "Docker/Kubernetes", "PostgreSQL/MongoDB", "GraphQL/REST APIs"
  ];

  return (
    <>
      <StyleTag />
      <section ref={sectionRef} id="about" className="relative py-20 px-4 bg-transparent overflow-hidden">
        {/* Stars Background */}
        <div className="stars-layer">
          {stars.map(s => (
            <div 
              key={s.id} 
              className={`star star-${s.size}`} 
              style={{ left: `${s.x}%`, top: `${s.y}%`, animationDelay: `${s.delay}s` }} 
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-corporate-primary mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-electric mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="card-corporate p-8 rounded-lg bg-corporate-surface/30">
                <h3 className="text-2xl font-bold text-corporate-accent mb-6">Professional Overview</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over 8 years of experience in software development, I specialize in building 
                    scalable web applications and robust backend systems. My passion lies in transforming 
                    complex business requirements into elegant, efficient solutions.
                  </p>
                  <p>
                    I thrive in collaborative environments where I can leverage my technical expertise 
                    and problem-solving abilities to drive innovation. My approach combines modern 
                    development practices with a deep understanding of business needs.
                  </p>
                  <p>
                    Currently focused on full-stack development, cloud architecture, and emerging 
                    technologies that push the boundaries of what's possible in software engineering.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                  <div className="card-elevated p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">8+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="card-elevated p-4 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="card-corporate p-8 rounded-lg bg-corporate-surface/30">
                <h3 className="text-2xl font-bold text-corporate-accent mb-6">Core Technologies</h3>
                <div className="grid grid-cols-1 gap-3">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill}
                      className={`flex items-center p-3 surface-elevated rounded-lg hover-lift transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      style={{ transitionDelay: `${0.1 * index + 0.7}s`, animationFillMode: 'both' }}
                    >
                      <div className="w-2 h-2 bg-gradient-electric rounded-full mr-4"></div>
                      <span className="text-corporate-secondary font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
