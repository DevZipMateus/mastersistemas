
import React from 'react';
import { Shield, Cpu, Video, AlertTriangle, Fingerprint, Home, BarChart, ArrowRight, Lock, Bell } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const services = [
  {
    id: 1,
    title: 'CÂMERAS DE SEGURANÇA',
    description: 'Sistemas avançados de câmeras de vigilância com alta resolução, visão noturna e acesso remoto via smartphone.',
    icon: Video,
    image: "/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png",
    delay: '0s'
  },
  {
    id: 2,
    title: 'ALARME DE INTRUSÃO MONITORADO 24H',
    description: 'Proteção completa para residências e empresas com monitoramento profissional 24 horas e notificações instantâneas.',
    icon: Bell,
    image: "/lovable-uploads/86341d84-a284-4386-918e-74d010ada782.png",
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'CONTROLE DE ACESSO',
    description: 'Sistemas inteligentes de controle de acesso com tecnologia biométrica, cartões RFID e integração com aplicativos móveis.',
    icon: Fingerprint,
    image: "/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png",
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Automação Residencial',
    description: 'Soluções integradas de automação para controle de iluminação, climatização e outros sistemas, proporcionando conforto e economia.',
    icon: Home,
    image: "/lovable-uploads/d395a23d-995a-40f9-92e6-d8e2f9f627d0.jpg",
    delay: '0.3s'
  },
  {
    id: 5,
    title: 'Segurança Perimetral',
    description: 'Proteção avançada do perímetro com sensores de movimento, cercas elétricas e sistemas de detecção de invasão.',
    icon: Shield,
    image: "/lovable-uploads/f1eadf42-3539-4476-8905-9a20fb7db6f3.jpg",
    delay: '0.4s'
  },
  {
    id: 6,
    title: 'Redes e Infraestrutura',
    description: 'Projetos e instalação de redes estruturadas, cabeamento, servidores e soluções de backup para empresas de todos os portes.',
    icon: Cpu,
    image: "/lovable-uploads/f1eadf42-3539-4476-8905-9a20fb7db6f3.jpg",
    delay: '0.5s'
  },
  {
    id: 7,
    title: 'Consultoria em Segurança',
    description: 'Análise de vulnerabilidades e recomendações personalizadas para implementação de soluções de segurança integradas.',
    icon: BarChart,
    image: "/lovable-uploads/f1eadf42-3539-4476-8905-9a20fb7db6f3.jpg",
    delay: '0.6s'
  },
  {
    id: 8,
    title: 'Sistemas de Detecção de Incêndio',
    description: 'Instalação e manutenção de sistemas de detecção e alarme de incêndio, cumprindo normas e regulamentações.',
    icon: AlertTriangle,
    image: "/lovable-uploads/f1eadf42-3539-4476-8905-9a20fb7db6f3.jpg",
    delay: '0.7s'
  },
  {
    id: 9,
    title: 'Fechaduras Eletrônicas',
    description: 'Soluções modernas de fechaduras inteligentes com acesso por senha, biometria ou cartão, integrando-se ao seu sistema de segurança.',
    icon: Lock,
    image: "/lovable-uploads/f1eadf42-3539-4476-8905-9a20fb7db6f3.jpg",
    delay: '0.8s'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              {/* Image Section */}
              <div className="w-full h-48 overflow-hidden">
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </AspectRatio>
              </div>
              
              <div className="p-6">
                <div className="bg-master-orange/10 p-3 rounded-lg inline-block mb-5">
                  <service.icon className="text-master-orange" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-master-blue">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
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
