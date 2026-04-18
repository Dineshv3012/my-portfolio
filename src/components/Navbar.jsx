import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Briefcase, User, Wrench, FolderOpen, Mail } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navLinks = [
    { name: 'Home', icon: <Briefcase className="w-4 h-4" />, href: '#hero' },
    { name: 'About', icon: <User className="w-4 h-4" />, href: '#about' },
    { name: 'Services', icon: <Briefcase className="w-4 h-4" />, href: '#services' },
    { name: 'Skills', icon: <Wrench className="w-4 h-4" />, href: '#skills' },
    { name: 'Projects', icon: <FolderOpen className="w-4 h-4" />, href: '#projects' },
    { name: 'Contact', icon: <Mail className="w-4 h-4" />, href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="glass-nav z-50 overflow-visible"
    >
      <div className="w-full flex items-center justify-between px-4 md:px-10">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 shrink-0 border-2 border-white/20">
            D
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">Dinesh <span className="text-primary italic">V</span></span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-4 lg:gap-8 items-center text-sm font-semibold text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary transition-colors relative group whitespace-nowrap">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <button 
            onClick={toggleDarkMode}
            className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:scale-110 transition-all shadow-sm"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="bg-primary hover:bg-primary-hover text-white px-5 md:px-7 py-3 rounded-xl font-bold text-sm shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 active:scale-95 hidden lg:block">
            Hire Me
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
