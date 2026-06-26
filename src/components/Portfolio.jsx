import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Portfolio.css';

const cases = [
  {
    id: 1,
    category: 'Direito Tributário',
    title: 'Recuperação de Créditos Fiscais Excedentes',
    description: 'Atuamos de forma incisiva em uma complexa auditoria fiscal, revertendo multas indevidas e recuperando valores substanciais para o caixa da empresa, garantindo fôlego financeiro para sua expansão.',
    year: '2026',
    img: '/assets/portfolio_1.png'
  },
  {
    id: 2,
    category: 'Fusões e Aquisições',
    title: 'Reestruturação Societária Multinacional',
    description: 'Assessoramos uma fusão transnacional avaliada em milhões, blindando os ativos dos sócios fundadores e garantindo conformidade com regulações internacionais de forma segura e ágil.',
    year: '2025',
    img: '/assets/hero_bg.png'
  },
  {
    id: 3,
    category: 'Contencioso Cível',
    title: 'Defesa em Litígio Contratual de Alta Complexidade',
    description: 'Vitória estratégica em um processo judicial de quebra de contrato, onde nossa equipe desmontou a tese adversária através de uma análise pericial minuciosa e jurisprudência sólida.',
    year: '2025',
    img: '/assets/portfolio_1.png'
  },
  {
    id: 4,
    category: 'Direito do Trabalho',
    title: 'Mitigação de Passivo Trabalhista',
    description: 'Implementamos um programa premium de compliance trabalhista que reduziu o passivo judicial da corporação parceira em 85% no período de apenas um ano de atuação preventiva.',
    year: '2024',
    img: '/assets/hero_bg.png'
  }
];

const Portfolio = () => {
  const [activeCase, setActiveCase] = useState(cases[0]);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="portfolio-header-top">
            <span className="text-gold section-subtitle">Casos de Sucesso</span>
            <a href="#" className="btn-primary">Ver Todos os Casos</a>
          </div>
          <h2 className="heading-lg">Portfólio Editorial</h2>
        </motion.div>

        <div className="portfolio-grid">
          <div className="portfolio-featured">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="portfolio-featured-inner"
              >
                <div className="portfolio-img-wrapper">
                  <img src={activeCase.img} alt={activeCase.title} className="portfolio-img" />
                  <div className="portfolio-overlay"></div>
                </div>
                <div className="portfolio-content">
                  <span className="portfolio-category text-gold">{activeCase.category}</span>
                  <h3 className="heading-md">{activeCase.title}</h3>
                  <p className="portfolio-description">{activeCase.description}</p>
                  <div className="portfolio-footer">
                    <span className="portfolio-year">{activeCase.year}</span>
                    <button className="portfolio-link active"><ArrowUpRight size={24} /></button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="portfolio-list">
            {cases.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`portfolio-list-item ${activeCase.id === item.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveCase(item)}
                onClick={() => setActiveCase(item)}
              >
                <div className="portfolio-list-content">
                  <span className="portfolio-category text-gold">{item.category}</span>
                  <h3 className="heading-md">{item.title}</h3>
                </div>
                <div className="portfolio-list-action">
                  <span className="portfolio-year">{item.year}</span>
                  <button className="portfolio-link"><ArrowUpRight size={24} /></button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
