
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Michel Farias',
    role: 'Técnico Comercial',
    phone: '(21) 99975-6573',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    delay: '0s'
  },
  {
    id: 2,
    name: 'Ingrid Oliveira',
    role: 'Administrativo',
    phone: '(21) 99615-1496',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    delay: '0.1s'
  }
];

const Team = () => {
  return (
    <section id="team" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-master-blue/10 text-master-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossa Equipe
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-master-blue mb-6">
            Conheça nossos profissionais
          </h2>
          <p className="text-gray-600 text-lg">
            Nossa equipe de especialistas está pronta para oferecer as melhores soluções em segurança e tecnologia para seu negócio ou residência.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {team.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: member.delay }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-60">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-master-blue mb-1">{member.name}</h3>
                <p className="text-master-orange mb-4">{member.role}</p>
                
                {/* Contact */}
                <div className="space-y-2">
                  <a 
                    href={`tel:${member.phone.replace(/[^0-9]/g, '')}`} 
                    className="flex items-center text-gray-700 hover:text-master-orange transition-colors duration-300"
                  >
                    <Phone size={16} className="mr-2" />
                    {member.phone}
                  </a>
                  <a 
                    href="mailto:contato@mstecseg.com.br" 
                    className="flex items-center text-gray-700 hover:text-master-orange transition-colors duration-300"
                  >
                    <Mail size={16} className="mr-2" />
                    contato@mstecseg.com.br
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
