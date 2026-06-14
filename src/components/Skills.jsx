import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Languages & Core",
    skills: ["C/C++", "JavaScript", "Python", "Data Structures", "Algorithms", "Design Patterns", "Systems Architecture"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Vite", "HTML/CSS", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
  {
    category: "Backend & Tools",
    skills: ["Node.js", "Express", "RESTful APIs", "PostgreSQL", "MongoDB", "SQLite", "Git & GitHub", "Linux CLI", "Postman", "TCP/IP", "Networking"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-graphite-950/50 border-y border-graphite-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            TECH <span className="text-gold-burned">STACK</span>
          </h2>
          <p className="font-inter text-graphite-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Forged in logic, honed by practice
          </p>
          <div className="w-24 h-[1px] bg-gold-burned/50 mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillGroups.map((group, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-card glass-card-hover p-7 group">
              <h3 className="font-cinzel text-lg text-white tracking-wide mb-5 pb-3 border-b border-graphite-800 group-hover:border-gold-burned/30 transition-colors">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-inter tracking-wider text-graphite-300 bg-graphite-900 border border-graphite-800 rounded-sm hover:border-gold-burned/40 hover:text-gold-burned transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
