import { useEffect, useRef, useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// Add image imports
import bookConnectImg from "../assets/Book-Connect.jpeg";
import codeCuisineImg from "../assets/Code-Cuisine.jpeg";
import contentGeneratorImg from "../assets/Content-Generator.jpeg";
import lmPodImg from "../assets/LM-Pod.jpeg";
import memeGeneratorImg from "../assets/Meme-Generator.jpeg";
import movieManiacImg from "../assets/Movie-Maniac.jpeg";
import pigGameImg from "../assets/Pig-Game.jpeg";
import recidexImg from "../assets/Recidex.jpeg";
import taskManagementImg from "../assets/Task-Management.jpeg";



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
      // First row - 4 projects
      {
        title: "Book Connect",
        description: "Full-stack book management and reading list application.",
        technologies: ["React", "Node.js", "PostgreSQL", "Redux"],
        liveUrl: "https://book-connect-site.netlify.app",
        image: bookConnectImg
      },
      {
        title: "Code Cuisine",
        description: "Recipe sharing and cooking tutorial platform.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveUrl: "https://codecuisine-site.netlify.app",
        image: codeCuisineImg
      },
      {
        title: "Content Generator",
        description: "AI-powered content generation tool.",
        technologies: ["React", "OpenAI API", "Node.js", "Express"],
        liveUrl: "https://cb-main-content-generator.netlify.app",
        image: contentGeneratorImg
      },
      {
        title: "LM Pod",
        description: "Podcast streaming and management platform.",
        technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
        liveUrl: "https://lm-pod.netlify.app",
        image: lmPodImg
      }
    ],
    [
      // Second row - 4 projects
      {
        title: "Meme Generator",
        description: "Interactive meme creation and sharing platform.",
        technologies: ["React", "Canvas API", "Firebase", "Cloudinary"],
        liveUrl: "https://my-meme-generator-site.netlify.app",
        image: memeGeneratorImg
      },
      {
        title: "Movie Maniac",
        description: "Movie discovery and review platform.",
        technologies: ["React", "TMDB API", "Firebase", "Tailwind"],
        liveUrl: "https://my-movie-radar.netlify.app",
        image: movieManiacImg
      },
      {
        title: "Pig Game",
        description: "Interactive dice game with multiplayer support.",
        technologies: ["JavaScript", "HTML", "CSS", "Socket.io"],
        liveUrl: "https://lee-pig-game.netlify.app",
        image: pigGameImg
      },
      {
        title: "Recidex",
        description: "Recipe indexing and management system.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveUrl: "https://recidex.netlify.app",
        image: recidexImg
      }
    ],
    [
      // Third row - 1 project
      {
        title: "Task Management",
        description: "Project and task management platform.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveUrl: "https://mytask-managementapp.netlify.app",
        image: taskManagementImg
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
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${currentRow === index
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full flex-shrink-0"
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

                      {/* Hover Overlay with Icon */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
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