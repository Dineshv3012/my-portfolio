import React from 'react';
import { Github, Twitter, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col items-center gap-12 text-center rounded-t-[60px]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white font-bold text-2xl">
          D
        </div>
        <h3 className="text-3xl font-extrabold tracking-tight">Dinesh <span className="text-primary italic">V</span></h3>
        <p className="text-slate-500 max-w-sm">Designing and coding beautiful things, and I love what I do.</p>
      </div>

      <div className="flex gap-6 items-center">
        {[
          { Icon: Github, link: "https://github.com/Dineshv3012" },
          { Icon: Twitter, link: "#" },
          { Icon: Linkedin, link: "https://www.linkedin.com/in/dinesh-v-667034306/" },
          { Icon: MessageCircle, link: "https://wa.me/918148153012" }
        ].map(({ Icon, link }, idx) => (
          <motion.a 
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10, color: '#25D366' }}
            className="p-3 bg-white dark:bg-slate-900 shadow-md border-2 border-transparent hover:border-primary/20 transition-all rounded-2xl text-slate-400 cursor-pointer"
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 bg-primary hover:bg-primary-hover text-white flex items-center justify-center rounded-full shadow-lg shadow-primary/30 transition-all hover:-translate-y-2"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Back To Top</p>
      </div>

      <div className="text-slate-500 text-sm font-medium">
        © 2026 Dinesh V. All Rights Reserved. Built with <span className="text-primary">React</span> & <span className="text-primary">Tailwind</span>.
      </div>
    </footer>
  );
};

export default Footer;
