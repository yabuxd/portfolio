import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
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
            Software Engineer & Builder
          </h2>
          <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-graphite-200 to-graphite-500 mb-8 text-glow">
            FORGING <br className="md:hidden" />
            <span className="text-gold-burned">DIGITAL</span> REALMS
          </h1>
          <p className="font-inter text-graphite-300 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            I craft highly usable, performant, and cinematic web experiences. 
            Blending solid engineering principles with premium design aesthetics to build the future of the web.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#projects" className="group relative px-8 py-3 bg-gold-burned/10 text-gold-burned font-inter tracking-widest uppercase text-sm border border-gold-burned/50 hover:bg-gold-burned hover:text-black transition-all duration-300">
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 h-full w-full bg-gold-burned scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out -z-0"></div>
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
