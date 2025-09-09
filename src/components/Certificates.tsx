import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink, Rocket, Mic, Users, Zap } from "lucide-react";

import AIEssentials from '../certificates/AI Essentials.pdf';
import AIForEveryone from '../certificates/AI For Everyone - Certificate Of Completion.pdf';
import ActiveListening from '../certificates/Active Listening - Enhancing Communication Skills Certificate.pdf';
import IntroToAI from '../certificates/Introduction To Artificial Intelligence Certificate.pdf';
import GenAI from '../certificates/Introduction to Generative AI.pdf';
import PersonalIntroAI from '../certificates/Lee Maalgraaff - Introduction To AI Certificate.pdf';
import VerbalComm from '../certificates/Verbal Communication and Presentation Skills.pdf';
import ProfEmails from '../certificates/Write Professional Emails.pdf';


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
      title: "AI Essentials",
      issuer: "Corporate Edge",
      date: "2023",
      credentialId: "AI-ESS-2023-001",
      pdfUrl: AIEssentials,
      thumbnail: "/path/to/thumbnail.png" // You'll need to create thumbnails
    },
    {
      title: "AI For Everyone",
      issuer: "Coursera",
      date: "2023",
      credentialId: "AI4E-2023-001",
      pdfUrl: AIForEveryone
    },
    {
      title: "Active Listening & Communication",
      issuer: "Corporate Edge",
      date: "2023",
      credentialId: "AL-COM-2023-001",
      pdfUrl: ActiveListening
    },
    {
      title: "Introduction to AI",
      issuer: "Corporate Edge",
      date: "2023",
      credentialId: "INTRO-AI-2023-001",
      pdfUrl: IntroToAI
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GEN-AI-2023-001",
      pdfUrl: GenAI
    },
    {
      title: "Professional Email Writing",
      issuer: "Corporate Edge",
      date: "2023",
      credentialId: "EMAIL-2023-001",
      pdfUrl: ProfEmails
    },
    {
    title: "Introduction to AI",
    issuer: "Lee Maalgraaff",
    date: "2023",
    credentialId: "PERSONAL-AI-2023-001",
    pdfUrl: PersonalIntroAI
    },
    {
      title: "Verbal Communication",
      issuer: "Corporate Edge",
      date: "2023",
      credentialId: "VERB-COM-2023-001",
      pdfUrl: VerbalComm
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

                {/* Add PDF Preview here */}
                <div className="mb-4 aspect-[4/3] relative">
                  <embed 
                    src={`${cert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    type="application/pdf"
                    className="w-full h-full rounded-md"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={cert.pdfUrl}
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