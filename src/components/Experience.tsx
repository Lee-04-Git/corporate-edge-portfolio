import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Senior Software Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading full-stack development initiatives, architecting scalable microservices, and mentoring junior developers. Implemented cloud-native solutions resulting in 40% improved performance.",
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
    },
    {
      title: "Full Stack Developer",
      company: "Innovation Labs",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["JavaScript", "React", "Python", "PostgreSQL", "Redis"]
    },
    {
      title: "Software Engineer",
      company: "StartupX",
      period: "2018 - 2020",
      description: "Built responsive web applications and RESTful APIs. Participated in agile development processes and contributed to system architecture decisions.",
      technologies: ["JavaScript", "Vue.js", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Junior Developer",
      company: "Digital Agency Co",
      period: "2016 - 2018",
      description: "Developed websites and web applications for various clients. Gained experience in front-end technologies and database management.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "jQuery"]
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4 bg-corporate-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-corporate-primary mb-4">
            Experience & Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-emerald mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className={`lg:flex lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-3 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background shadow-glow-blue"></div>
                  
                  {/* Content Card */}
                  <div className={`ml-12 lg:ml-0 lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                  }`}>
                    <div className="card-corporate p-6 rounded-lg hover-lift group">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <Briefcase className="w-5 h-5 text-primary mr-2" />
                          <h3 className="text-xl font-bold text-corporate-primary group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-lg font-semibold text-accent">{exp.company}</p>
                        <div className="flex items-center mt-1">
                          <Calendar className="w-4 h-4 text-muted-foreground mr-2" />
                          <span className="text-muted-foreground">{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
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