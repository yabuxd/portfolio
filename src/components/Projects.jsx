import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "School Management System",
    description: "A comprehensive full-stack platform for managing academic records. Features secure role-based access for students and teachers, rapid score submission, and academic performance visualizations.",
    tech: ["React", "Express.js", "SQLite", "Tailwind CSS"],
    github: "https://github.com/yabuxd/student-managment",
    demo: "#"
  },
  {
    title: "Network Packet Analyzer",
    description: "A simulation tool built to analyze network traffic and simulate TCP/IP routing protocols. Implements complex data structures for efficient packet routing.",
    tech: ["C/C++", "Networking", "Data Structures"],
    github: "#",
    demo: "#"
  },
  {
    title: "Cinematic E-Commerce",
    description: "A visually striking full-stack web application featuring smooth animations, modern state management, and a seamless checkout experience.",
    tech: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "Algorithmic Path Finder",
    description: "Interactive visualizer for pathfinding algorithms (Dijkstra, A*) on complex grids with dynamic obstacle generation.",
    tech: ["JavaScript", "HTML5 Canvas", "Algorithms"],
    github: "#",
    demo: "#"
  }
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
            THE <span className="text-gold-burned">REALMS</span> BUILT
          </h2>
          <p className="font-inter text-graphite-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            A chronicle of major conquests and architectures
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
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-graphite-800 to-graphite-600 rounded-sm blur opacity-20 group-hover:opacity-50 group-hover:from-gold-burned/30 transition duration-500"></div>
              <div className="relative h-full flex flex-col p-8 bg-graphite-950 border border-graphite-800 transition-all duration-300 group-hover:border-graphite-600">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-cinzel text-2xl text-white font-bold tracking-wide group-hover:text-gold-light transition-colors">{project.title}</h3>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-graphite-400 hover:text-white transition-colors" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-graphite-400 hover:text-white transition-colors" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="font-inter text-graphite-300 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-inter uppercase tracking-wider text-graphite-400 bg-graphite-900 border border-graphite-800 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
