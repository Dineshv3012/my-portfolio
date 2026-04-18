import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';

const ContactInfo = ({ Icon, title, desc }) => (
  <div className="flex items-center gap-6 p-6 glass-card border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-colors">
    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  </div>
);

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    const formData = new FormData(event.target);

    formData.append("access_key", "53e35e56-c3c4-4879-91dd-88fe9363882d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setStatus('success');
      event.target.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Get In <span className="text-primary italic">Touch</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind? Let's discuss it and build something amazing together.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side - Info */}
        <div className="flex-1 space-y-6 w-full lg:w-max">
          <ContactInfo Icon={Mail} title="Email" desc="dinesh30122006@gmail.com" />
          <ContactInfo Icon={MapPin} title="Address" desc="Chennai, Tamil Nadu, India" />
        </div>

        {/* Right Side - Form */}
        <motion.form 
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-[2] w-full glass-card bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-10 rounded-[40px] space-y-8 relative overflow-hidden"
        >
          {status === 'success' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 z-50 bg-white/90 dark:bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 space-y-4"
            >
              <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-slate-500">Thank you for reaching out. I'll get back to you soon.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-primary font-bold hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-tight">Full Name</label>
              <input 
                name="name"
                required
                type="text" 
                placeholder="John Doe" 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-primary outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 font-medium" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-tight">Email Address</label>
              <input 
                name="email"
                required
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-primary outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 font-medium" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-tight">Message</label>
            <textarea 
              name="message"
              required
              rows="4" 
              placeholder="Your Message..." 
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-primary outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 font-medium resize-none text-black"
            ></textarea>
          </div>

          <motion.button 
             disabled={status === 'sending'}
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className={`w-full py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 transition-all ${
               status === 'sending' ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-hover text-white shadow-primary/20'
             }`}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
            <Send className={`w-5 h-5 ${status === 'sending' ? 'animate-pulse' : ''}`} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
