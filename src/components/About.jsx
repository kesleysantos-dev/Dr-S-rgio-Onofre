import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Award } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="sobre">
      <div className="container about-container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="about-content"
        >
          <div className="section-header">
            <span className="text-gold section-subtitle">Sobre o Escritório</span>
            <h2 className="heading-lg">Tradição & Excelência em Cada Decisão.</h2>
          </div>
          
          <p className="text-body-lg about-text">
            Sérgio Onofre Advocacia nasceu do compromisso inabalável com a justiça e a ética. 
            Nossa banca é formada por especialistas renomados que entendem as complexidades 
            do direito moderno e atuam com precisão cirúrgica em casos de alta complexidade.
          </p>
          <p className="text-body-lg about-text">
            Acreditamos que cada cliente é único e merece uma estratégia legal personalizada, 
            pautada na transparência, na confidencialidade e na busca incansável por resultados excepcionais.
          </p>
          
          <div className="about-features">
            <div className="feature-item">
              <ShieldCheck className="text-gold" size={24} />
              <span>Segurança Jurídica</span>
            </div>
            <div className="feature-item">
              <Scale className="text-gold" size={24} />
              <span>Atuação Ética</span>
            </div>
            <div className="feature-item">
              <Award className="text-gold" size={24} />
              <span>Excelência Comprovada</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="about-metrics"
        >
          <div className="metrics-grid">
            <div className="metric-card glass-panel">
              <h3 className="text-gold heading-md">98%</h3>
              <p>de Casos Resolvidos com Sucesso</p>
            </div>
            <div className="metric-card glass-panel highlight">
              <h3 className="heading-md">20+</h3>
              <p>Anos de Experiência e Tradição</p>
            </div>
            <div className="metric-card glass-panel highlight">
              <h3 className="heading-md">5k+</h3>
              <p>Clientes Atendidos e Satisfeitos</p>
            </div>
            <div className="metric-card glass-panel">
              <h3 className="text-gold heading-md">24/7</h3>
              <p>Suporte Estratégico Exclusivo</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
