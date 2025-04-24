
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import FloatingButton from '../components/FloatingButton';
import Accreditation from '../components/Accreditation';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = 'Master Sistemas de Tecnologia e Segurança | Soluções em Tecnologia e Segurança';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Accreditation />
        <Services />
        <AboutUs />
        <Contact />
      </main>
      
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
