import { motion } from 'framer-motion';
import portfolioImg from '../asset/portfolio.webp';

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gold-burned/5 blur-3xl -z-10 rounded-full"></div>
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
              ABOUT <span className="text-gold-burned">ME</span>
            </h2>
            <div className="w-20 h-[1px] bg-gold-burned/50 mb-8"></div>
            
            <div className="space-y-5 font-inter text-graphite-300 leading-relaxed">
              <p>
                I'm a Computer Science student and software developer with a strong passion for building resilient, scalable applications, from the backend systems that power them to the frontend interfaces that users love. I care deeply about how complex systems work under the hood, and I bring that same rigor to every layer of the stack.
              </p>
              <p>
                My work lives at the intersection of solid engineering and thoughtful design. I believe great software must perform flawlessly <em>and</em> feel intuitive, which is why I'm equally invested in architecture decisions, database design, and crafting polished UI experiences.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-graphite-800/50">
              <div>
                <h3 className="font-cinzel text-xl text-white mb-2">Focus</h3>
                <p className="font-inter text-sm text-graphite-400">Full-Stack Development, UI/UX, Systems Architecture</p>
              </div>
              <div>
                <h3 className="font-cinzel text-xl text-white mb-2">Philosophy</h3>
                <p className="font-inter text-sm text-graphite-400">Minimalism, Performance, Cinematic Presentation</p>
              </div>
            </div>
          </div>
          
          <div className="relative group perspective-1000 hidden md:block">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto glass-card border border-graphite-700 p-4 transition-transform duration-700 hover:rotate-y-12">
              <div className="absolute inset-0 bg-gradient-to-tr from-graphite-900 via-transparent to-graphite-800 opacity-50"></div>
              <div className="w-full h-full border border-graphite-600/50 flex flex-col items-center justify-center relative overflow-hidden bg-graphite-950/80">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-burned/50 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-burned/50 to-transparent z-10"></div>
                
                <img 
                  src={portfolioImg} 
                  alt="Portfolio Profile" 
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover filter brightness-90 contrast-110 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
