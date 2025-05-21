
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/context/AuthContext';
import { Coffee, LogOut, Search, Star, ArrowDown, ArrowUp, Phone, Mail, ExportIcon, Filter } from 'lucide-react';
import { toast } from 'sonner';

// Lead data interface
interface Lead {
  id: string;
  company: string;
  category: string;
  contact: string;
  email: string;
  phone: string;
  rating: number;
  lastPurchase?: string;
  potentialValue: number;
  location: string;
}

// Sample leads data (would come from Supabase tables)
const mockLeads: Lead[] = [
  { 
    id: '1', 
    company: 'Café Gourmet Express', 
    category: 'Cafeteria', 
    contact: 'Ana Silva', 
    email: 'ana@cafegourmet.com', 
    phone: '(11) 98765-4321', 
    rating: 5, 
    lastPurchase: '15/04/2023', 
    potentialValue: 15000, 
    location: 'São Paulo, SP' 
  },
  { 
    id: '2', 
    company: 'Empório Café & Cia', 
    category: 'Empório', 
    contact: 'João Oliveira', 
    email: 'joao@emporiocafe.com', 
    phone: '(11) 99876-5432', 
    rating: 4, 
    lastPurchase: '22/03/2023', 
    potentialValue: 8500, 
    location: 'Campinas, SP' 
  },
  { 
    id: '3', 
    company: 'Torrefação Premium', 
    category: 'Torrefação', 
    contact: 'Carlos Mendes', 
    email: 'carlos@torrepremium.com', 
    phone: '(11) 97654-3210', 
    rating: 5, 
    potentialValue: 25000, 
    location: 'Ribeirão Preto, SP' 
  },
  { 
    id: '4', 
    company: 'Café da Serra', 
    category: 'Cafeteria', 
    contact: 'Marina Costa', 
    email: 'marina@cafeserra.com', 
    phone: '(35) 98765-4321', 
    rating: 3, 
    lastPurchase: '10/01/2023', 
    potentialValue: 5000, 
    location: 'Poços de Caldas, MG' 
  },
  { 
    id: '5', 
    company: 'Armazém do Café', 
    category: 'Empório', 
    contact: 'Pedro Santos', 
    email: 'pedro@armazemcafe.com', 
    phone: '(19) 98888-7777', 
    rating: 4, 
    potentialValue: 12000, 
    location: 'Americana, SP' 
  },
  { 
    id: '6', 
    company: 'Café & Grãos Especiais', 
    category: 'Torrefação', 
    contact: 'Luiza Almeida', 
    email: 'luiza@cafeegraos.com', 
    phone: '(11) 96543-2109', 
    rating: 5, 
    lastPurchase: '05/05/2023', 
    potentialValue: 18000, 
    location: 'São Paulo, SP' 
  },
  { 
    id: '7', 
    company: 'Empório Grão Fino', 
    category: 'Empório', 
    contact: 'Roberto Lima', 
    email: 'roberto@graofino.com', 
    phone: '(15) 99988-7766', 
    rating: 3, 
    potentialValue: 7000, 
    location: 'Sorocaba, SP' 
  }
];

const ResultsPage = () => {
  const navigate = useNavigate();
  const { signout, user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Lead, direction: 'asc' | 'desc' } | null>(
    { key: 'rating', direction: 'desc' }
  );
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  
  // Sorting function
  const sortedLeads = [...mockLeads].sort((a, b) => {
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
        lead.location.toLowerCase().includes(searchTerm.toLowerCase())
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
  const handleContact = (email: string) => {
    toast.success(`Iniciando contato com ${email}`);
  };
  
  // Handle new search
  const handleNewSearch = () => {
    navigate('/filtros');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-coffee-brown text-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Coffee size={28} className="text-coffee-gold" />
          <h1 className="text-xl font-medium">Café Granchelli</h1>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm opacity-75">Olá, {user?.name || 'Usuário'}</span>
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
                <p className="text-2xl font-bold">{mockLeads.length}</p>
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
                  }).format(mockLeads.reduce((sum, lead) => sum + lead.potentialValue, 0) / 1000)}k
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
                  {mockLeads.filter(lead => lead.rating === 5).length} leads
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
              placeholder="Buscar por empresa, contato ou localização..." 
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
              <DropdownMenuItem onClick={() => setFilterCategory('Cafeteria')}>
                Cafeteria
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterCategory('Empório')}>
                Empório
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterCategory('Torrefação')}>
                Torrefação
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button className="bg-coffee-gold hover:bg-coffee-gold/90 text-black" onClick={handleExport}>
            <ExportIcon size={16} className="mr-2" />
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
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
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
                          ${lead.category === 'Cafeteria' ? 'border-coffee-brown/50 text-coffee-brown' : ''}
                          ${lead.category === 'Empório' ? 'border-coffee-gold/50 text-coffee-gold' : ''}
                          ${lead.category === 'Torrefação' ? 'border-coffee-olive/50 text-coffee-olive' : ''}
                        `}
                      >
                        {lead.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p>{lead.contact}</p>
                        <p className="text-xs text-muted-foreground">{lead.email}</p>
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
                    <TableCell className="text-right space-x-1">
                      <Button 
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleContact(lead.email)}
                      >
                        <Mail size={14} />
                      </Button>
                      <Button 
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => toast.success(`Ligando para ${lead.phone}`)}
                      >
                        <Phone size={14} />
                      </Button>
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
