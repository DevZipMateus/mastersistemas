import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Linkedin, Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4'}`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4 md:mb-2">
          <div className="flex flex-col md:flex-row md:space-x-6 text-sm text-gray-600 mb-2 md:mb-0 items-center">
            <a href="mailto:contato@mstecseg.com.br" className="flex items-center hover:text-master-orange transition-colors duration-300 mb-1 md:mb-0">
              <Mail size={16} className="mr-2" />
              contato@mstecseg.com.br
            </a>
            <a href="tel:+552130301067" className="flex items-center hover:text-master-orange transition-colors duration-300 whitespace-nowrap">
              <Phone size={16} className="mr-2" />
              (21) 3030-1067
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/segmaster" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-master-orange transition-colors duration-300">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/share/z7uyVtn3LFDeHXpC/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-master-orange transition-colors duration-300">
              <Facebook size={18} />
            </a>
            <a href="https://linkedin.com/#mstecseg" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-master-orange transition-colors duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link to="/" onClick={handleHomeClick} className="transition-all duration-300 transform hover:scale-[1.02]">
            <img alt="Master Sistemas de Tecnologia e Segurança" src="/lovable-uploads/d395a23d-995a-40f9-92e6-d8e2f9f627d0.jpg" className="h-16 md:h-24" />
          </Link>
          
          <nav className="hidden md:flex space-x-1">
            <button onClick={handleHomeClick} className="nav-link">
              Início
            </button>
            <a href="#about" className="nav-link">Sobre Nós</a>
            <a href="#services" className="nav-link">Serviços</a>
            
            <a href="#contact" className="nav-link">Contato</a>
          </nav>
          
          <button className="md:hidden text-gray-600 hover:text-master-orange focus:outline-none" onClick={toggleMobileMenu} aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="container-custom py-4 flex flex-col space-y-3 border-t mt-4">
          <button onClick={handleHomeClick} className="px-4 py-2 text-gray-700 hover:text-master-orange hover:bg-gray-50 rounded-md text-left">
            Início
          </button>
          <a href="#about" className="px-4 py-2 text-gray-700 hover:text-master-orange hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Sobre Nós</a>
          <a href="#services" className="px-4 py-2 text-gray-700 hover:text-master-orange hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Serviços</a>
          
          <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-master-orange hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Contato</a>
        </div>
      </div>
    </header>;
};
export default Header;