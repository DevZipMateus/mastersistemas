import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-master-blue text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>(21) 3030-1067</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>contato@mstecseg.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>Avenida Marechal Câmara N 160 Sala 1107, Centro - Rio de Janeiro</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-master-orange transition-colors duration-300 inline-block">Início</a>
              </li>
              <li>
                <a href="#about" className="hover:text-master-orange transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-master-orange transition-colors duration-300 inline-block">Serviços</a>
              </li>
              <li>
                <a href="#team" className="hover:text-master-orange transition-colors duration-300 inline-block">Equipe</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-master-orange transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <h3 className="text-xl font-semibold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.instagram.com/segmaster" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white/10 hover:bg-master-orange/80 hover:text-white transition-colors duration-300 p-2 rounded-full">
                <Instagram size={20} />
              </a>
            </div>
            
            <div className="mt-8">
              <img alt="Master Sistemas de Tecnologia e Segurança" src="/lovable-uploads/f1eadf42-3539-4476-8905-9a20fb7db6f3.jpg" className="h-24 bg-white p-2 rounded-md" />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {currentYear} Master Sistemas de Tecnologia e Segurança. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;