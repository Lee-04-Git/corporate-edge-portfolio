import { useEffect, useRef, useState } from "react";

// Stars + Smooth Hover + Animated Progress Bar
const styles = `
  @keyframes twinkle1 {0%,100%{opacity:0.2;}50%{opacity:0.5;} }
  @keyframes twinkle2 {0%,100%{opacity:0.3;}25%{opacity:0.6;}75%{opacity:0.2;} }
  @keyframes twinkle3 {0%,100%{opacity:0.25;}33%{opacity:0.5;}66%{opacity:0.6;} }

  .stars-layer { position:absolute;top:0;left:0;width:100%;height:100%;z-index:0; pointer-events:none; }
  .star { position:absolute; background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 50%, transparent 80%); border-radius:50%; filter:drop-shadow(0 0 2px rgba(255,255,255,0.4)); }
  .star-small { width:2px;height:2px; animation: twinkle1 3s infinite ease-in-out; }
  .star-medium { width:3px;height:3px; animation: twinkle2 4s infinite ease-in-out; }
  .star-large { width:4px;height:4px; animation: twinkle3 5s infinite ease-in-out; }

  .skill-item { position: relative; cursor: pointer; height: 60px; }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #4b5563;
    background: rgba(31,41,55,0.7);
    transition: opacity 0.5s ease, transform 0.5s ease;
    box-sizing: border-box;
  }

  .card-back {
    opacity: 0;
    pointer-events: none;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    background: rgba(0,255,255,0.15);
    border: 1px solid #00ffff;
    backdrop-filter: blur(6px);
  }

  .skill-item:hover .card-back {
    opacity: 1;
    pointer-events: auto;
  }

  .progress-bar-wrapper {
    width: 100%;
    height: 12px;
    background: rgba(0,255,255,0.2);
    border-radius: 9999px;
    overflow: hidden;
    margin-top: 0.5rem;
  }

  .progress-bar {
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg,#00ffff,#3bffff);
    border-radius: 9999px;
    transition: width 1.2s ease-in-out;
  }

  .skill-item:hover .progress-bar {
    width: var(--skill-percentage);
  }

  .percentage {
    font-size: 0.85rem;
    font-weight: 500;
    color: #00ffff;
    margin-top: 0.3rem;
    text-align: left;
  }

  .proficiency-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: #00ffff;
    margin-bottom: 0.25rem;
    align-self: flex-start;
  }
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

  useEffect(() => {
    const starArray = [];
    for (let i = 0; i < 50; i++) {
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

  const skills = {
    Languages: [
      { name: "JavaScript", level: 70 },
      { name: "HTML5", level: 88 },
      { name: "CSS3", level: 75 },
      { name: "TypeScript", level: 80 },
      { name: "Python", level: 68 }
    ],
    Frameworks: [
      { name: "React", level: 75 },
      { name: "Tailwind", level: 70 }
    ],
    Tools: [
      { name: "GitHub", level: 85 }
    ]
  };

  return (
    <>
      <StyleTag />
      <section ref={sectionRef} id="about" className="relative py-20 px-4 bg-transparent overflow-hidden">
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
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-corporate-primary mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-electric mx-auto rounded-full"></div>
          </div>

          {/* Professional Overview */}
          <div className={`transition-all duration-1000 mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="card-corporate p-10 rounded-none border border-cyan-500 bg-corporate-surface/30">
              <h3 className="text-2xl font-bold text-corporate-accent mb-6">Professional Overview</h3>
              <p className="text-muted-foreground mb-2">
                I’m an eager developer with a strong sense of direction, always looking to grow my skills and push myself further.
              </p>
              <p className="text-muted-foreground mb-2">
                I enjoy taking on challenges, building projects that actually make an impact, and turning ideas into something real and useful.
              </p>
              <p className="text-muted-foreground">
                Right now I’m focused on full-stack development, AI technologies, and keeping up with what’s next in tech.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="card-corporate p-8 rounded-none border border-cyan-500 bg-corporate-surface/30">
              <h3 className="text-2xl font-bold text-corporate-accent mb-6">Tech Stack</h3>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="mb-6">
                  <h4 className="text-xl font-semibold text-corporate-primary mb-3">{category}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((skill) => (
                      <div key={skill.name} className="skill-item" style={{ '--skill-percentage': `${skill.level}%` } as any}>
                        <div className="card-inner">
                          <div className="card-front">{skill.name}</div>
                          <div className="card-back">
                            <span className="proficiency-title">Proficiency Level:</span>
                            <div className="progress-bar-wrapper">
                              <div className="progress-bar"></div>
                            </div>
                            <span className="percentage">{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
