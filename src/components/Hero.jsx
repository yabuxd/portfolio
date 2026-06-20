import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { projects } from '../data/projects';

export default function Hero() {
  const stats = [
    { value: `${projects.length}+`, label: 'Projects Built' },
    { value: '2+', label: 'Years Coding' },
    { value: '15+', label: 'Technologies' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-graphite-900/40 via-graphite-950 to-graphite-950 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h2 className="font-inter tracking-[0.3em] text-gold-burned/80 text-xs sm:text-sm uppercase mb-6">
            Software Engineer &amp; Builder
          </h2>
          <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-graphite-200 to-graphite-500 mb-8 text-glow">
            FORGING <br className="md:hidden" />
            <span className="text-gold-burned">DIGITAL</span> REALMS
          </h1>
          <p className="font-inter text-graphite-300 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            I craft highly usable, performant, and cinematic web experiences. 
            Blending solid engineering principles with premium design aesthetics to build the future of the web.
          </p>

          {/* Stat Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-8 mb-12"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="font-cinzel text-2xl font-bold text-gold-burned">{stat.value}</span>
                <span className="font-inter text-graphite-500 text-xs tracking-widest uppercase mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a href="#projects" className="group relative px-8 py-3 bg-gold-burned/10 text-gold-burned font-inter tracking-widest uppercase text-sm border border-gold-burned/50 hover:bg-gold-burned hover:text-black transition-all duration-300 overflow-hidden">
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 h-full w-full bg-gold-burned scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out -z-0"></div>
          </a>
          <a
            href="/personal-resume.pdf"
            download="personal-resume.pdf"
            id="resume-download-btn"
            className="group relative px-8 py-3 bg-gold-burned text-black font-inter tracking-widest uppercase text-sm font-semibold hover:bg-gold-burned/80 transition-all duration-300 flex items-center gap-2"
          >
            <Download size={15} strokeWidth={2.5} />
            Download Resume
          </a>
          <a href="#contact" className="px-8 py-3 text-graphite-300 font-inter tracking-widest uppercase text-sm hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-white hover:after:w-1/2 after:transition-all after:duration-300">
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-graphite-500 hover:text-gold-burned transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={32} strokeWidth={1} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
