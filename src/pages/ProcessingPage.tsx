
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProcessingPage = () => {
  const navigate = useNavigate();

  // Automatically navigate to results after animation
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/resultados');
    }, 4500); // 4.5 seconds - enough time for animation
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-coffee-brown">
      <div className="max-w-md w-full px-4 mx-auto text-center">
        {/* Animation container */}
        <div className="mb-12 relative h-40">
          {/* Neural network animation */}
          <div className="absolute inset-0 opacity-70">
            <svg viewBox="0 0 800 400" className="w-full h-full">
              <g className="animate-pulse-opacity" style={{ animationDelay: '0.1s' }}>
                <circle cx="200" cy="150" r="10" fill="#D4AF37" />
                <circle cx="400" cy="100" r="10" fill="#D4AF37" />
                <circle cx="400" cy="200" r="10" fill="#D4AF37" />
                <circle cx="400" cy="300" r="10" fill="#D4AF37" />
                <circle cx="600" cy="150" r="10" fill="#D4AF37" />
                <circle cx="600" cy="250" r="10" fill="#D4AF37" />
              </g>
              <g stroke="#D4AF37" strokeWidth="2" opacity="0.6">
                <line x1="200" y1="150" x2="400" y2="100" className="animate-pulse-opacity" />
                <line x1="200" y1="150" x2="400" y2="200" className="animate-pulse-opacity" style={{ animationDelay: '0.2s' }} />
                <line x1="200" y1="150" x2="400" y2="300" className="animate-pulse-opacity" style={{ animationDelay: '0.3s' }} />
                <line x1="400" y1="100" x2="600" y2="150" className="animate-pulse-opacity" style={{ animationDelay: '0.4s' }} />
                <line x1="400" y1="200" x2="600" y2="150" className="animate-pulse-opacity" style={{ animationDelay: '0.5s' }} />
                <line x1="400" y1="300" x2="600" y2="250" className="animate-pulse-opacity" style={{ animationDelay: '0.6s' }} />
              </g>
            </svg>
          </div>
          
          {/* Coffee bean animation */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-24 h-24">
              <div className="loading-bean absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="64" height="64" className="text-coffee-gold animate-spin-slow">
                  <path 
                    fill="currentColor" 
                    d="M2,21V19C2,17.9 2.9,17 4,17H4.5C5.5,17 6.2,16.1 6,15.1C5.9,14.7 5.6,14.4 5.2,14.2L4,13.6C3.4,13.3 3,12.6 3,12C3,11.4 3.4,10.7 4,10.4L5.2,9.8C5.6,9.6 5.9,9.3 6,8.9C6.2,7.9 5.5,7 4.5,7H4C2.9,7 2,6.1 2,5V3H22V5C22,6.1 21.1,7 20,7H19.5C18.5,7 17.8,7.9 18,8.9C18.1,9.3 18.4,9.6 18.8,9.8L20,10.4C20.6,10.7 21,11.4 21,12C21,12.6 20.6,13.3 20,13.6L18.8,14.2C18.4,14.4 18.1,14.7 18,15.1C17.8,16.1 18.5,17 19.5,17H20C21.1,17 22,17.9 22,19V21H2M5,3V5H9.5C10.9,5 12,6.1 12,7.5C12,8.9 10.9,10 9.5,10C8.1,10 7,8.9 7,7.5V7H5V7.5C5,10 7,12 9.5,12C12,12 14,10 14,7.5C14,5 12,3 9.5,3H5Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Text */}
        <h1 className="text-2xl font-semibold text-white mb-4">Processando sua solicitação</h1>
        <p className="text-coffee-gold animate-pulse-opacity">
          Analisando o mercado e encontrando os melhores clientes para você...
        </p>
      </div>
      
      {/* Bottom progress indication */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i}
              className="w-2 h-2 rounded-full bg-coffee-gold animate-pulse-opacity"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessingPage;
