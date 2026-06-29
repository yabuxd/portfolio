import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X } from 'lucide-react';

export default function AIChatButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after a 3-second delay on mount
    const timer = setTimeout(() => {
      const isDismissed = sessionStorage.getItem('ai-chat-tooltip-dismissed');
      if (!isDismissed) {
        setShowTooltip(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const dismissTooltip = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    sessionStorage.setItem('ai-chat-tooltip-dismissed', 'true');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Speech/Greeting Bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="pointer-events-auto relative max-w-[240px] md:max-w-[280px] bg-graphite-900/95 backdrop-blur-md border border-gold-burned/40 px-4 py-3 rounded-2xl rounded-br-none shadow-[0_10px_25px_rgba(0,0,0,0.5),_0_0_15px_rgba(184,151,65,0.15)]"
          >
            {/* Close button */}
            <button
              onClick={dismissTooltip}
              className="absolute top-2 right-2 text-graphite-500 hover:text-gold-burned transition-colors"
              aria-label="Dismiss tooltip"
            >
              <X size={14} />
            </button>
            <div className="pr-4">
              <p className="font-cinzel text-[10px] text-gold-burned font-bold tracking-widest uppercase mb-1">
                AI Assistant
              </p>
              <p className="font-inter text-xs text-graphite-200 leading-relaxed">
                Hey! Got questions about Yeabtsega's work or skills? Ask my AI! 🤖
              </p>
            </div>
            {/* Bubble arrow */}
            <div className="absolute right-4 bottom-[-6px] w-3 h-3 bg-graphite-900 border-r border-b border-gold-burned/40 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        className="pointer-events-auto"
      >
        <Link
          to="/chatbot"
          className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-graphite-950/90 to-graphite-900/90 border border-gold-burned/40 hover:border-gold-burned text-gold-burned hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(184,151,65,0.15)] hover:shadow-[0_0_30px_rgba(184,151,65,0.35)] backdrop-blur-md overflow-hidden"
          aria-label="Chat with AI"
        >
          {/* Subtle pulse background animation */}
          <span className="absolute inset-0 bg-gold-burned/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
          
          <span className="absolute -inset-px rounded-full bg-gradient-to-tr from-gold-burned/0 via-gold-burned/20 to-gold-burned/0 opacity-0 group-hover:opacity-100 animate-glow-pulse transition-opacity duration-300" />
          
          <Bot className="relative z-10 w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" strokeWidth={1.75} />
        </Link>
      </motion.div>
    </div>
  );
}
