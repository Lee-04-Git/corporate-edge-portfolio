import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// Add image imports
import bookConnectImg from "../assets/Book-Connect.jpeg";
import cacheBankImg from "../assets/Cache-Bank-Landing-Page.jpeg";
import calculatorImg from "../assets/Calculator.jpeg";
import codeCuisineImg from "../assets/Code-Cuisine.jpeg";
import contentGeneratorImg from "../assets/Content-Generator.jpeg";
import lmPodImg from "../assets/LM-Pod.jpeg";
import memeGeneratorImg from "../assets/Meme-Generator.jpeg";
import movieManiacImg from "../assets/Movie-Maniac.jpeg";
import pigGameImg from "../assets/Pig-Game.jpeg";
import recidexImg from "../assets/Recidex.jpeg";
import resumeBuilderImg from "../assets/Resume-Builder.jpeg";
import shoppingCartImg from "../assets/Shopping-Cart.jpeg";
import staticWeatherImg from "../assets/Static-Weather-Page.jpeg";
import taskManagementImg from "../assets/Task-Management.jpeg";
import taskOrganiserImg from "../assets/Task-Organiser.jpeg";
import toDoImg from "../assets/To-Do.jpeg";
import wholeDivisionImg from "../assets/Whole-Number-Division.jpeg";
import ytCloneImg from "../assets/YT-Clone-UI.jpeg";



const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRow, setCurrentRow] = useState(0);
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

  // Sample projects data - in real implementation, this would come from an API or database
const projectRows = [
    [
      // First 6 projects
      {
        title: "Book Connect",
        description: "Full-stack book management and reading list application.",
        technologies: ["React", "Node.js", "PostgreSQL", "Redux"],
        githubUrl: "https://github.com/leemaalgraaff/book-connect",
        liveUrl: "https://book-connect-demo.com",
        image: bookConnectImg
      },
      {
        title: "Cache Bank Landing",
        description: "Modern responsive landing page for digital banking platform.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/leemaalgraaff/cache-bank",
        liveUrl: "https://cache-bank-demo.com",
        image: cacheBankImg
      },
      {
        title: "Calculator App",
        description: "Interactive calculator with advanced mathematical functions.",
        technologies: ["JavaScript", "HTML", "CSS", "Jest"],
        githubUrl: "https://github.com/leemaalgraaff/calculator",
        liveUrl: "https://calculator-demo.com",
        image: calculatorImg
      },
      {
        title: "Code Cuisine",
        description: "Recipe sharing and cooking tutorial platform.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        githubUrl: "https://github.com/leemaalgraaff/code-cuisine",
        liveUrl: "https://code-cuisine-demo.com",
        image: codeCuisineImg
      },
      {
        title: "Content Generator",
        description: "AI-powered content generation tool.",
        technologies: ["React", "OpenAI API", "Node.js", "Express"],
        githubUrl: "https://github.com/leemaalgraaff/content-generator",
        liveUrl: "https://content-generator-demo.com",
        image: contentGeneratorImg
      },
      {
        title: "LM Pod",
        description: "Podcast streaming and management platform.",
        technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
        githubUrl: "https://github.com/leemaalgraaff/lm-pod",
        liveUrl: "https://lm-pod-demo.com",
        image: lmPodImg
      }
    ],
    [
      // Next 6 projects
      {
        title: "Meme Generator",
        description: "Interactive meme creation and sharing platform.",
        technologies: ["React", "Canvas API", "Firebase", "Cloudinary"],
        githubUrl: "https://github.com/leemaalgraaff/meme-generator",
        liveUrl: "https://meme-generator-demo.com",
        image: memeGeneratorImg
      },
      {
        title: "Movie Maniac",
        description: "Movie discovery and review platform.",
        technologies: ["React", "TMDB API", "Firebase", "Tailwind"],
        githubUrl: "https://github.com/leemaalgraaff/movie-maniac",
        liveUrl: "https://movie-maniac-demo.com",
        image: movieManiacImg
      },
      {
        title: "Pig Game",
        description: "Interactive dice game with multiplayer support.",
        technologies: ["JavaScript", "HTML", "CSS", "Socket.io"],
        githubUrl: "https://github.com/leemaalgraaff/pig-game",
        liveUrl: "https://pig-game-demo.com",
        image: pigGameImg
      },
      {
        title: "Recidex",
        description: "Recipe indexing and management system.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        githubUrl: "https://github.com/leemaalgraaff/recidex",
        liveUrl: "https://recidex-demo.com",
        image: recidexImg
      },
      {
        title: "Resume Builder",
        description: "Dynamic resume creation platform.",
        technologies: ["React", "Redux", "Firebase", "PDF.js"],
        githubUrl: "https://github.com/leemaalgraaff/resume-builder",
        liveUrl: "https://resume-builder-demo.com",
        image: resumeBuilderImg
      },
      {
        title: "Shopping Cart",
        description: "E-commerce shopping cart implementation.",
        technologies: ["React", "Redux", "Node.js", "Stripe"],
        githubUrl: "https://github.com/leemaalgraaff/shopping-cart",
        liveUrl: "https://shopping-cart-demo.com",
        image: shoppingCartImg
      }
    ],
    [
      // Final 6 projects
      {
        title: "Static Weather Page",
        description: "Weather information display page.",
        technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
        githubUrl: "https://github.com/leemaalgraaff/static-weather",
        liveUrl: "https://static-weather-demo.com",
        image: staticWeatherImg
      },
      {
        title: "Task Management",
        description: "Project and task management platform.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        githubUrl: "https://github.com/leemaalgraaff/task-management",
        liveUrl: "https://task-management-demo.com",
        image: taskManagementImg
      },
      {
        title: "Task Organiser",
        description: "Personal task organization tool.",
        technologies: ["React", "LocalStorage", "CSS", "JavaScript"],
        githubUrl: "https://github.com/leemaalgraaff/task-organiser",
        liveUrl: "https://task-organiser-demo.com",
        image: taskOrganiserImg
      },
      {
        title: "To Do App",
        description: "Simple but effective todo list application.",
        technologies: ["React", "TypeScript", "LocalStorage", "CSS"],
        githubUrl: "https://github.com/leemaalgraaff/todo-app",
        liveUrl: "https://todo-demo.com",
        image: toDoImg
      },
      {
        title: "Whole Number Division",
        description: "Educational math learning platform.",
        technologies: ["JavaScript", "HTML", "CSS", "Math.js"],
        githubUrl: "https://github.com/leemaalgraaff/division-app",
        liveUrl: "https://division-demo.com",
        image: wholeDivisionImg
      },
      {
        title: "YouTube Clone UI",
        description: "YouTube interface clone with basic functionality.",
        technologies: ["React", "YouTube API", "Tailwind", "Redux"],
        githubUrl: "https://github.com/leemaalgraaff/yt-clone",
        liveUrl: "https://yt-clone-demo.com",
        image: ytCloneImg
      }
    ]
];
  const nextRow = () => {
    setCurrentRow((prev) => (prev + 1) % projectRows.length);
  };

  const prevRow = () => {
    setCurrentRow((prev) => (prev - 1 + projectRows.length) % projectRows.length);
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 id="projects-heading" className="text-4xl lg:text-5xl font-bold text-corporate-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-electric mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of professional projects showcasing modern development practices and innovative solutions.
          </p>
        </div>
    </div>
{/* Navigation and Projects Container */}
<div className="overflow-hidden">
  {/* Navigation */}
  <div className="flex justify-center items-center mb-8 gap-4">
    <button
      onClick={prevRow}
      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Previous project row"
    >
      <ChevronLeft className="w-5 h-5 text-primary" aria-hidden="true" />
    </button>
    
    <div className="flex gap-2">
      {projectRows.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentRow(index)}
          className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
            currentRow === index 
              ? 'bg-primary shadow-glow-blue' 
              : 'bg-primary/20 hover:bg-primary/40'
          }`}
          aria-label={`Go to project row ${index + 1}`}
          aria-pressed={currentRow === index}
        />
      ))}
    </div>

    <button
      onClick={nextRow}
      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Next project row"
    >
      <ChevronRight className="w-5 h-5 text-primary" aria-hidden="true" />
    </button>
  </div>

  {/* Projects Slider */}
  <div className="overflow-hidden">
    <div 
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentRow * 100}%)` }}
    >
      {projectRows.map((row, rowIndex) => (
        <div 
          key={rowIndex}
          className="grid grid-cols-6 gap-6 w-full flex-shrink-0"
        >
          {row.map((project, projectIndex) => (
  <div
    key={projectIndex}
    className="group bg-card rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
  >
    {/* Project Image */}
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={`Screenshot of ${project.title} - ${project.description}`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />
      
      {/* Hover Overlay with Icons */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <Github className="w-4 h-4 text-primary-foreground" aria-hidden="true" />
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 delay-75 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          aria-label={`View ${project.title} live demo`}
        >
          <ExternalLink className="w-4 h-4 text-accent-foreground" aria-hidden="true" />
        </a>
      </div>
    </div>

              {/* Project Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</div>
    </section>
  );
};

export default Projects;