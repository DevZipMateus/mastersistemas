import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Only load the script if map container exists
    if (!mapRef.current) return;
    
    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      initializeMap();
      return;
    }
    
    // Load Google Maps script
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    googleMapsScript.onload = initializeMap;
    document.head.appendChild(googleMapsScript);
    
    return () => {
      // Clean up only if the script was added by this component
      if (document.head.contains(googleMapsScript)) {
        document.head.removeChild(googleMapsScript);
      }
    };
  }, []);
  
  const initializeMap = () => {
    if (!window.google || !window.google.maps || !mapRef.current) return;
    
    // Coordenadas da Avenida Marechal Câmara N 160, Rio de Janeiro
    const location = { lat: -22.908333, lng: -43.175090 };
    
    const mapOptions = {
      center: location,
      zoom: 16,
      mapTypeControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
      styles: [
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#444444"}]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{"color": "#f2f2f2"}]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{"saturation": -100}, {"lightness": 45}]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{"visibility": "simplified"}]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{"color": "#0c2340"}, {"visibility": "on"}]
        }
      ]
    };
    
    const map = new window.google.maps.Map(mapRef.current, mapOptions);
    
    const marker = new window.google.maps.Marker({
      position: location,
      map: map,
      title: 'Master Sistemas de Tecnologia e Segurança',
      animation: window.google.maps.Animation.DROP
    });
    
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="width: 200px; text-align: center;">
          <h3 style="margin: 0; color: #0c2340; font-weight: 500;">Master Sistemas</h3>
          <p style="margin: 5px 0;">Avenida Marechal Câmara N 160 Sala 1107, Centro - Rio de Janeiro</p>
        </div>
      `
    });
    
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  };
  
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-master-blue/10 text-master-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-master-blue mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-gray-600 text-lg">
            Estamos prontos para atender às suas necessidades. Entre em contato através dos nossos canais de atendimento.
          </p>
        </div>
        
        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-master-blue mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-master-blue/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="text-master-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-master-blue mb-1">Endereço</h4>
                  <p className="text-gray-600">Avenida Marechal Câmara N 160 Sala 1107<br />Centro - Rio de Janeiro</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-master-blue/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <Phone className="text-master-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-master-blue mb-1">Telefone</h4>
                  <p className="text-gray-600">(21) 3030-1067</p>
                  <p className="text-gray-600 mt-1">Michel: (21) 99975-6573</p>
                  <p className="text-gray-600">Ingrid: (21) 99615-1496</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-master-blue/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <Mail className="text-master-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-master-blue mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@mstecseg.com.br</p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-8">
              <a 
                href="https://wa.me/552130301067" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-master-orange hover:bg-master-orange/90 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Fale pelo WhatsApp</span>
              </a>
            </div>
          </div>
          
          {/* Map */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div ref={mapRef} className="w-full h-[400px]"></div>
          </div>
        </div>
        
        {/* Business Hours */}
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-master-blue mb-6 text-center">Horário de Atendimento</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="font-medium text-gray-700 mb-2">Segunda a Sexta</div>
              <div className="text-lg font-semibold text-master-blue">08:00 - 18:00</div>
            </div>
            
            <div className="text-center">
              <div className="font-medium text-gray-700 mb-2">Sábado</div>
              <div className="text-lg font-semibold text-master-blue">09:00 - 13:00</div>
            </div>
            
            <div className="text-center">
              <div className="font-medium text-gray-700 mb-2">Domingo e Feriados</div>
              <div className="text-lg font-semibold text-master-blue">Fechado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
