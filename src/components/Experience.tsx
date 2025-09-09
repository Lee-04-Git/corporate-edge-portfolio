import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

// Reuse Northern Lights + Stars CSS
const styles = {
  animations: `
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

    .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
    .animate-slide-up { animation: slideUp 0.6s ease-out forwards; }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }

    @keyframes twinkle1 { 0%,100% { opacity:0.3; transform:scale(0.8); } 50% { opacity:1; transform:scale(1.2); } }
    @keyframes twinkle2 { 0%,100% { opacity:0.5; transform:scale(1); } 25% { opacity:1; transform:scale(1.3); } 75% { opacity:0.2; transform:scale(0.9); } }
    @keyframes twinkle3 { 0%,100% { opacity:0.4; transform:scale(0.9); } 33% { opacity:0.8; transform:scale(1.1); } 66% { opacity:1; transform:scale(1.4); } }
    @keyframes starFloat { 0%{transform:translateY(0) translateX(0) rotate(0deg);}25%{transform:translateY(-15px) translateX(10px) rotate(90deg);}50%{transform:translateY(-5px) translateX(-8px) rotate(180deg);}75%{transform:translateY(-20px) translateX(15px) rotate(270deg);}100%{transform:translateY(0) translateX(0) rotate(360deg);} }

    .stars-layer { position:absolute; top:0; left:0; width:100%; height:100%; z-index:1; }
    .star { position:absolute; background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, transparent 70%); border-radius:50%; filter: drop-shadow(0 0 6px rgba(255,255,255,0.8)); }
    .star-small { width:2px; height:2px; animation: twinkle1 3s infinite ease-in-out, starFloat 25s infinite linear; }
    .star-medium { width:3px; height:3px; animation: twinkle2 4s infinite ease-in-out, starFloat 35s infinite linear; }
    .star-large { width:4px; height:4px; animation: twinkle3 5s infinite ease-in-out, starFloat 45s infinite linear; }

    @keyframes aurora1 {0%{transform:translateX(-100%) translateY(0) scale(1) rotate(-5deg);opacity:0.25;}25%{transform:translateX(-20%) translateY(-15%) scale(1.3) rotate(2deg);opacity:0.5;}50%{transform:translateX(40%) translateY(-8%) scale(1.1) rotate(-3deg);opacity:0.35;}75%{transform:translateX(80%) translateY(-20%) scale(1.4) rotate(4deg);opacity:0.6;}100%{transform:translateX(120%) translateY(0) scale(1) rotate(-5deg);opacity:0.25;} }
    @keyframes aurora2 {0%{transform:translateX(120%) translateY(-10%) scale(1.2) rotate(3deg);opacity:0.15;}25%{transform:translateX(60%) translateY(-25%) scale(1) rotate(-2deg);opacity:0.35;}50%{transform:translateX(10%) translateY(-5%) scale(1.5) rotate(4deg);opacity:0.25;}75%{transform:translateX(-40%) translateY(-18%) scale(1.1) rotate(-1deg);opacity:0.4;}100%{transform:translateX(-120%) translateY(-10%) scale(1.2) rotate(3deg);opacity:0.15;} }
    @keyframes aurora3 {0%{transform:translateX(-80%) translateY(-5%) scale(1.1) rotate(2deg);opacity:0.2;}33%{transform:translateX(0%) translateY(-30%) scale(1.4) rotate(-4deg);opacity:0.45;}66%{transform:translateX(70%) translateY(-12%) scale(1.2) rotate(3deg);opacity:0.3;}100%{transform:translateX(140%) translateY(-5%) scale(1.1) rotate(2deg);opacity:0.2;} }

    .northern-lights { position:absolute; top:0; left:0; width:100%; height:100%; z-index:2; pointer-events:none; overflow:hidden; }
    .aurora-layer { position:absolute; width:150%; height:80%; top:10%; left:-25%; }
    .aurora-wave { position:absolute; width:100%; height:100%; filter:blur(60px); border-radius:50%; mix-blend-mode:screen; }
    .aurora-green { background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,150,0.25) 0%, rgba(50,255,200,0.15) 30%, rgba(100,255,180,0.1) 60%, transparent 100%); animation: aurora1 20s infinite ease-in-out; }
    .aurora-blue { background: radial-gradient(ellipse 70% 50% at 60% 40%, rgba(0,150,255,0.2) 0%, rgba(100,200,255,0.12) 40%, rgba(150,220,255,0.08) 70%, transparent 100%); animation: aurora2 25s infinite ease-in-out; animation-delay: -8s; }
    .aurora-bg { background: hsl(var(--border) 217.2 32.6% 17.5%); }
  `
};

const StyleTag = () => <style>{styles.animations}</style>;

const Experience = () => {
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

  // Stars
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
  }, []);

  const experiences = [
    { title: "Senior Software Developer", company: "TechCorp Solutions", period: "2022 - Present", description: "Leading full-stack development initiatives, architecting scalable microservices, and mentoring junior developers. Implemented cloud-native solutions resulting in 40% improved performance.", technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"] },
    { title: "Full Stack Developer", company: "Innovation Labs", period: "2020 - 2022", description: "Developed and maintained multiple client applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.", technologies: ["JavaScript", "React", "Python", "PostgreSQL", "Redis"] },
    { title: "Software Engineer", company: "StartupX", period: "2018 - 2020", description: "Built responsive web applications and RESTful APIs. Participated in agile development processes and contributed to system architecture decisions.", technologies: ["JavaScript", "Vue.js", "Node.js", "MongoDB", "Express"] },
    { title: "Junior Developer", company: "Digital Agency Co", period: "2016 - 2018", description: "Developed websites and web applications for various clients. Gained experience in front-end technologies and database management.", technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "jQuery"] }
  ];

  return (
    <section ref={sectionRef} id="experience" className="relative py-20 px-4 aurora-bg overflow-hidden">
      <StyleTag />

      {/* Stars */}
      <div className="stars-layer">
        {stars.map((s) => (
          <div key={s.id} className={`star star-${s.size}`} style={{ left: `${s.x}%`, top: `${s.y}%`, animationDelay: `${s.delay}s` }} />
        ))}
      </div>

      {/* Aurora */}
      <div className="northern-lights">
        <div className="aurora-layer"><div className="aurora-wave aurora-green"></div></div>
        <div className="aurora-layer"><div className="aurora-wave aurora-blue"></div></div>
      </div>

      {/* Original Experience content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-corporate-primary mb-4">
            Experience & Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-emerald mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.company} className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 0.2}s`, animationFillMode: 'both' }}>
                <div className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="absolute left-3 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background shadow-glow-blue"></div>
                  <div className={`ml-12 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className="card-corporate p-6 rounded-lg hover-lift group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <Briefcase className="w-5 h-5 text-primary mr-2" />
                          <h3 className="text-xl font-bold text-corporate-primary group-hover:text-primary transition-colors">{exp.title}</h3>
                        </div>
                      </div>
                      <div className="mb-3">
                        <p className="text-lg font-semibold text-accent">{exp.company}</p>
                        <div className="flex items-center mt-1">
                          <Calendar className="w-4 h-4 text-muted-foreground mr-2" />
                          <span className="text-muted-foreground">{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
