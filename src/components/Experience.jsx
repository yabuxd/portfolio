import { motion } from 'framer-motion';

const timeline = [
  {
    year: "Present",
    title: "Software Engineering Focus",
    subtitle: "Advanced Computer Science Studies",
    description: "Deepening expertise in systems architecture, advanced data structures, and building robust full-stack applications with modern web technologies."
  },
  {
    year: "2023 – 2024",
    title: "Full-Stack Development",
    subtitle: "React & Node.js Ecosystem",
    description: "Built dynamic single-page applications and scalable RESTful APIs. Implemented secure role-based authentication and complex relational database schemas."
  },
  {
    year: "2022 – 2023",
    title: "Core Foundations",
    subtitle: "Algorithms & Databases",
    description: "Established a strong CS foundation, solving algorithmic challenges, designing normalized databases, and mastering low-level data structure implementations."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-graphite-950/50 border-y border-graphite-900/50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            <span className="text-gold-burned">EXPERIENCE</span> & EDUCATION
          </h2>
          <div className="w-24 h-[1px] bg-gold-burned/50 mx-auto mt-4"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line: desktop */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-burned/50 to-transparent -translate-x-1/2 hidden md:block"></div>
          {/* Vertical Line: mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-burned/50 to-transparent md:hidden"></div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-graphite-950 border-2 border-gold-burned rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-1.5 md:mt-0 shadow-[0_0_10px_rgba(184,151,65,0.5)] z-10"></div>
                
                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-1/2 p-5 md:px-10 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="font-inter text-gold-burned/80 text-xs tracking-widest uppercase block mb-1">{item.year}</span>
                  <h3 className="font-cinzel text-xl text-white font-bold mb-1">{item.title}</h3>
                  <h4 className="font-inter text-graphite-400 text-xs uppercase tracking-wider mb-3">{item.subtitle}</h4>
                  <p className="font-inter text-graphite-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
