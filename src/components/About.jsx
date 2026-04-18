import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-24 flex flex-col md:flex-row items-center gap-16 md:gap-24 relative">
      {/* Decorative Star/Geometric Background */}
      <div className="flex-1 relative flex justify-center items-center py-12">
        {/* The Star Background - Scaled and centered */}
        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] -z-10 flex items-center justify-center opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#FF8C00] animate-pulse">
            <path d="M50 0L61 35H98L68 57L79 92L50 70L21 92L32 57L2 35H39L50 0Z" />
          </svg>
        </div>
        
        {/* Glow behind star */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 bg-orange-400 rotate-45 blur-[120px] rounded-3xl -z-20 opacity-40"></div>
        
        {/* Main Image Container - Fixed Dimensions to anchor orbitals */}
        <div className="relative z-10 w-[300px] md:w-[350px] aspect-[4/5]">
          <div className="w-full h-full rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.3)] group">
            <img 
              src="/dinesh-about.jpg" 
              alt="About Dinesh V" 
              className="w-full h-full object-cover object-top scale-[1.15] transition-transform duration-700 group-hover:scale-125"
            />
          </div>
          
          {/* Orbital Icons - Correctly anchored and rotating */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <motion.div 
              initial={{ rotate: 0, x: "-50%", y: "-50%" }}
              animate={{ rotate: 360, x: "-50%", y: "-50%" }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-[115%] aspect-square"
            >
              {/* JS Icon */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-xl shadow-lg flex items-center justify-center text-black font-bold text-lg"
              >Js</motion.div>
              
              {/* Atom/React Icon */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-sky-500 rounded-xl shadow-lg flex items-center justify-center text-white font-bold"
              >
                <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-full h-0.5 bg-white rotate-45 absolute"></div>
                  <div className="w-full h-0.5 bg-white -rotate-45 absolute"></div>
                </div>
              </motion.div>

              {/* Coffee/Cup Icon */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-800 rounded-xl shadow-lg flex items-center justify-center text-white"
              >☕</motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="flex-1 space-y-10">
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            About <span className="text-primary italic">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed max-w-lg"
          >
            I am a Computer Science Engineering student with a strong passion for technology, innovation, and problem-solving. I enjoy building web applications, exploring artificial intelligence, and designing modern user interfaces.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-2"
          >
            <h4 className="font-bold text-slate-700 dark:text-slate-200">I focus on:</h4>
            <ul className="list-disc list-inside text-slate-500 space-y-1">
              <li>Creating responsive and user-friendly web apps</li>
              <li>Developing AI-based tools and automation systems</li>
              <li>Designing unique and interactive UI/UX experiences</li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[{ label: "Projects Completed", count: "10+" }, { label: "Tech Mastered", count: "5+" }, { label: "Learner", count: "💡" }].map(({ label, count }) => (
            <div key={label} className="glass-card hover:bg-primary/10 transition-colors p-4 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center">
              <span className="text-3xl font-extrabold text-primary">{count}</span>
              <span className="text-xs uppercase font-semibold text-slate-400 mt-1 text-center">{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-2xl font-bold shadow-xl transition-all"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

export default About;
