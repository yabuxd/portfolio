import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Code2, Sparkles, Activity } from 'lucide-react';
import { projects } from '../data/projects';

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
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40, filter: "blur(8px)", scale: 0.98 }),
    center: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
      filter: "blur(8px)",
      scale: 0.98,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const project = projects[current];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-graphite-950">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-gold-burned/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[40vw] h-[40vw] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium SaaS Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-inter uppercase tracking-[0.2em] text-graphite-400 mb-6 flex items-center gap-2 shadow-sm">
            <Sparkles size={12} className="text-gold-burned" />
            Selected Works
          </span>
          <h2 className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-burned via-yellow-200 to-gold-burned">Showcase</span>
          </h2>
          <p className="font-inter text-graphite-400 max-w-2xl text-base md:text-lg leading-relaxed">
            A curated collection of scalable applications, exploring modern architecture, performance optimization, and premium user experiences.
          </p>
        </motion.div>

        {/* Project Container */}
        <div
          className="relative group"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative rounded-[2rem] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Premium Top Bar (Mac-like) */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 z-20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] font-inter uppercase tracking-widest text-graphite-500">
                  <Activity size={12} />
                  System Metrics
                </div>
              </div>

              <div className="flex flex-col mt-10">
                
                {/* Top Image/Preview Area */}
                <div className="relative h-64 sm:h-80 md:h-[400px] bg-graphite-950 overflow-hidden border-b border-white/10 group/image">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                  
                  {/* Mockup Frame overlay */}
                  <motion.div 
                    className="absolute inset-0 z-0 p-6 sm:p-10 flex items-center justify-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black flex items-center justify-center">
                       <img
                         src={project.image}
                         alt={`${project.title} preview`}
                         className="w-full h-full object-cover opacity-60 group-hover/image:opacity-100 transition-opacity duration-700"
                         loading="lazy"
                       />
                       {/* Overlay subtle tech grid */}
                       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] pointer-events-none mix-blend-overlay" />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Content Area */}
                <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center relative">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-burned/5 via-transparent to-transparent pointer-events-none" />

                  {/* Header / Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-8 relative z-10">
                    <span className="px-3 py-1 text-xs font-inter font-medium tracking-wider uppercase bg-gold-burned/10 text-gold-burned rounded-full border border-gold-burned/20 shadow-[0_0_15px_rgba(184,151,65,0.15)]">
                      {project.badge}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-inter font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      {project.status}
                    </span>
                    <span className="ml-auto font-inter text-xs tracking-widest text-graphite-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-3xl sm:text-4xl text-white font-bold tracking-wide mb-4 relative z-10">
                    {project.title}
                  </h3>
                  <p className="font-inter text-graphite-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl relative z-10">
                    {project.description}
                  </p>

                  {/* Glassmorphism Stats */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 relative z-10">
                    {project.stats.map((stat, idx) => (
                       <div key={idx} className="group/stat bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-white/[0.06] hover:border-white/10 transition-colors duration-300">
                         <span className="text-xl sm:text-2xl font-cinzel font-bold text-white mb-1 group-hover/stat:text-gold-burned transition-colors">{stat.value}</span>
                         <span className="text-[9px] sm:text-[10px] font-inter uppercase tracking-wider text-graphite-400 text-center">{stat.label}</span>
                       </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-inter font-medium tracking-wide bg-white text-black rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(184,151,65,0.3)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gold-burned/20 via-yellow-200/20 to-gold-burned/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                      <ExternalLink size={16} className="text-black group-hover/btn:text-gold-burned transition-colors" />
                      <span className="relative z-10">Explore Live System</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-inter font-medium tracking-wide bg-transparent text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                    >
                      <Code2 size={16} className="text-graphite-400 group-hover/btn:text-white transition-colors" />
                      View Architecture
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls - Premium Floating Style */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 lg:-left-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#111]/90 backdrop-blur-xl border border-white/10 text-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] focus:outline-none hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 lg:-right-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={next}
              aria-label="Next project"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#111]/90 backdrop-blur-xl border border-white/10 text-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] focus:outline-none hover:scale-110 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12 relative z-20">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to project ${i + 1}`}
              className={`transition-all duration-500 rounded-full focus:outline-none overflow-hidden relative
                ${i === current
                  ? 'w-12 h-1.5 bg-white'
                  : 'w-3 h-1.5 bg-white/20 hover:bg-white/40'
                }`}
            >
              {i === current && (
                <motion.div 
                  layoutId="activeDot"
                  className="absolute inset-0 bg-gold-burned shadow-[0_0_10px_rgba(184,151,65,0.8)]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
