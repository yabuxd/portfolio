import { motion } from 'framer-motion';
import { Database, Layout, Server, Network, Shield, Cpu } from 'lucide-react';

const skills = [
  {
    category: "Core & Systems",
    icon: <Cpu className="w-6 h-6 text-gold-burned" />,
    items: ["Data Structures", "Algorithms", "Systems Architecture", "Design Patterns"]
  },
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-gold-burned" />,
    items: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "HTML/CSS", "JavaScript"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-gold-burned" />,
    items: ["Node.js", "Express", "RESTful APIs", "Authentication"]
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6 text-gold-burned" />,
    items: ["PostgreSQL", "MongoDB", "SQLite", "Database Design"]
  },
  {
    category: "Networking",
    icon: <Network className="w-6 h-6 text-gold-burned" />,
    items: ["TCP/IP", "Packet Tracer", "Routing", "Network Security"]
  },
  {
    category: "Tools & Dev",
    icon: <Shield className="w-6 h-6 text-gold-burned" />,
    items: ["Git & GitHub", "Linux CLI", "Postman", "Agile/Scrum"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-graphite-950/50 border-y border-graphite-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            THE <span className="text-gold-burned">ARSENAL</span>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-card glass-card-hover p-8 group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-graphite-800/50 rounded-lg mr-4 border border-graphite-700 group-hover:border-gold-burned/30 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="font-cinzel text-xl text-white tracking-wide">{skill.category}</h3>
              </div>
              <ul className="space-y-3 font-inter text-sm text-graphite-300">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-burned/50 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
