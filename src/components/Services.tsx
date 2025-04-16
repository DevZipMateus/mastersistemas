
import React from 'react';
import { Shield, Cpu, Video, AlertTriangle, Fingerprint, Home, BarChart, ArrowRight, Lock, Bell } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const services = [
  {
    id: 1,
    title: 'CÂMERAS DE SEGURANÇA',
    description: 'Planejamos e executamos projetos customizados e integrados de CFTV analógicos e IP com alta definição e recursos analíticos que vão desde reconhecimento facial, leitura de placas de veículos, objetos deixados, objetos retirados, tudo isso agregados a software de monitoramento que trabalham em conjuntos com esse analíticos.',
    icon: Video,
    image: "/lovable-uploads/6b3beb1b5d084ba69bfa047bc5b68cf0.jpg",
    delay: '0s'
  },
  {
    id: 2,
    title: 'ALARME DE INTRUSÃO MONITORADO 24H',
    description: 'Os equipamentos de monitoramento de alarme são configurados para trabalhar em perfeita harmonia com o ambiente do cliente, cobrindo pontos vulneráveis e entregando um eficiente sistema de segurança eletrônica.Além da possibilidade de o cliente ter o aplicativo para operar o sistema direto de seu smartfone',
    icon: Bell,
    image: "/lovable-uploads/f3b07998ceb34b53812dfea4b8c7d5ca.jpg",
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'CONTROLE DE ACESSO',
    description: 'Nossos projetos em controle de acesso de pessoas e veículos, visa garantir a segurança de empresa, prédios comerciais e residenciais, escritórios e residências e poder garantir apenas a entrada de pessoas autorizadas e monitorar em tempo real e por relatórios quem acessou determinado local com data e hora do evento, além da possibilidade controlar a saída desse determinado local e conseguir analisar quanto tempo a pessoa permaneceu.',
    icon: Fingerprint,
    image: "/lovable-uploads/f2a4ee8b40b1465ab9ee9fef578b9658.jpg",
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'AUTOMATIZADOR DE PORTAS E PORTÕES',
    description: 'Com os automatizadores de portas e portões você pode garantir segurança e conforto ao acessar sua empresa, condomínio ou residência de modo que no processo automatizado não terá a necessidade de descer do veiculo garantido mais rapidez ao adentrar seu local e não precisar ter de sair na chuva para abrir um portão.',
    icon: Home,
    image: "/lovable-uploads/25a1ce369cd44010b62ceb6457bf4431.jpg",
    delay: '0.3s'
  },
  {
    id: 5,
    title: 'COMUNICAÇÃO CONDOMINIAL E INTERFONIA RESIDENCIAL E COMERCIAL',
    description: 'Os sistemas de interfones convencionais e comunicação para condomínios residências e comerciais, garante a segurança e o conforto ao poder estar ciente de quem está pedindo liberação de entrada sem ter a necessidade de ir atender pessoalmente para liberação da mesma.',
    icon: Shield,
    image: "/lovable-uploads/912840887a2642ec85f65abfb34ecdcf.jpg",
    delay: '0.4s'
  },
  {
    id: 6,
    title: 'FECHADURAS DIGITAIS',
    description: 'Com a fechaduras digitais inteligentes você garante conforto ao adentrar sua casa, apartamento ou escritório não tendo a necessidade de chaves e realizando um acesso fácil através de senha, RFID ou biometria.Além disso alguns modelos oferecem conectividade com sistemas de automação como Alexa, Google, Aple e aplicativo que você pode destravar a fechadura de qualquer lugar do mundo além de poder liberar senhas temporárias para algum visitante ou prestador de serviço',
    icon: Cpu,
    image: "/lovable-uploads/3b0317a8ff634dcf902c2e6fcccb1f67.jpg",
    delay: '0.5s'
  },
  {
    id: 7,
    title: 'REDE DE DADOS, VOZ E WI-FI',
    description: 'Trabalhamos com a Instalação, manutenção e ampliação de redes estruturadas de dados e voz além de redes Wi-Fi corporativas e residências, garantido conectividade aos colaboradores ou dispositivos, dentro das normas e padrões ITIL.',
    icon: BarChart,
    image: "/lovable-uploads/690d427a892148adaadfa77d6653efd4.jpg",
    delay: '0.6s'
  },
  {
    id: 8,
    title: 'INSTALAÇÃO E MANUTENÇÃO ELÉTRICA ',
    description: 'Realizamos manutenções e instalações elétricas de acordo com NBR 5410 e os padrões de segurança estabelecidos para garantir uma eficiente demanda ao cliente de sua necessidade.',
    icon: AlertTriangle,
    image: "/lovable-uploads/8ab0573509364fc293a3b52f97cdaa4a.jpg",
    delay: '0.7s'
  },
  {
    id: 9,
    title: 'CONTRATOS DE MANUTENÇÃO PARA CONDOMÍNIOS E EMPRESAS',
    description: 'Realizamos manutenções preventivas e corretivas em sistemas de segurança eletrônica e comunicação, através de contratos que podem ser realizadas semanal, quinzenal ou mensal as preventivas para checklists de todo o sistemas, limpeza, lubrificação e ajustes, além das manutenções corretivas se vier a ter algum defeito no sistema ou equipamento.',
    icon: Lock,
    image: "/lovable-uploads/29b696e8c19544c5b1b04a7478adb05c.jpg",
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
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`service-${service.id}`} className="border-0">
                    <AccordionTrigger className="py-0 text-xl font-semibold text-master-blue hover:no-underline">
                      {service.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 pt-3">{service.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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

