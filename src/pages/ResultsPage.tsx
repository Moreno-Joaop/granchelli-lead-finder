import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/context/AuthContext';
import { Coffee, LogOut, Search, Star, ArrowDown, ArrowUp, Phone, Mail, Download, Filter } from 'lucide-react';
import { toast } from 'sonner';

// Interface para exibição de leads
interface Lead {
  id: string;
  company: string;
  category: string;
  contact: string;
  email: string | null;
  phone: string | null;
  rating: number;
  lastPurchase?: string;
  potentialValue: number;
  location: string;
  source: string;
  coffeeType: string;
  observations: string;
}

const ResultsPage = () => {
  const navigate = useNavigate();
  const { signout, user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Lead, direction: 'asc' | 'desc' } | null>(
    { key: 'rating', direction: 'desc' }
  );
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simular carregamento de dados
    const loadSimulatedData = () => {
      setIsLoading(true);
      
      // Dados simulados
      const simulatedLeads: Lead[] = [
        {
          id: '1',
          company: 'Café Central',
          category: 'Cafeteria',
          contact: 'contato@cafecentral.com.br - (11) 9999-8888',
          email: 'contato@cafecentral.com.br',
          phone: '(11) 9999-8888',
          rating: 5,
          potentialValue: 15000,
          location: 'São Paulo, SP',
          source: 'Análise de Mercado',
          coffeeType: 'Especial, Gourmet',
          observations: 'Alta movimentação, localização privilegiada'
        },
        {
          id: '2',
          company: 'Empório do Grão',
          category: 'Empório',
          contact: 'vendas@emporiodograo.com.br - (21) 8888-7777',
          email: 'vendas@emporiodograo.com.br',
          phone: '(21) 8888-7777',
          rating: 4,
          potentialValue: 8000,
          location: 'Rio de Janeiro, RJ',
          source: 'Análise de Mercado',
          coffeeType: 'Tradicional, Especial',
          observations: 'Foco em produtos premium'
        },
        {
          id: '3',
          company: 'Torrefação Mineira',
          category: 'Torrefação',
          contact: 'comercial@torrmineira.com.br - (31) 7777-6666',
          email: 'comercial@torrmineira.com.br',
          phone: '(31) 7777-6666',
          rating: 5,
          potentialValue: 25000,
          location: 'Belo Horizonte, MG',
          source: 'Análise de Mercado',
          coffeeType: 'Verde, Torrado',
          observations: 'Grande volume de produção'
        },
        {
          id: '4',
          company: 'Café Artesanal',
          category: 'Cafeteria',
          contact: 'info@cafeartesanal.com.br - (47) 6666-5555',
          email: 'info@cafeartesanal.com.br',
          phone: '(47) 6666-5555',
          rating: 4,
          potentialValue: 12000,
          location: 'Florianópolis, SC',
          source: 'Análise de Mercado',
          coffeeType: 'Especial, Orgânico',
          observations: 'Foco em sustentabilidade'
        },
        {
          id: '5',
          company: 'Mercado Gourmet',
          category: 'Empório',
          contact: 'compras@mercadogourmet.com.br - (85) 5555-4444',
          email: 'compras@mercadogourmet.com.br',
          phone: '(85) 5555-4444',
          rating: 3,
          potentialValue: 6000,
          location: 'Fortaleza, CE',
          source: 'Análise de Mercado',
          coffeeType: 'Gourmet, Especial',
          observations: 'Rede com múltiplas lojas'
        },
        {
          id: '6',
          company: 'Café Express',
          category: 'Cafeteria',
          contact: 'pedidos@cafeexpress.com.br - (62) 4444-3333',
          email: 'pedidos@cafeexpress.com.br',
          phone: '(62) 4444-3333',
          rating: 3,
          potentialValue: 9000,
          location: 'Goiânia, GO',
          source: 'Análise de Mercado',
          coffeeType: 'Tradicional, Especial',
          observations: 'Atendimento rápido, alto volume'
        },
        {
          id: '7',
          company: 'Grãos Especiais',
          category: 'Torrefação',
          contact: 'vendas@graosespeciais.com.br - (71) 3333-2222',
          email: 'vendas@graosespeciais.com.br',
          phone: '(71) 3333-2222',
          rating: 4,
          potentialValue: 18000,
          location: 'Salvador, BA',
          source: 'Análise de Mercado',
          coffeeType: 'Especial, Premium',
          observations: 'Certificação orgânica'
        },
        {
          id: '8',
          company: 'Casa do Café',
          category: 'Empório',
          contact: 'atendimento@casadocafe.com.br - (81) 2222-1111',
          email: 'atendimento@casadocafe.com.br',
          phone: '(81) 2222-1111',
          rating: 5,
          potentialValue: 14000,
          location: 'Recife, PE',
          source: 'Análise de Mercado',
          coffeeType: 'Gourmet, Tradicional',
          observations: 'Tradição familiar, 30 anos no mercado'
        }
      ];
      
      setTimeout(() => {
        setLeads(simulatedLeads);
        setIsLoading(false);
      }, 1000);
    };
    
    loadSimulatedData();
  }, []);
  
  // Sorting function
  const sortedLeads = [...leads].sort((a, b) => {
    if (!sortConfig) return 0;
    
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });
  
  // Request sort
  const requestSort = (key: keyof Lead) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  
  // Filter and search
  const filteredLeads = sortedLeads.filter(lead => {
    // Apply category filter if selected
    if (filterCategory && lead.category !== filterCategory) {
      return false;
    }
    
    // Apply search term
    if (searchTerm) {
      return (
        lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.coffeeType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return true;
  });
  
  // Handle export
  const handleExport = () => {
    toast.success('Leads exportados com sucesso');
    console.log('Exporting leads:', filteredLeads);
  };
  
  // Handle contact
  const handleContact = (email: string | null) => {
    if (email) {
      toast.success(`Iniciando contato com ${email}`);
    } else {
      toast.info("Email não disponível para este lead");
    }
  };
  
  // Handle new search
  const handleNewSearch = () => {
    navigate('/filtros');
  };

  // Get unique categories for filter
  const categories = [...new Set(leads.map(lead => lead.category))].filter(Boolean);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-coffee-brown text-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Coffee size={28} className="text-coffee-gold" />
          <h1 className="text-xl font-medium">Café Granchelli</h1>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm opacity-75">Olá, {user?.email?.split('@')[0] || 'Usuário'}</span>
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

      <main className="flex-1 container mx-auto py-6 px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-coffee-brown mb-2">Resultados da Análise</h1>
          <p className="text-muted-foreground">
            Encontramos {filteredLeads.length} potenciais clientes para o seu negócio
          </p>
        </div>
        
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Leads</p>
                <p className="text-2xl font-bold">{leads.length}</p>
              </div>
              <div className="w-12 h-12 bg-coffee-brown/10 rounded-full flex items-center justify-center">
                <Coffee className="text-coffee-brown" size={24} />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Potencial de Vendas</p>
                <p className="text-2xl font-bold">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(leads.reduce((sum, lead) => sum + lead.potentialValue, 0) / 1000)}k
                </p>
              </div>
              <div className="w-12 h-12 bg-coffee-gold/10 rounded-full flex items-center justify-center">
                <Star className="text-coffee-gold" size={24} />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Top Rating</p>
                <p className="text-2xl font-bold">
                  {leads.filter(lead => lead.rating === 5).length} leads
                </p>
              </div>
              <div className="w-12 h-12 bg-coffee-olive/10 rounded-full flex items-center justify-center">
                <Star className="text-coffee-olive" size={24} />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Search and filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar por empresa, contato, localização ou tipo de café..." 
              className="pl-9" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} />
                {filterCategory || "Todos os tipos"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setFilterCategory(null)}>
                Todos os tipos
              </DropdownMenuItem>
              {categories.map(category => (
                <DropdownMenuItem 
                  key={category} 
                  onClick={() => setFilterCategory(category)}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button className="bg-coffee-gold hover:bg-coffee-gold/90 text-black" onClick={handleExport}>
            <Download size={16} className="mr-2" />
            Exportar
          </Button>
          
          <Button variant="outline" onClick={handleNewSearch}>
            Nova pesquisa
          </Button>
        </div>
        
        {/* Results table */}
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead 
                  className="cursor-pointer hover:bg-muted"
                  onClick={() => requestSort('company')}
                >
                  <div className="flex items-center">
                    Empresa
                    {sortConfig?.key === 'company' && (
                      sortConfig.direction === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                    )}
                  </div>
                </TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-muted"
                  onClick={() => requestSort('rating')}
                >
                  <div className="flex items-center">
                    Rating
                    {sortConfig?.key === 'rating' && (
                      sortConfig.direction === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                    )}
                  </div>
                </TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-muted"
                  onClick={() => requestSort('potentialValue')}
                >
                  <div className="flex items-center">
                    Potencial
                    {sortConfig?.key === 'potentialValue' && (
                      sortConfig.direction === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                    )}
                  </div>
                </TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Tipo de Café</TableHead>
                <TableHead>Fonte</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={9} className="h-24 text-center">
                    Carregando dados...
                  </TableCell>
                </TableRow>
              ) : filteredLeads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="h-24 text-center">
                    Nenhum resultado encontrado.
                  </TableCell>
                </TableRow>
              ) : (
                filteredLeads.map((lead) => (
                  <TableRow key={lead.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{lead.company}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={`
                          ${lead.category?.includes('Cafeteria') ? 'border-coffee-brown/50 text-coffee-brown' : ''}
                          ${lead.category?.includes('Empório') ? 'border-coffee-gold/50 text-coffee-gold' : ''}
                          ${lead.category?.includes('Torrefação') ? 'border-coffee-olive/50 text-coffee-olive' : ''}
                        `}
                      >
                        {lead.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm">{lead.contact}</p>
                        <p className="text-xs text-muted-foreground">{lead.email || 'Email não disponível'}</p>
                        {lead.phone && <p className="text-xs text-muted-foreground">{lead.phone}</p>}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < lead.rating ? 'text-coffee-gold fill-coffee-gold' : 'text-muted'} 
                          />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(lead.potentialValue)}
                    </TableCell>
                    <TableCell>{lead.location}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {lead.coffeeType}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-muted/80">
                        {lead.source}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-1">
                      {lead.email && (
                        <Button 
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleContact(lead.email)}
                        >
                          <Mail size={14} />
                        </Button>
                      )}
                      {lead.phone && (
                        <Button 
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => toast.success(`Ligando para ${lead.phone}`)}
                        >
                          <Phone size={14} />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;
