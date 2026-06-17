import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "School Management System",
    tagline: "Full-stack academic platform with role-based access",
    description: "Handles student records, score submission, and performance analytics with a JWT-authenticated REST API and SQLite backend.",
    tech: ["React", "Express.js", "SQLite", "Tailwind CSS"],
    github: "https://github.com/yabuxd/student-managment",
    demo: "#",
    image: "/School-managment.png",
  },
  {
    title: "MovieXD",
    tagline: "Cinematic streaming platform with watchlist and discovery",
    description: "A sleek movie streaming app with real-time TMDB data, watchlist management, and a cinematic dark-mode UI built for immersive browsing.",
    tech: ["React", "Vite", "TMDB API", "Tailwind CSS"],
    github: "https://github.com/yabuxd/moviexd",
    demo: "#",
    image: "https://placehold.co/800x450/0d0d0d/b89741?text=MovieXD&font=playfair-display",
  },
  {
    title: "OShell",
    tagline: "Unix-like Command Line Shell",
    description: "A custom Unix shell built in C that supports interactive, batch, and pipeline modes, featuring process management, command parsing, variable expansion, I/O redirection, and signal handling.",
    tech: ["C", "Operating Systems", "Process Management", "Unix"],
    github: "https://github.com/yabuxd/oshell",
    demo: "#",
    image: "https://placehold.co/800x450/1a1a1a/b89741?text=OShell&font=playfair-display",
  },
  {
    title: "Cinematic E-Commerce",
    tagline: "Premium full-stack shopping experience",
    description: "Features animated transitions, real-time cart state with Zustand, and a seamless checkout flow backed by Express and MongoDB.",
    tech: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "#",
    demo: "#",
    image: "https://placehold.co/800x450/1a1a1a/b89741?text=Cinematic+E-Commerce&font=playfair-display",
  },
  {
    title: "Algorithmic Path Finder",
    tagline: "Interactive visualizer for graph traversal algorithms",
    description: "Animates Dijkstra and A* pathfinding on dynamic grid mazes, rendering 10,000+ cells smoothly via Canvas 2D APIs.",
    tech: ["JavaScript", "HTML5 Canvas", "Algorithms"],
    github: "#",
    demo: "#",
    image: "https://placehold.co/800x450/1a1a1a/b89741?text=Algorithmic+Path+Finder&font=playfair-display",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [hovering, setHovering] = useState(false);
  const total = projects.length;

  const goTo = (index, dir) => {
    setDirection(dir);
    setCurrent(index);
  };

  const prev = () => goTo((current - 1 + total) % total, -1);
  const next = () => goTo((current + 1) % total, 1);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [current]);

  const variants = {
    enter: { opacity: 0, scale: 0.98 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.22, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.15, ease: 'easeIn' },
    },
  };

  const project = projects[current];

  return (
    <section id="projects" className="py-16 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-burned/5 blur-[100px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            FEATURED <span className="text-gold-burned">PROJECTS</span>
          </h2>
          <p className="font-inter text-graphite-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Selected works: built from the ground up
          </p>
          <div className="w-24 h-[1px] bg-gold-burned/50 mx-auto mt-6" />
        </motion.div>

        {/* Carousel wrapper */}
        <div
          className="relative px-10 md:px-16"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Card track — centered narrow card */}
          <div className="overflow-hidden rounded-sm max-w-2xl mx-auto">
            <AnimatePresence mode="sync">
              <motion.div
                key={current}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="group relative flex flex-col bg-graphite-950 border border-graphite-800 hover:border-gold-burned/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(184,151,65,0.12)]"
              >
                {/* Project image — full width on top */}
                <div className="w-full aspect-[16/7] overflow-hidden bg-graphite-900 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>

                {/* Card body — right 45% */}
                <div className="flex flex-col flex-grow p-5 justify-between">
                  <div>
                    {/* Counter badge */}
                    <span className="font-inter text-xs tracking-widest uppercase text-gold-burned/60 mb-2 block">
                      {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>

                    <h3 className="font-cinzel text-xl text-white font-bold tracking-wide group-hover:text-gold-light transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="font-inter text-gold-burned/70 text-xs tracking-widest uppercase mb-3">
                      {project.tagline}
                    </p>
                    <p className="font-inter text-graphite-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2.5 py-0.5 text-xs font-inter uppercase tracking-wider text-graphite-400 bg-graphite-900 border border-graphite-800 rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
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
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ← Prev Arrow */}
          <motion.button
            onClick={prev}
            aria-label="Previous project"
            initial={false}
            animate={{ opacity: hovering ? 1 : 0, x: hovering ? 0 : -8 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20
                       flex items-center justify-center w-12 h-12
                       bg-graphite-950/90 border border-gold-burned/40 text-gold-burned
                       hover:bg-gold-burned hover:text-black hover:border-gold-burned
                       transition-colors duration-300 shadow-[0_0_20px_rgba(184,151,65,0.2)]
                       focus:outline-none focus:ring-2 focus:ring-gold-burned/50"
          >
            <ChevronLeft size={20} />
          </motion.button>

          {/* → Next Arrow */}
          <motion.button
            onClick={next}
            aria-label="Next project"
            initial={false}
            animate={{ opacity: hovering ? 1 : 0, x: hovering ? 0 : 8 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20
                       flex items-center justify-center w-12 h-12
                       bg-graphite-950/90 border border-gold-burned/40 text-gold-burned
                       hover:bg-gold-burned hover:text-black hover:border-gold-burned
                       transition-colors duration-300 shadow-[0_0_20px_rgba(184,151,65,0.2)]
                       focus:outline-none focus:ring-2 focus:ring-gold-burned/50"
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2.5 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                aria-label={`Go to project ${i + 1}`}
                className={`transition-all duration-300 rounded-full focus:outline-none
                  ${i === current
                    ? 'w-8 h-1.5 bg-gold-burned'
                    : 'w-2 h-1.5 bg-graphite-600 hover:bg-graphite-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
