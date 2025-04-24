
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Shield } from 'lucide-react';

const Accreditation = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="w-full md:w-1/3">
            <AspectRatio ratio={3/1}>
              <img 
                src="/lovable-uploads/033b9911-8e61-496e-9b2d-4aff9ec495b5.png" 
                alt="Logo CRT-RJ" 
                className="w-full h-full object-contain"
              />
            </AspectRatio>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-master-blue/10 text-master-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
              <Shield size={16} />
              <span>Credenciamento Oficial</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-master-blue mb-4">
              Credenciados ao CRT-RJ
            </h2>
            <p className="text-gray-600 text-lg">
              Somos oficialmente credenciados ao Conselho Regional dos Técnicos Industriais do Estado do Rio de Janeiro (CRT-RJ), garantindo a excelência e conformidade dos nossos serviços com as normas técnicas e regulamentações do setor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditation;
