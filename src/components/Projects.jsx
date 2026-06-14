import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "School Management System",
    tagline: "Full-stack academic platform with role-based access",
    description: "A comprehensive platform handling student records, score submission, and performance analytics for both students and teachers. Built with a secure JWT-authenticated REST API and an SQLite database optimized for relational academic data.",
    tech: ["React", "Express.js", "SQLite", "Tailwind CSS"],
    github: "https://github.com/yabuxd/student-managment",
    demo: "#",
    image: "https://placehold.co/800x450/1a1a1a/b89741?text=School+Management+System&font=playfair-display",
  },
  {
    title: "Network Packet Analyzer",
    tagline: "TCP/IP traffic simulation and routing engine",
    description: "A systems-level simulation tool that intercepts and classifies network traffic, implementing core TCP/IP routing protocols from scratch. Uses custom graph-based data structures for efficient multi-hop packet routing under load.",
    tech: ["C/C++", "Networking", "Data Structures"],
    github: "#",
    demo: "#",
    image: "https://placehold.co/800x450/1a1a1a/b89741?text=Network+Packet+Analyzer&font=playfair-display",
  },
  {
    title: "Cinematic E-Commerce",
    tagline: "Premium full-stack shopping experience",
    description: "A visually striking e-commerce app featuring animated product transitions, real-time cart state management with Zustand, and a seamless checkout flow backed by Express and MongoDB. Optimized for fast load times via code splitting.",
    tech: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "#",
    demo: "#",
    image: "https://placehold.co/800x450/1a1a1a/b89741?text=Cinematic+E-Commerce&font=playfair-display",
  },
  {
    title: "Algorithmic Path Finder",
    tagline: "Interactive visualizer for graph traversal algorithms",
    description: "An educational tool that animates Dijkstra and A* pathfinding on dynamically generated grid mazes. Renders 10,000+ cells smoothly using optimized Canvas 2D APIs and supports real-time obstacle placement.",
    tech: ["JavaScript", "HTML5 Canvas", "Algorithms"],
    github: "#",
    demo: "#",
    image: "https://placehold.co/800x450/1a1a1a/b89741?text=Algorithmic+Path+Finder&font=playfair-display",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-burned/5 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            FEATURED <span className="text-gold-burned">PROJECTS</span>
          </h2>
          <p className="font-inter text-graphite-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Selected works: built from the ground up
          </p>
          <div className="w-24 h-[1px] bg-gold-burned/50 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col"
            >
              {/* Gold glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-graphite-800 to-graphite-600 rounded-sm blur opacity-20 group-hover:opacity-60 group-hover:from-gold-burned/40 group-hover:to-gold-burned/10 transition duration-500 pointer-events-none"></div>
              
              <div className="relative flex flex-col h-full bg-graphite-950 border border-graphite-800 group-hover:border-gold-burned/40 transition-all duration-400 group-hover:shadow-[0_0_24px_rgba(184,151,65,0.15)]">
                
                {/* Screenshot / Preview */}
                <div className="aspect-video w-full overflow-hidden bg-graphite-900">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-grow p-7">
                  <h3 className="font-cinzel text-xl text-white font-bold tracking-wide group-hover:text-gold-light transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="font-inter text-gold-burned/70 text-xs tracking-widest uppercase mb-4">
                    {project.tagline}
                  </p>
                  
                  <p className="font-inter text-graphite-300 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-inter uppercase tracking-wider text-graphite-400 bg-graphite-900 border border-graphite-800 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 flex-1 justify-center px-4 py-2.5 text-xs font-inter tracking-widest uppercase bg-gold-burned/10 text-gold-burned border border-gold-burned/40 hover:bg-gold-burned hover:text-black transition-all duration-300"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 flex-1 justify-center px-4 py-2.5 text-xs font-inter tracking-widest uppercase bg-graphite-900 text-graphite-300 border border-graphite-700 hover:border-graphite-500 hover:text-white transition-all duration-300"
                    >
                      <Github size={13} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
