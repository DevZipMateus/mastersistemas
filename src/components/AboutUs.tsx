
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-master-orange/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Equipe de Master Sistemas trabalhando em um projeto de segurança" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-master-blue rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Experiência</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-master-orange rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Confiança</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Anos de experiência em segurança e tecnologia</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-master-blue/10 text-master-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-master-blue mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Segurança e tecnologia para sua tranquilidade
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A Master Sistemas de Tecnologia e Segurança é especializada em fornecer soluções completas para proteção e 
              automação, combinando tecnologia avançada com serviço personalizado para atender as necessidades 
              específicas de cada cliente.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Nossa equipe de profissionais especializados está sempre em constante atualização para oferecer as 
              melhores e mais modernas soluções em segurança eletrônica, criando projetos que atendem 
              empresas de todos os portes e residências.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-master-orange/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-master-orange" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-master-blue mb-1">Equipe Especializada</h4>
                  <p className="text-gray-600">Profissionais qualificados com constante atualização técnica</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-master-orange/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-master-orange" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-master-blue mb-1">Atendimento Personalizado</h4>
                  <p className="text-gray-600">Projetos adaptados às necessidades específicas de cada cliente</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-master-orange/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-master-orange" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-master-blue mb-1">Tecnologia de Ponta</h4>
                  <p className="text-gray-600">Utilizamos os equipamentos mais modernos do mercado</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="bg-master-blue hover:bg-master-blue/90 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" 
              style={{ animationDelay: '0.7s' }}
            >
              <span>Fale Conosco</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
