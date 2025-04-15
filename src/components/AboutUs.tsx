
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-master-blue/10 text-master-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
            Sobre Nós
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-master-blue mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Segurança e tecnologia para sua tranquilidade
          </h2>
        </div>

        {/* Main Content - Company Description */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
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
            <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A Master Sistemas de Tecnologia e Segurança é uma empresa especializada em soluções completas e integradas 
              para segurança eletrônica e automação de ambientes. Atuamos com excelência no fornecimento, instalação e 
              monitoramento de sistemas de segurança, sempre com foco em inovação, eficiência e proteção total para 
              nossos clientes.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Com uma equipe técnica altamente qualificada e em constante atualização, garantimos um atendimento 
              personalizado e soluções sob medida para empresas, condomínios, comércios e residências. Além de possuirem 
              certificações de renomados fabricantes internacionais, como Paradox Security System, e nacionais, como 
              Intelbras e PPA. Além disso, seguimos rigorosamente Normas Regulamentadoras como a NR 10, que trata da 
              "Segurança em Instalações Elétricas", e a NR 35, que aborda a "Segurança do Trabalho em Altura". Aderimos 
              também a todas as NBR "Normas Técnicas", o que nos permite garantir o mais elevado nível de segurança e 
              qualidade. Nosso compromisso é oferecer tranquilidade e confiança por meio da tecnologia.
            </p>
            
            <a 
              href="#contact" 
              className="bg-master-blue hover:bg-master-blue/90 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium w-fit animate-fade-in" 
              style={{ animationDelay: '0.4s' }}
            >
              <span>Fale Conosco</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
        
        {/* Mission, Vision, Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Mission Card */}
          <Card className="animate-fade-in shadow-sm hover:shadow-md transition-shadow" style={{ animationDelay: '0.5s' }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-master-blue mb-3">Missão</h3>
              <p className="text-gray-600">
                Proteger pessoas e patrimônios com inteligência, tecnologia e confiança.
              </p>
            </CardContent>
          </Card>
          
          {/* Vision Card */}
          <Card className="animate-fade-in shadow-sm hover:shadow-md transition-shadow" style={{ animationDelay: '0.6s' }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-master-blue mb-3">Visão</h3>
              <p className="text-gray-600">
                Ser referência nacional em soluções de segurança e tecnologia integrada.
              </p>
            </CardContent>
          </Card>
          
          {/* Values Card */}
          <Card className="animate-fade-in shadow-sm hover:shadow-md transition-shadow" style={{ animationDelay: '0.7s' }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-master-blue mb-3">Valores</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="bg-master-orange/10 p-1 rounded-full">
                    <Check className="text-master-orange" size={16} />
                  </div>
                  <span className="text-gray-600">Comprometimento</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-master-orange/10 p-1 rounded-full">
                    <Check className="text-master-orange" size={16} />
                  </div>
                  <span className="text-gray-600">Inovação</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-master-orange/10 p-1 rounded-full">
                    <Check className="text-master-orange" size={16} />
                  </div>
                  <span className="text-gray-600">Ética</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-master-orange/10 p-1 rounded-full">
                    <Check className="text-master-orange" size={16} />
                  </div>
                  <span className="text-gray-600">Qualidade</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-master-orange/10 p-1 rounded-full">
                    <Check className="text-master-orange" size={16} />
                  </div>
                  <span className="text-gray-600">Foco no cliente</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        {/* Key Differentiators */}
        <div className="bg-white rounded-lg shadow-sm p-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-semibold text-master-blue mb-6 text-center">Por que escolher a Master Sistemas?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="bg-master-orange/10 p-1 rounded-full mr-3 mt-1">
                <Check className="text-master-orange" size={16} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-master-blue mb-1">Equipe Especializada</h4>
                <p className="text-gray-600">Profissionais qualificados com constante atualização técnica</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-master-orange/10 p-1 rounded-full mr-3 mt-1">
                <Check className="text-master-orange" size={16} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-master-blue mb-1">Certificações</h4>
                <p className="text-gray-600">Credenciados por fabricantes nacionais e internacionais</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-master-orange/10 p-1 rounded-full mr-3 mt-1">
                <Check className="text-master-orange" size={16} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-master-blue mb-1">Soluções Personalizadas</h4>
                <p className="text-gray-600">Projetos adaptados às necessidades específicas de cada cliente</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-master-orange/10 p-1 rounded-full mr-3 mt-1">
                <Check className="text-master-orange" size={16} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-master-blue mb-1">Normas Técnicas</h4>
                <p className="text-gray-600">Seguimos rigorosamente as NRs e NBRs para máxima segurança</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-master-orange/10 p-1 rounded-full mr-3 mt-1">
                <Check className="text-master-orange" size={16} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-master-blue mb-1">Tecnologia de Ponta</h4>
                <p className="text-gray-600">Utilizamos os equipamentos mais modernos do mercado</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-master-orange/10 p-1 rounded-full mr-3 mt-1">
                <Check className="text-master-orange" size={16} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-master-blue mb-1">Atendimento Completo</h4>
                <p className="text-gray-600">Desde o projeto até a instalação e monitoramento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
