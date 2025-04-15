
import React from 'react';
import { Shield, Cpu, Video, AlertTriangle, Fingerprint, Home, BarChart, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Sistemas de Alarme',
    description: 'Sistemas de alarme profissionais para proteção residencial e comercial com monitoramento 24h.',
    icon: AlertTriangle,
    delay: '0s'
  },
  {
    id: 2,
    title: 'CFTV',
    description: 'Circuito fechado de TV com câmeras de alta resolução e tecnologia IP para monitoramento remoto.',
    icon: Video,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Controle de Acesso',
    description: 'Sistemas modernos para controle de acesso com biometria, cartões, senhas ou reconhecimento facial.',
    icon: Fingerprint,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Automação',
    description: 'Soluções de automação para residências e empresas, integrando segurança e conforto.',
    icon: Home,
    delay: '0.3s'
  },
  {
    id: 5,
    title: 'Segurança Eletrônica',
    description: 'Projetos completos de segurança eletrônica adaptados às necessidades de cada cliente.',
    icon: Shield,
    delay: '0.4s'
  },
  {
    id: 6,
    title: 'Infraestrutura de TI',
    description: 'Serviços de infraestrutura de TI, redes estruturadas e soluções em tecnologia.',
    icon: Cpu,
    delay: '0.5s'
  },
  {
    id: 7,
    title: 'Consultoria em Segurança',
    description: 'Consultoria especializada para avaliar vulnerabilidades e implementar soluções de segurança adequadas.',
    icon: BarChart,
    delay: '0.6s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-master-blue/10 text-master-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-master-blue mb-6">
            Soluções completas para sua segurança
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos serviços especializados em tecnologia e segurança para 
            atender às necessidades específicas de empresas e residências.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-master-orange/10 p-3 rounded-lg inline-block mb-5">
                <service.icon className="text-master-orange" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-master-blue">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Youtube Video Section */}
        <div className="mt-16 mb-8">
          <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe 
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/1WvMZB-E_AI" 
                title="Vídeo sobre Master Sistemas de Tecnologia e Segurança" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/552130301067" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-master-blue hover:bg-master-blue/90 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
