import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Palette, Cpu, Zap } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="glass-card p-10 space-y-6 hover:border-primary/50 transition-all group"
  >
    <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
      <Icon className="w-8 h-8" />
    </div>
    <div className="space-y-3">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    { 
      icon: Globe, 
      title: "Full Stack Development", 
      desc: "Building scalable, high-performance web applications using modern stacks like Angular, Node.js, and Firebase." 
    },
    { 
      icon: Palette, 
      title: "UI/UX Design", 
      desc: "Creating intuitive, visually stunning, and user-centric digital experiences with advanced animations and clean layouts." 
    },
    { 
      icon: Cpu, 
      title: "AI Development", 
      desc: "Developing innovative AI-powered tools, multi-agent systems, and automation solutions tailored for real-world impact." 
    },
    { 
      icon: Zap, 
      title: "Website Optimization", 
      desc: "Optimizing web performance, SEO, and user engagement through clean code and modern architectural patterns." 
    }
  ];

  return (
    <section id="services" className="py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          My <span className="text-primary italic">Services</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
          Helping businesses and individuals build premium digital products with cutting-edge technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={service.title} {...service} delay={idx * 0.15} />
        ))}
      </div>
    </section>
  );
};

export default Services;
