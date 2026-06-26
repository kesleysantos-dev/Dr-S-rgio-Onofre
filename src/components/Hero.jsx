import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-badge"
          >
            <span className="text-gold">Escritório de Advocacia</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-xl hero-title"
          >
            Solidez & Precisão <br />
            <span className="text-gold">Jurídica.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-body-lg hero-description"
          >
            Atuação estratégica e personalizada para defender seus interesses com a máxima excelência. Tradição que inspira confiança, inovação que traz resultados.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-buttons"
          >
            <a href="#contato" className="btn-filled hero-btn">
              Fale com um Especialista <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-image-wrapper"
        >
          <div className="hero-image-container">
            <img src="/assets/hero_bg.png" alt="Sérgio Onofre Advocacia" className="hero-image" />
            <div className="hero-image-overlay"></div>
          </div>
          <div className="hero-experience-badge glass-panel">
            <span className="exp-number text-gold">20+</span>
            <span className="exp-text">Anos de<br/>Experiência</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
