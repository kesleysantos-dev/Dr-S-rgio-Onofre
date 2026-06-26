import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Briefcase, Building2, Gavel, FileText } from 'lucide-react';
import './PracticeAreas.css';

const areas = [
  {
    id: 1,
    title: 'Direito Empresarial',
    description: 'Assessoria completa para empresas, desde a constituição societária até fusões e aquisições, focando na segurança e crescimento sustentável.',
    icon: <Building2 size={32} />
  },
  {
    id: 2,
    title: 'Direito do Trabalho',
    description: 'Atuação consultiva e contenciosa focada na prevenção de passivos trabalhistas e na defesa contundente dos interesses corporativos.',
    icon: <Briefcase size={32} />
  },
  {
    id: 3,
    title: 'Contencioso Cível',
    description: 'Representação em litígios complexos, disputas contratuais e responsabilidade civil, sempre com estratégias precisas e de alto impacto.',
    icon: <Gavel size={32} />
  },
  {
    id: 4,
    title: 'Contratos Complexos',
    description: 'Elaboração e revisão de instrumentos contratuais nacionais e internacionais com foco na mitigação de riscos operacionais e jurídicos.',
    icon: <FileText size={32} />
  }
];

const PracticeAreas = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="practice-section" id="atuacao">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header text-center"
        >
          <span className="text-gold section-subtitle">Nossa Expertise</span>
          <h2 className="heading-lg">Áreas de Atuação</h2>
        </motion.div>

        <div className="accordion-container">
          {areas.map((area) => (
            <motion.div 
              key={area.id}
              className={`accordion-item ${activeId === area.id ? 'active' : ''}`}
              onClick={() => setActiveId(area.id)}
              layout
            >
              <div className="accordion-icon">
                {area.icon}
              </div>
              <div className="accordion-content">
                <h3 className="heading-md">{area.title}</h3>
                {activeId === area.id && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-body-lg"
                  >
                    {area.description}
                  </motion.p>
                )}
                <div className="accordion-btn-wrapper">
                  <span className="accordion-explore">Explorar <ChevronRight size={16} /></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
