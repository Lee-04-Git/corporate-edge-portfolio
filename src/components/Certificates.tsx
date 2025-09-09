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

// Northern Lights + Stars Styles
const styles = {
  animations: `
    /* Fade & Slide Animations */
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
    .animate-slide-up { animation: slideUp 0.6s ease-out forwards; }

    /* Stars */
    @keyframes twinkle1 { 0%,100%{opacity:0.3;transform:scale(0.8);}50%{opacity:1;transform:scale(1.2);} }
    @keyframes twinkle2 { 0%,100%{opacity:0.5;transform:scale(1);}25%{opacity:1;transform:scale(1.3);}75%{opacity:0.2;transform:scale(0.9);} }
    @keyframes twinkle3 { 0%,100%{opacity:0.4;transform:scale(0.9);}33%{opacity:0.8;transform:scale(1.1);}66%{opacity:1;transform:scale(1.4);} }
    @keyframes starFloat { 0%{transform:translateY(0px) translateX(0px) rotate(0deg);}25%{transform:translateY(-15px) translateX(10px) rotate(90deg);}50%{transform:translateY(-5px) translateX(-8px) rotate(180deg);}75%{transform:translateY(-20px) translateX(15px) rotate(270deg);}100%{transform:translateY(0px) translateX(0px) rotate(360deg);} }
    .stars-layer { position:absolute;top:0;left:0;width:100%;height:100%;z-index:1; }
    .star { position:absolute; background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, transparent 70%); border-radius:50%; filter:drop-shadow(0 0 6px rgba(255,255,255,0.8)); }
    .star-small { width:2px;height:2px; animation: twinkle1 3s infinite ease-in-out, starFloat 25s infinite linear; }
    .star-medium { width:3px;height:3px; animation: twinkle2 4s infinite ease-in-out, starFloat 35s infinite linear; }
    .star-large { width:4px;height:4px; animation: twinkle3 5s infinite ease-in-out, starFloat 45s infinite linear; }

    /* Northern Lights */
    @keyframes aurora1 { 0%{transform:translateX(-100%) translateY(0%) scale(1) rotate(-5deg);opacity:0.25;}25%{transform:translateX(-20%) translateY(-15%) scale(1.3) rotate(2deg);opacity:0.5;}50%{transform:translateX(40%) translateY(-8%) scale(1.1) rotate(-3deg);opacity:0.35;}75%{transform:translateX(80%) translateY(-20%) scale(1.4) rotate(4deg);opacity:0.6;}100%{transform:translateX(120%) translateY(0%) scale(1) rotate(-5deg);opacity:0.25;} }
    @keyframes aurora2 { 0%{transform:translateX(120%) translateY(-10%) scale(1.2) rotate(3deg);opacity:0.15;}25%{transform:translateX(60%) translateY(-25%) scale(1) rotate(-2deg);opacity:0.35;}50%{transform:translateX(10%) translateY(-5%) scale(1.5) rotate(4deg);opacity:0.25;}75%{transform:translateX(-40%) translateY(-18%) scale(1.1) rotate(-1deg);opacity:0.4;}100%{transform:translateX(-120%) translateY(-10%) scale(1.2) rotate(3deg);opacity:0.15;} }
    .northern-lights { position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;pointer-events:none;overflow:hidden; }
    .aurora-layer { position:absolute;width:150%;height:80%;top:10%;left:-25%; }
    .aurora-wave { position:absolute;width:100%;height:100%;filter:blur(60px);border-radius:50%;mix-blend-mode:screen; }
    .aurora-green { background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,150,0.25) 0%, rgba(50,255,200,0.15) 30%, rgba(100,255,180,0.1) 60%, transparent 100%); animation: aurora1 20s infinite ease-in-out; }
    .aurora-blue { background: radial-gradient(ellipse 70% 50% at 60% 40%, rgba(0,150,255,0.2) 0%, rgba(100,200,255,0.12) 40%, rgba(150,220,255,0.08) 70%, transparent 100%); animation: aurora2 25s infinite ease-in-out; animation-delay:-8s; }

    /* Aurora Background */
    .aurora-bg { background: hsl(var(--border) 217.2 32.6% 17.5%); }
  `
};

const StyleTag = () => <style>{styles.animations}</style>;

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [certificateCount, setCertificateCount] = useState(0);
  const [achievementCount, setAchievementCount] = useState(0);
  const [stars, setStars] = useState([]);
  const sectionRef = useRef<HTMLElement>(null);

  const targetCertificates = 8;
  const targetAchievements = 25;

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

  // Counter Animation
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const certificateStep = targetCertificates / steps;
      const achievementStep = targetAchievements / steps;
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCertificateCount(Math.min(Math.floor(certificateStep * currentStep), targetCertificates));
        setAchievementCount(Math.min(Math.floor(achievementStep * currentStep), targetAchievements));
        if (currentStep >= steps) clearInterval(timer);
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const certificates = [
    { title:"AI Essentials", issuer:"Corporate Edge", date:"2023", credentialId:"AI-ESS-2023-001", pdfUrl:AIEssentials },
    { title:"AI For Everyone", issuer:"Coursera", date:"2023", credentialId:"AI4E-2023-001", pdfUrl:AIForEveryone },
    { title:"Active Listening & Communication", issuer:"Corporate Edge", date:"2023", credentialId:"AL-COM-2023-001", pdfUrl:ActiveListening },
    { title:"Introduction to AI", issuer:"Corporate Edge", date:"2023", credentialId:"INTRO-AI-2023-001", pdfUrl:IntroToAI },
    { title:"Introduction to Generative AI", issuer:"Google Cloud", date:"2023", credentialId:"GEN-AI-2023-001", pdfUrl:GenAI },
    { title:"Professional Email Writing", issuer:"Corporate Edge", date:"2023", credentialId:"EMAIL-2023-001", pdfUrl:ProfEmails },
    { title:"Introduction to AI", issuer:"Lee Maalgraaff", date:"2023", credentialId:"PERSONAL-AI-2023-001", pdfUrl:PersonalIntroAI },
    { title:"Verbal Communication", issuer:"Corporate Edge", date:"2023", credentialId:"VERB-COM-2023-001", pdfUrl:VerbalComm }
  ];

  const achievements = [
    { title:"Open Source Contributor", description:"Contributing to popular React libraries with 500+ GitHub stars", icon:Rocket },
    { title:"Tech Conference Speaker", description:"Presented at 3 major tech conferences on modern web development", icon:Mic },
    { title:"Team Leadership Excellence", description:"Led cross-functional teams of 8+ developers on critical projects", icon:Users },
    { title:"Performance Optimization Expert", description:"Achieved 40% performance improvements across multiple applications", icon:Zap }
  ];

  return (
    <>
      <StyleTag />
      <section ref={sectionRef} id="certificates" className="relative py-20 px-4 aurora-bg overflow-hidden">
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

        {/* Original Certificates Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header + Counters */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-corporate-primary mb-4">
              Certificates & Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-emerald mx-auto rounded-full mb-8"></div>
            <div className="grid md:grid-cols-2 gap-8 max-w-md mx-auto mb-12">
              <div className="card-elevated p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">{certificateCount}</div>
                <div className="text-muted-foreground">Professional Certificates</div>
              </div>
              <div className="card-elevated p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-accent mb-2">{achievementCount}+</div>
                <div className="text-muted-foreground">Industry Achievements</div>
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="mb-16">
            <h3 className={`text-2xl font-bold text-corporate-accent mb-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Professional Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {certificates.map((cert, index) => (
                <div key={cert.credentialId} className={`card-corporate p-6 rounded-lg hover-lift group relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 0.1}s`, animationFillMode:'both'}}>
                  <div className="mb-4 aspect-[4/3] relative">
                    <embed src={`${cert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} type="application/pdf" className="w-full h-full rounded-md" />
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-primary rounded-full hover:bg-primary/80 transition-colors hover-lift" title="View Certificate">
                      <ExternalLink className="w-5 h-5 text-primary-foreground" />
                    </a>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <Award className="w-8 h-8 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                    </div>
                    <h4 className="font-bold text-corporate-primary mb-2 group-hover:text-primary transition-colors">{cert.title}</h4>
                    <p className="text-sm text-accent font-medium mb-2">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">ID: {cert.credentialId}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className={`text-2xl font-bold text-corporate-accent mb-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className={`card-corporate p-6 rounded-lg hover-lift transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${(index + certificates.length)*0.1}s`, animationFillMode:'both' }}>
                  <div className="flex items-start gap-4">
                    <div className="text-primary flex-shrink-0"><achievement.icon className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-corporate-primary mb-2">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </div>
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

export default Certificates;
