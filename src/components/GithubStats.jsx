import { motion } from 'framer-motion';

// Mocking github contribution data for the cinematic look
const generateMockContributions = () => {
  const weeks = 52;
  const days = 7;
  const grid = [];
  
  for (let i = 0; i < weeks; i++) {
    const week = [];
    for (let j = 0; j < days; j++) {
      // Randomize activity level: 0 to 4
      // Heavy weighting towards 0-1, occasional 2-4
      const rand = Math.random();
      let level = 0;
      if (rand > 0.6) level = 1;
      if (rand > 0.85) level = 2;
      if (rand > 0.95) level = 3;
      if (rand > 0.98) level = 4;
      
      week.push(level);
    }
    grid.push(week);
  }
  return grid;
};

export default function GithubStats() {
  const grid = generateMockContributions();
  
  // Color mapping based on the cinematic dark theme
  const getLevelColor = (level) => {
    switch(level) {
      case 1: return 'bg-graphite-800';
      case 2: return 'bg-graphite-600';
      case 3: return 'bg-gold-burned/60';
      case 4: return 'bg-gold-burned shadow-[0_0_8px_rgba(184,151,65,0.8)]';
      default: return 'bg-graphite-900/50 border border-graphite-800/30';
    }
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-3xl font-bold text-white tracking-widest uppercase mb-2">
            Chronicles of Code
          </h2>
          <p className="font-inter text-graphite-400 text-sm tracking-widest uppercase">
            GitHub Contributions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass-card p-6 overflow-x-auto"
        >
          <div className="min-w-[800px]">
            <div className="flex gap-1">
              {grid.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-1">
                  {week.map((level, dIndex) => (
                    <div 
                      key={`${wIndex}-${dIndex}`} 
                      className={`w-3 h-3 rounded-sm ${getLevelColor(level)} transition-colors duration-300 hover:border-white/50 hover:border`}
                      title={`Contribution level: ${level}`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4 text-xs font-inter text-graphite-500 uppercase tracking-widest">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-graphite-900/50 border border-graphite-800/30"></div>
                <div className="w-3 h-3 rounded-sm bg-graphite-800"></div>
                <div className="w-3 h-3 rounded-sm bg-graphite-600"></div>
                <div className="w-3 h-3 rounded-sm bg-gold-burned/60"></div>
                <div className="w-3 h-3 rounded-sm bg-gold-burned"></div>
              </div>
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
