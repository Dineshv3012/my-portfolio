import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageSquare, MessageCircle, Twitter, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Full Stack Developer", "CSE Student", "Dinesh V"];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const handleType = () => {
    const currentWord = words[loopNum % words.length];
    
    // Stop condition: Final word "Dinesh V" is fully typed and we are on the last loop index
    if (loopNum === words.length - 1 && !isDeleting && text === currentWord) {
      return;
    }

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
      setTypingSpeed(80);
    } else {
      setText(currentWord.substring(0, text.length + 1));
      setTypingSpeed(150);
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    }
  };

  return (
    <section id="hero" className="min-h-[90vh] pt-32 flex flex-col md:flex-row items-center justify-between gap-12 relative">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/10 blur-[150px] -z-10 animate-pulse"></div>

      {/* Left Content */}
      <div className="flex-1 space-y-8 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-4"
        >
          {[
            { Icon: Github, link: "https://github.com/Dineshv3012" },
            { Icon: Linkedin, link: "https://www.linkedin.com/in/dinesh-v-667034306/" },
            { Icon: MessageCircle, link: "https://wa.me/918148153012" },
            { Icon: Twitter, link: "#" }
          ].map(({ Icon, link }, idx) => (
            <motion.a 
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors glass-card"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-tight min-h-[2.4em] md:min-h-[1.5em] tracking-tight text-slate-800 dark:text-white lg:pr-8">
            Hi, I'm <span className="text-primary">{text}</span>
            {!(loopNum === words.length - 1 && !isDeleting && text === words[words.length - 1]) && (
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1.5 md:w-2 h-[0.9em] ml-1 bg-primary align-middle -mt-1 md:-mt-2"
              />
            )}
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed mt-4">
            I build modern, high-performance web applications with clean UI/UX and scalable backend systems. Passionate about creating innovative digital products and AI-powered solutions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a 
            href="/dinesh-cv.pdf"
            download="Dinesh_V_CV.pdf"
            className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl hover:shadow-primary/30 active:scale-95 group"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
          </a>
          <a 
            href="https://wa.me/918148153012"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
          >
            <MessageSquare className="w-5 h-5" />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right Content - Real Photo with Surrounding Design */}
      <div className="flex-1 relative flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative group w-full max-w-[450px]"
        >
          {/* Main Photo Container */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="w-full aspect-[4/5] rounded-[3.5rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <img 
                src="/dinesh-hero.jpg" 
                alt="Dinesh V Hero" 
                className="w-full h-full object-cover object-top scale-[1.15] transition-transform duration-700 group-hover:scale-125"
              />
            </div>
            {/* "Hi" Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute top-10 -right-6 bg-[#FF8C00] text-white px-6 py-2 rounded-full font-black text-xl shadow-xl border-4 border-white dark:border-slate-800 z-30 flex items-center gap-2"
            >
              Hi <span className="text-2xl animate-bounce leading-none">👋</span>
              <div className="absolute -bottom-3 left-6 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#FF8C00]"></div>
            </motion.div>
          </motion.div>
          
          {/* Background Decorative Shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border-2 border-dashed border-primary/20 rounded-[4rem] -z-10"
          ></motion.div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary rotate-[15deg] -z-20 scale-110 opacity-10 rounded-[3rem] animate-morph"></div>

          {/* Floating Icons Decors - Enhanced set */}
          <motion.div 
            animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-6 -left-8 p-3 glass-card rounded-2xl bg-blue-500/10 z-20 backdrop-blur-md border border-white/40 shadow-xl"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">Ai</div>
          </motion.div>

          <motion.div 
            animate={{ y: [15, -15, 15], rotate: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute top-[20%] -right-12 p-3 glass-card rounded-2xl bg-orange-500/10 z-20 backdrop-blur-md border border-white/40 shadow-xl"
          >
            <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">Js</div>
          </motion.div>

          <motion.div 
            animate={{ x: [-10, 10, -10], y: [10, -10, 10] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            className="absolute bottom-4 -left-14 p-3 glass-card rounded-2xl bg-primary/10 z-20 backdrop-blur-md border border-white/40 shadow-xl"
          >
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              <div className="w-6 h-6 border-4 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [15, -15, 15], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-10 -right-10 p-3 glass-card rounded-2xl bg-purple-500/10 z-20 backdrop-blur-md border border-white/40 shadow-xl"
          >
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">Ps</div>
          </motion.div>

          {/* Dots Decor */}
          <div className="absolute top-20 -left-20 hidden lg:grid grid-cols-4 gap-2 opacity-20">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
