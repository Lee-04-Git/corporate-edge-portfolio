import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

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
      {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
        githubUrl: "https://github.com/leemaalgraaff/ecommerce-platform",
        liveUrl: "https://ecommerce-demo.com",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Task Management App",
        description: "Collaborative task management tool with real-time updates and team features.",
        technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
        githubUrl: "https://github.com/leemaalgraaff/task-manager",
        liveUrl: "https://taskmanager-demo.com",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Weather Dashboard",
        description: "Real-time weather application with interactive maps and forecasts.",
        technologies: ["React", "TypeScript", "OpenWeather API", "Tailwind"],
        githubUrl: "https://github.com/leemaalgraaff/weather-dashboard",
        liveUrl: "https://weather-dash-demo.com",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Social Media Analytics",
        description: "Analytics platform for social media metrics and engagement tracking.",
        technologies: ["Python", "Django", "PostgreSQL", "Chart.js"],
        githubUrl: "https://github.com/leemaalgraaff/social-analytics",
        liveUrl: "https://analytics-demo.com",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Cryptocurrency Tracker",
        description: "Real-time cryptocurrency price tracking with portfolio management.",
        technologies: ["React", "Redux", "CoinGecko API", "Chart.js"],
        githubUrl: "https://github.com/leemaalgraaff/crypto-tracker",
        liveUrl: "https://crypto-track-demo.com",
        image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Recipe Sharing Platform",
        description: "Community-driven recipe sharing with ratings and reviews system.",
        technologies: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary"],
        githubUrl: "https://github.com/leemaalgraaff/recipe-platform",
        liveUrl: "https://recipes-demo.com",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&h=250"
      }
    ],
    [
      {
        title: "Fitness Tracking App",
        description: "Mobile-responsive fitness tracker with workout plans and progress monitoring.",
        technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/leemaalgraaff/fitness-tracker",
        liveUrl: "https://fitness-demo.com",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Learning Management System",
        description: "Educational platform with course creation, video streaming, and progress tracking.",
        technologies: ["Angular", "Node.js", "MySQL", "AWS S3"],
        githubUrl: "https://github.com/leemaalgraaff/lms-platform",
        liveUrl: "https://lms-demo.com",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Real Estate Platform",
        description: "Property listing platform with advanced search and virtual tours.",
        technologies: ["React", "GraphQL", "PostgreSQL", "Mapbox"],
        githubUrl: "https://github.com/leemaalgraaff/realestate-platform",
        liveUrl: "https://realestate-demo.com",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Chat Application",
        description: "Real-time messaging application with file sharing and group chats.",
        technologies: ["React", "Socket.io", "Express", "Redis"],
        githubUrl: "https://github.com/leemaalgraaff/chat-app",
        liveUrl: "https://chat-demo.com",
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Inventory Management",
        description: "Business inventory tracking system with automated alerts and reporting.",
        technologies: ["Vue.js", "Laravel", "MySQL", "Vuetify"],
        githubUrl: "https://github.com/leemaalgraaff/inventory-system",
        liveUrl: "https://inventory-demo.com",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Event Management System",
        description: "Comprehensive event planning and management platform with ticketing.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        githubUrl: "https://github.com/leemaalgraaff/event-management",
        liveUrl: "https://events-demo.com",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&h=250"
      }
    ],
    [
      {
        title: "Portfolio Website",
        description: "Responsive portfolio website with dynamic content management.",
        technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
        githubUrl: "https://github.com/leemaalgraaff/portfolio-v2",
        liveUrl: "https://portfolio-demo.com",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Blog CMS",
        description: "Headless CMS for blog management with markdown support and SEO optimization.",
        technologies: ["Strapi", "React", "PostgreSQL", "AWS"],
        githubUrl: "https://github.com/leemaalgraaff/blog-cms",
        liveUrl: "https://blog-cms-demo.com",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Data Visualization Dashboard",
        description: "Interactive dashboard for business intelligence and data analytics.",
        technologies: ["D3.js", "Python", "Flask", "PostgreSQL"],
        githubUrl: "https://github.com/leemaalgraaff/data-viz-dashboard",
        liveUrl: "https://dataviz-demo.com",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "API Gateway",
        description: "Microservices API gateway with authentication and rate limiting.",
        technologies: ["Node.js", "Docker", "Redis", "JWT"],
        githubUrl: "https://github.com/leemaalgraaff/api-gateway",
        liveUrl: "https://api-gateway-demo.com",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Mobile Banking App",
        description: "Secure mobile banking interface with biometric authentication.",
        technologies: ["React Native", "Node.js", "PostgreSQL", "Plaid API"],
        githubUrl: "https://github.com/leemaalgraaff/banking-app",
        liveUrl: "https://banking-demo.com",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "DevOps Monitoring Tool",
        description: "Infrastructure monitoring and alerting system for DevOps teams.",
        technologies: ["React", "Grafana", "Prometheus", "Docker"],
        githubUrl: "https://github.com/leemaalgraaff/devops-monitor",
        liveUrl: "https://monitor-demo.com",
        image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=400&h=250"
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
    <section ref={sectionRef} id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-corporate-primary mb-4">
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
      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all"
    >
      <ChevronLeft className="w-5 h-5 text-primary" />
    </button>
    
    <div className="flex gap-2">
      {projectRows.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentRow(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            currentRow === index 
              ? 'bg-primary shadow-glow-blue' 
              : 'bg-primary/20 hover:bg-primary/40'
          }`}
        />
      ))}
    </div>

    <button
      onClick={nextRow}
      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all"
    >
      <ChevronRight className="w-5 h-5 text-primary" />
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
              className="bg-card rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Hover Overlay with Icons */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors"
                  >
                    <Github className="w-4 h-4 text-primary-foreground" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-accent-foreground" />
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