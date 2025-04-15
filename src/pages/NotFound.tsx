
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "Página Não Encontrada | Master Sistemas de Tecnologia e Segurança";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <div className="bg-master-orange/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-master-orange">404</span>
        </div>
        <h1 className="text-3xl font-bold text-master-blue mb-4">Página não encontrada</h1>
        <p className="text-gray-600 mb-8">A página que você está tentando acessar não existe ou foi movida.</p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center gap-2 bg-master-blue hover:bg-master-blue/90 text-white px-6 py-3 rounded-md transition-all"
        >
          <Home size={18} />
          <span>Voltar para o início</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
