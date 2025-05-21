
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Coffee } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signin } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await signin(email, password);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-coffee-brown bg-opacity-90 relative overflow-hidden">
      {/* Background patterns and overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-coffee-brown bg-opacity-80"></div>

      {/* Login card */}
      <Card className="w-full max-w-md mx-4 z-10 bg-white/95 shadow-2xl border-coffee-gold/20 border-2">
        <CardHeader className="flex flex-col items-center space-y-3 pb-6">
          <div className="w-24 h-24 bg-coffee-brown rounded-full flex items-center justify-center mb-4 shadow-lg">
            <Coffee size={48} className="text-coffee-gold" />
          </div>
          <h1 className="text-3xl font-semibold text-coffee-brown">Café Granchelli</h1>
          <p className="text-muted-foreground text-sm">Plataforma de Automação Comercial</p>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-coffee-brown">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="border-coffee-brown/20 focus-visible:ring-coffee-gold"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-coffee-brown">
                Senha
              </label>
              <Input
                id="password"
                type="password"
                required
                className="border-coffee-brown/20 focus-visible:ring-coffee-gold"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-coffee-brown hover:bg-coffee-lighter text-white"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      {/* Coffee beans decoration */}
      <div className="absolute bottom-4 right-4 opacity-30 text-coffee-gold">
        <Coffee size={24} className="animate-float" />
      </div>
      <div className="absolute top-8 left-8 opacity-30 text-coffee-gold">
        <Coffee size={20} className="animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Login;
