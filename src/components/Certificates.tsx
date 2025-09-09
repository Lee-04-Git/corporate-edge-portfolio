import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink, Rocket, Mic, Users, Zap } from "lucide-react";

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [certificateCount, setCertificateCount] = useState(0);
  const [achievementCount, setAchievementCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const targetCertificates = 12;
  const targetAchievements = 25;

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

  // Counter Animation
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const certificateStep = targetCertificates / steps;
      const achievementStep = targetAchievements / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCertificateCount(Math.min(Math.floor(certificateStep * currentStep), targetCertificates));
        setAchievementCount(Math.min(Math.floor(achievementStep * currentStep), targetAchievements));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001",
      driveUrl: "https://drive.google.com/file/d/example1/view"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-2023-001",
      driveUrl: "https://drive.google.com/file/d/example2/view"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-RD-2022-001",
      driveUrl: "https://drive.google.com/file/d/example3/view"
    },
    {
      title: "Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CNCF-CKA-2022-001",
      driveUrl: "https://drive.google.com/file/d/example4/view"
    },
    {
      title: "Node.js Application Developer",
      issuer: "OpenJS Foundation",
      date: "2022",
      credentialId: "JSFD-NAD-2022-001",
      driveUrl: "https://drive.google.com/file/d/example5/view"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc",
      date: "2021",
      credentialId: "DOCKER-DCA-2021-001",
      driveUrl: "https://drive.google.com/file/d/example6/view"
    },
    {
      title: "MongoDB Developer Associate",
      issuer: "MongoDB University",
      date: "2021",
      credentialId: "MONGO-DA-2021-001",
      driveUrl: "https://drive.google.com/file/d/example7/view"
    },
    {
      title: "Scrum Master Professional",
      issuer: "Scrum Alliance",
      date: "2021",
      credentialId: "CSM-2021-001",
      driveUrl: "https://drive.google.com/file/d/example8/view"
    }
  ];

  const achievements = [
    {
      title: "Open Source Contributor",
      description: "Contributing to popular React libraries with 500+ GitHub stars",
      icon: Rocket
    },
    {
      title: "Tech Conference Speaker",
      description: "Presented at 3 major tech conferences on modern web development",
      icon: Mic
    },
    {
      title: "Team Leadership Excellence",
      description: "Led cross-functional teams of 8+ developers on critical projects",
      icon: Users
    },
    {
      title: "Performance Optimization Expert",
      description: "Achieved 40% performance improvements across multiple applications",
      icon: Zap
    }
  ];

  return (
    <section ref={sectionRef} id="certificates" className="py-20 px-4 bg-corporate-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-corporate-primary mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-emerald mx-auto rounded-full mb-8"></div>
          
          {/* Counter Stats */}
          <div className="grid md:grid-cols-2 gap-8 max-w-md mx-auto mb-12">
            <div className="card-elevated p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2 animate-counter-up">
                {certificateCount}
              </div>
              <div className="text-muted-foreground">Professional Certificates</div>
            </div>
            <div className="card-elevated p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-accent mb-2 animate-counter-up">
                {achievementCount}+
              </div>
              <div className="text-muted-foreground">Industry Achievements</div>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold text-corporate-accent mb-8 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={cert.credentialId}
                className={`card-corporate p-6 rounded-lg hover-lift group relative overflow-hidden transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={cert.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary rounded-full hover:bg-primary/80 transition-colors hover-lift"
                    title="View Certificate on Google Drive"
                  >
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </a>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Award className="w-8 h-8 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                  </div>
                  
                  <h4 className="font-bold text-corporate-primary mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  
                  <p className="text-sm text-accent font-medium mb-2">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-xs text-muted-foreground">
                    ID: {cert.credentialId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className={`text-2xl font-bold text-corporate-accent mb-8 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Key Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`card-corporate p-6 rounded-lg hover-lift transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${(index + certificates.length) * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary flex-shrink-0">
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-corporate-primary mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;