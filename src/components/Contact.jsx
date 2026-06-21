import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Instagram, CheckCircle, XCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xwvdeogd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
            GET IN <span className="text-gold-burned">TOUCH</span>
          </h2>
          <p className="font-inter text-graphite-400 uppercase tracking-widest text-sm">
            Open to opportunities, collaborations, and conversations
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
                Whether you have a project idea, a job opportunity, or just want to talk tech, I'm always happy to connect.
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
                <a href="https://github.com/yabuxd" target="_blank" rel="noopener noreferrer" title="github.com/yabuxd" className="w-10 h-10 rounded-sm bg-graphite-900 border border-graphite-700 flex items-center justify-center text-graphite-400 hover:text-white hover:border-graphite-500 transition-all">
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
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center space-y-4"
              >
                <CheckCircle size={48} className="text-gold-burned" />
                <h4 className="font-cinzel text-2xl text-white">Message Sent!</h4>
                <p className="font-inter text-graphite-300 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-gold-burned text-sm font-inter tracking-widest uppercase hover:underline"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-cinzel text-sm text-graphite-400 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-graphite-900/50 border border-graphite-700 rounded-sm px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-gold-burned/50 transition-colors placeholder:text-graphite-600"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-cinzel text-sm text-graphite-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-graphite-900/50 border border-graphite-700 rounded-sm px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-gold-burned/50 transition-colors placeholder:text-graphite-600"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-cinzel text-sm text-graphite-400 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="4" 
                    className="w-full bg-graphite-900/50 border border-graphite-700 rounded-sm px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-gold-burned/50 transition-colors placeholder:text-graphite-600 resize-none"
                    placeholder="What's on your mind?"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm font-inter">
                    <XCircle size={16} />
                    <span>Something went wrong. Please try again or email me directly.</span>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="group relative w-full flex justify-center items-center py-3 bg-graphite-800 border border-graphite-600 hover:border-gold-burned/50 text-white font-inter tracking-widest uppercase text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="mr-2 relative z-10">
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </span>
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 h-full w-full bg-gold-burned/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
                </button>
              </form>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
