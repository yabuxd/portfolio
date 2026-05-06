import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            SUMMON <span className="text-gold-burned">ME</span>
          </h2>
          <p className="font-inter text-graphite-400 uppercase tracking-widest text-sm">
            Send a raven or leave a message
          </p>
          <div className="w-24 h-[1px] bg-gold-burned/50 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 glass-card p-8 md:p-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-cinzel text-2xl text-white mb-6">Connect</h3>
              <p className="font-inter text-graphite-300 text-sm leading-relaxed mb-8">
                Whether you have a proposition for a new realm, or just want to discuss architectures and algorithms, my gates are always open.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:yabuxd56@gmail.com" className="flex items-center text-graphite-300 hover:text-gold-burned transition-colors group">
                <div className="w-10 h-10 rounded-sm bg-graphite-900 border border-graphite-700 flex items-center justify-center mr-4 group-hover:border-gold-burned/50 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="font-inter tracking-wide text-sm">yabuxd56@gmail.com</span>
              </a>
              
              <div className="flex gap-4 pt-6 border-t border-graphite-800/50">
                <a href="https://github.com/yabu_xd" target="_blank" rel="noopener noreferrer" title="github.com/yabu_xd" className="w-10 h-10 rounded-sm bg-graphite-900 border border-graphite-700 flex items-center justify-center text-graphite-400 hover:text-white hover:border-graphite-500 transition-all">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/yabu_xd" target="_blank" rel="noopener noreferrer" title="yabu_xd" className="w-10 h-10 rounded-sm bg-graphite-900 border border-graphite-700 flex items-center justify-center text-graphite-400 hover:text-white hover:border-graphite-500 transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="https://instagram.com/yabu_xd" target="_blank" rel="noopener noreferrer" title="yabu_xd" className="w-10 h-10 rounded-sm bg-graphite-900 border border-graphite-700 flex items-center justify-center text-graphite-400 hover:text-white hover:border-graphite-500 transition-all">
                  <Instagram size={18} />
                </a>
                <a href="https://t.me/yabuxd56" target="_blank" rel="noopener noreferrer" title="t.me/yabuxd56" className="w-10 h-10 rounded-sm bg-graphite-900 border border-graphite-700 flex items-center justify-center text-graphite-400 hover:text-white hover:border-graphite-500 transition-all">
                  <Send size={18} className="transform -rotate-45 ml-1" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-3"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-cinzel text-sm text-graphite-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-graphite-900/50 border border-graphite-700 rounded-sm px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-gold-burned/50 transition-colors placeholder:text-graphite-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-cinzel text-sm text-graphite-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-graphite-900/50 border border-graphite-700 rounded-sm px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-gold-burned/50 transition-colors placeholder:text-graphite-600"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block font-cinzel text-sm text-graphite-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-graphite-900/50 border border-graphite-700 rounded-sm px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-gold-burned/50 transition-colors placeholder:text-graphite-600 resize-none"
                  placeholder="What brings you to my realm?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="group relative w-full flex justify-center items-center py-3 bg-graphite-800 border border-graphite-600 hover:border-gold-burned/50 text-white font-inter tracking-widest uppercase text-sm transition-all duration-300"
              >
                <span className="mr-2">Send Dispatch</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 h-full w-full bg-gold-burned/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out -z-0"></div>
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
