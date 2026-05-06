import { motion } from 'framer-motion';

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
              THE <span className="text-gold-burned">ARCHITECT</span>
            </h2>
            <div className="w-20 h-[1px] bg-gold-burned/50 mb-8"></div>
            
            <div className="space-y-6 font-inter text-graphite-300 leading-relaxed">
              <p>
                I am a Computer Science student and software developer with a profound passion for building resilient, scalable, and visually striking applications. 
              </p>
              <p>
                My journey in technology is driven by an insatiable curiosity for how complex systems operate under the hood—from low-level data structures and databases to modern, dynamic frontend frameworks like React.
              </p>
              <p>
                I believe that excellent software should not only perform flawlessly but also provide an immersive and intuitive experience for the user. Every line of code is a brick in the fortress; every UI component is a window into the realm.
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
            {/* Cinematic framed element instead of a generic portrait (or can be replaced by user's photo) */}
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto glass-card border border-graphite-700 p-4 transition-transform duration-700 hover:rotate-y-12">
              <div className="absolute inset-0 bg-gradient-to-tr from-graphite-900 via-transparent to-graphite-800 opacity-50"></div>
              <div className="w-full h-full border border-graphite-600/50 flex flex-col items-center justify-center relative overflow-hidden bg-graphite-950/80">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-burned/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-burned/50 to-transparent"></div>
                
                <span className="font-cinzel text-gold-burned/20 text-9xl font-bold">O.G</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
