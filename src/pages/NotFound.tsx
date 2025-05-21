
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-coffee-brown bg-opacity-90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-coffee-brown bg-opacity-80"></div>
      
      <div className="relative z-10 text-center max-w-md mx-auto p-6">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto">
          <Coffee size={36} className="text-coffee-gold" />
        </div>
        
        <h1 className="text-5xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-coffee-gold mb-6">Página não encontrada</p>
        <p className="text-white/70 mb-8">
          A página que você está procurando não existe ou foi removida.
        </p>
        
        <Link to="/">
          <Button className="bg-coffee-gold hover:bg-coffee-gold/90 text-coffee-brown">
            Voltar para o início
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
