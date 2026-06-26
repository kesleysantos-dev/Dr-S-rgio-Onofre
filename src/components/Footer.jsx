import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Share2, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contato">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo">
              <div className="logo-diamond"><span>S</span></div>
              <div className="logo-text">
                <h1>SÉRGIO ONOFRE</h1>
                <span>ADVOCACIA</span>
              </div>
            </div>
            <p className="footer-desc mt-20">
              Excelência e tradição na defesa incansável dos seus interesses corporativos e individuais.
            </p>
            <div className="social-links mt-20">
              <a href="#" className="social-icon"><Share2 size={20} /></a>
              <a href="#" className="social-icon"><Globe size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="heading-md">Navegação</h4>
            <ul>
              <li><a href="#sobre">Sobre o Escritório</a></li>
              <li><a href="#atuacao">Áreas de Atuação</a></li>
              <li><a href="#portfolio">Casos de Sucesso</a></li>
              <li><a href="#unidades">Nossas Unidades</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="heading-md">Fale Conosco</h4>
            <div className="contact-blocks">
              <a href="#" className="contact-block wpp-block">
                <MessageCircle className="text-gold" size={24} />
                <div>
                  <span>WhatsApp 24/7</span>
                  <strong>+55 11 99999-9999</strong>
                </div>
              </a>
              <a href="#" className="contact-block email-block">
                <Mail className="text-gold" size={24} />
                <div>
                  <span>E-mail Corporativo</span>
                  <strong>contato@sergioonofre.com.br</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Sérgio Onofre Advocacia. Todos os direitos reservados.</p>
          <div className="footer-legal">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="whatsapp-float">
        <MessageCircle size={32} />
      </a>
    </footer>
  );
};

export default Footer;
