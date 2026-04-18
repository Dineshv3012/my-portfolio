import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Play } from 'lucide-react';

const ProjectCard = ({ title, desc, tags, githubUrl, image }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800"
  >
    <div className="aspect-video overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
      />
    </div>
    
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
      <div className="space-y-3">
        <div className="flex gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-white/80">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-sm text-slate-400 line-clamp-2">{desc}</p>
        
        <div className="flex gap-4 pt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-white bg-primary px-4 py-2 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            <Code className="w-4 h-4" /> Code
          </a>
          <button className="flex items-center gap-2 text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl transition-transform">
            <Play className="w-4 h-4" /> Demo
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const allProjects = [
    { 
      title: "EduBuild Platform", 
      desc: "A comprehensive educational building and management system designed to streamline learning workflows and resource allocation.", 
      tags: ["React", "Node.js", "Education"],
      githubUrl: "https://github.com/chennakeshavareddynandarapu-commits/Edubuild3.git",
      image: "/edubuild.png"
    },
    { 
      title: "Blood Bank Management System (BBMS)", 
      desc: "A robust management system for blood banks, tracking donor records, blood inventory, and distribution with real-time updates.", 
      tags: ["Full Stack", "Database", "Healthcare"],
      githubUrl: "https://github.com/Dineshv3012/bbms.git",
      image: "/bbms.png"
    },
  ];

  return (
    <section id="projects" className="py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          My <span className="text-primary italic">Projects</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          A showcase of my recent work across different technologies and domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-12 px-4">
        {allProjects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all shadow-xl hover:shadow-primary/20 active:scale-95 flex items-center gap-2">
          View All Projects <ExternalLink className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
