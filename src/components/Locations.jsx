import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Locations.css';

const locations = [
  {
    id: 'sp',
    city: 'São Paulo',
    address: 'Av. Brigadeiro Faria Lima, 3064 - Itaim Bibi',
    complement: 'Edifício Infinity Tower, 14º Andar',
    cep: '01451-000',
    phone: '+55 11 3000-0000',
    email: 'sp@sergioonofre.com.br',
    mapUrl: 'https://maps.google.com/maps?q=Av.%20Brigadeiro%20Faria%20Lima,%203064%20S%C3%A3o%20Paulo&t=m&z=15&output=embed&iwloc=near'
  },
  {
    id: 'rj',
    city: 'Rio de Janeiro',
    address: 'Av. Rio Branco, 1 - Centro',
    complement: 'Edifício RB1, 22º Andar',
    cep: '20090-003',
    phone: '+55 21 3000-0000',
    email: 'rj@sergioonofre.com.br',
    mapUrl: 'https://maps.google.com/maps?q=Av.%20Rio%20Branco,%201%20Centro%20Rio%20de%20Janeiro&t=m&z=15&output=embed&iwloc=near'
  },
  {
    id: 'for',
    city: 'Fortaleza',
    address: 'Av. Dom Luís, 500 - Aldeota',
    complement: 'Edifício Aldeota Executive, 8º Andar',
    cep: '60160-230',
    phone: '+55 85 3000-0000',
    email: 'for@sergioonofre.com.br',
    mapUrl: 'https://maps.google.com/maps?q=Av.%20Dom%20Lu%C3%ADs,%20500%20Fortaleza&t=m&z=15&output=embed&iwloc=near'
  }
];

const Locations = () => {
  const [activeTab, setActiveTab] = useState(locations[0]);

  return (
    <section className="locations-section" id="unidades">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header text-center"
        >
          <span className="text-gold section-subtitle">Nossa Presença</span>
          <h2 className="heading-lg">Unidades Estratégicas</h2>
        </motion.div>

        <div className="locations-wrapper">
          <div className="tabs-header">
            {locations.map((loc) => (
              <button
                key={loc.id}
                className={`tab-btn ${activeTab.id === loc.id ? 'active' : ''}`}
                onClick={() => setActiveTab(loc)}
              >
                {loc.city}
              </button>
            ))}
          </div>

          <div className="tab-content-wrapper glass-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="tab-content"
              >
                <div className="location-info">
                  <h3 className="heading-md">{activeTab.city}</h3>
                  <div className="info-list">
                    <div className="info-item">
                      <MapPin className="text-gold" size={24} />
                      <div>
                        <p>{activeTab.address}</p>
                        <p>{activeTab.complement}</p>
                        <p>{activeTab.cep}</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <Phone className="text-gold" size={24} />
                      <p>{activeTab.phone}</p>
                    </div>
                    <div className="info-item">
                      <Mail className="text-gold" size={24} />
                      <p>{activeTab.email}</p>
                    </div>
                  </div>
                  <a href="#contato" className="btn-primary mt-30">Agendar Visita</a>
                </div>
                
                <div className="location-image-wrapper map-wrapper">
                  <iframe 
                    title={`Mapa de ${activeTab.city}`}
                    src={activeTab.mapUrl} 
                    className="location-map"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
