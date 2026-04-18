import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ name, level, color }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="glass-card hover:bg-slate-50 dark:hover:bg-slate-800 transition-all p-8 flex flex-col gap-6"
  >
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-2xl bg-${color}-500/20 flex items-center justify-center text-${color}-600 font-bold text-xl`}>
        {name[0].toUpperCase()}
      </div>
      <div>
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-sm text-slate-400 font-medium">Proficiency</p>
      </div>
    </div>
    
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm font-bold">
        <span className="text-slate-500 uppercase tracking-widest text-[10px]">Technical Level</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r from-primary to-orange-600 rounded-full`}
        ></motion.div>
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: "Programming",
      skills: [
        { name: "C", level: 85, color: "blue" },
        { name: "JavaScript", level: 90, color: "yellow" },
        { name: "Python", level: 80, color: "sky" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "Angular", level: 85, color: "red" },
        { name: "HTML", level: 95, color: "orange" },
        { name: "CSS", level: 90, color: "blue" },
        { name: "Tailwind CSS", level: 92, color: "teal" }
      ]
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Node.js", level: 80, color: "green" },
        { name: "Firebase", level: 85, color: "amber" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git & GitHub", level: 88, color: "slate" },
        { name: "VS Code", level: 95, color: "blue" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 space-y-20">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase italic leading-tight">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
          A comprehensive toolkit of technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((cat, catIdx) => (
          <div key={cat.title} className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-4">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              {cat.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {cat.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
