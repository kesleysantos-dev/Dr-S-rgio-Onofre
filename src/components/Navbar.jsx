import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <div className="logo-diamond">
            <span>S</span>
          </div>
          <div className="logo-text">
            <h1>SÉRGIO ONOFRE</h1>
            <span>ADVOCACIA</span>
          </div>
        </a>

        <div className="nav-links">
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#atuacao" className="nav-link">Áreas de Atuação</a>
          <a href="#portfolio" className="nav-link">Portfólio</a>
          <a href="#unidades" className="nav-link">Unidades</a>
        </div>

        <div className="nav-actions">
          <a href="#contato" className="btn-primary">Agendar Consulta</a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
        <a href="#atuacao" onClick={() => setMobileMenuOpen(false)}>Áreas de Atuação</a>
        <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfólio</a>
        <a href="#unidades" onClick={() => setMobileMenuOpen(false)}>Unidades</a>
        <a href="#contato" className="btn-primary mobile-btn" onClick={() => setMobileMenuOpen(false)}>Agendar Consulta</a>
      </div>
    </nav>
  );
};

export default Navbar;
