
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';
import { Coffee, Store, Building2, LogOut, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

// Define product types
interface Product {
  id: string;
  name: string;
  type: string;
  category: string;
  image: string;
}

const FilterPage = () => {
  const navigate = useNavigate();
  const { signout, user } = useAuth();

  // Client filters
  const [clientTypes, setClientTypes] = useState({
    cafe: false,
    emporio: false,
    torrefacao: false
  });

  // Product type selection
  const [selectedProductType, setSelectedProductType] = useState<string | null>(null);

  // Sample products (in a real app, these would come from Supabase)
  const products: Product[] = [
    {
      id: '1',
      name: 'Café Verde Especial',
      type: 'verde',
      category: 'Especial',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3'
    },
    {
      id: '2',
      name: 'Café Verde Premium',
      type: 'verde',
      category: 'Premium',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3'
    },
    {
      id: '3',
      name: 'Café Torrado Gourmet',
      type: 'torrado',
      category: 'Gourmet',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3'
    },
    {
      id: '4',
      name: 'Café Torrado Tradicional',
      type: 'torrado',
      category: 'Tradicional',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3'
    },
  ];

  // Filtered products based on selected type
  const filteredProducts = selectedProductType 
    ? products.filter(product => product.type === selectedProductType) 
    : products;

  // Selected products
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleProductSelect = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const startAnalysis = () => {
    if (!clientTypes.cafe && !clientTypes.emporio && !clientTypes.torrefacao) {
      toast.error('Selecione pelo menos um tipo de cliente');
      return;
    }

    if (selectedProducts.length === 0) {
      toast.error('Selecione pelo menos um produto');
      return;
    }

    // Navigate to processing page
    navigate('/processando');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-coffee-brown text-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Coffee size={28} className="text-coffee-gold" />
          <h1 className="text-xl font-medium">Café Granchelli</h1>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm opacity-75">Olá, {user?.email || 'Usuário'}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={signout} 
            className="text-white hover:text-coffee-gold hover:bg-coffee-brown/80"
          >
            <LogOut size={18} />
          </Button>
        </div>
      </header>

      <main className="container max-w-4xl mx-auto py-8 px-4">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-coffee-brown mb-6">
              Qual tipo de cliente você está buscando?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className={`border-2 cursor-pointer transition-all ${clientTypes.cafe ? 'border-coffee-gold bg-coffee-brown/5' : 'border-transparent hover:border-coffee-brown/30'}`}
                onClick={() => setClientTypes(prev => ({ ...prev, cafe: !prev.cafe }))}
              >
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                  <Coffee size={32} className={clientTypes.cafe ? 'text-coffee-gold' : 'text-coffee-brown'} />
                  <h3 className="font-medium">Cafeteria</h3>
                  <Checkbox 
                    checked={clientTypes.cafe} 
                    onCheckedChange={() => {}} 
                    className={clientTypes.cafe ? 'border-coffee-gold' : 'border-coffee-brown/50'} 
                  />
                </CardContent>
              </Card>
              
              <Card className={`border-2 cursor-pointer transition-all ${clientTypes.emporio ? 'border-coffee-gold bg-coffee-brown/5' : 'border-transparent hover:border-coffee-brown/30'}`}
                onClick={() => setClientTypes(prev => ({ ...prev, emporio: !prev.emporio }))}
              >
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                  <Store size={32} className={clientTypes.emporio ? 'text-coffee-gold' : 'text-coffee-brown'} />
                  <h3 className="font-medium">Empório</h3>
                  <Checkbox 
                    checked={clientTypes.emporio} 
                    onCheckedChange={() => {}} 
                    className={clientTypes.emporio ? 'border-coffee-gold' : 'border-coffee-brown/50'} 
                  />
                </CardContent>
              </Card>
              
              <Card className={`border-2 cursor-pointer transition-all ${clientTypes.torrefacao ? 'border-coffee-gold bg-coffee-brown/5' : 'border-transparent hover:border-coffee-brown/30'}`}
                onClick={() => setClientTypes(prev => ({ ...prev, torrefacao: !prev.torrefacao }))}
              >
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                  <Building2 size={32} className={clientTypes.torrefacao ? 'text-coffee-gold' : 'text-coffee-brown'} />
                  <h3 className="font-medium">Torrefação</h3>
                  <Checkbox 
                    checked={clientTypes.torrefacao} 
                    onCheckedChange={() => {}} 
                    className={clientTypes.torrefacao ? 'border-coffee-gold' : 'border-coffee-brown/50'} 
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-coffee-brown">
              Qual tipo de produto você deseja oferecer?
            </h2>
            
            <div className="flex space-x-4 mb-6">
              <Button
                onClick={() => setSelectedProductType('verde')}
                variant={selectedProductType === 'verde' ? 'default' : 'outline'}
                className={`${selectedProductType === 'verde' ? 'bg-coffee-olive text-white' : 'text-coffee-olive border-coffee-olive/30'} hover:bg-coffee-olive hover:text-white`}
              >
                Café Verde
              </Button>
              
              <Button
                onClick={() => setSelectedProductType('torrado')}
                variant={selectedProductType === 'torrado' ? 'default' : 'outline'}
                className={`${selectedProductType === 'torrado' ? 'bg-coffee-brown text-white' : 'text-coffee-brown border-coffee-brown/30'} hover:bg-coffee-brown hover:text-white`}
              >
                Café Torrado
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProducts.map(product => (
                <Card 
                  key={product.id}
                  className={`border overflow-hidden ${selectedProducts.includes(product.id) ? 'border-coffee-gold ring-1 ring-coffee-gold' : 'hover:border-coffee-brown/50'}`}
                  onClick={() => handleProductSelect(product.id)}
                >
                  <div className="flex items-center p-4 cursor-pointer">
                    <div className="w-20 h-20 mr-4 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">Categoria: {product.category}</p>
                    </div>
                    <div className="ml-4">
                      <Checkbox 
                        checked={selectedProducts.includes(product.id)} 
                        className={selectedProducts.includes(product.id) ? 'border-coffee-gold' : 'border-coffee-brown/50'}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <Button 
            onClick={startAnalysis}
            className="w-full bg-coffee-gold hover:bg-coffee-gold/90 text-black py-6 text-lg"
          >
            Iniciar Análise de Leads
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default FilterPage;
