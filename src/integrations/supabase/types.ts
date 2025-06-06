export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      "Manus2.0": {
        Row: {
          Email: string | null
          Localização: string | null
          "Nome Comercial": string | null
          Observações: string | null
          Prioridade: string | null
          "Redes Sociais": string | null
          "Tamanho do Negócio": string | null
          Telefone: string | null
          "Tipo de Empresa": string | null
          Website: string | null
        }
        Insert: {
          Email?: string | null
          Localização?: string | null
          "Nome Comercial"?: string | null
          Observações?: string | null
          Prioridade?: string | null
          "Redes Sociais"?: string | null
          "Tamanho do Negócio"?: string | null
          Telefone?: string | null
          "Tipo de Empresa"?: string | null
          Website?: string | null
        }
        Update: {
          Email?: string | null
          Localização?: string | null
          "Nome Comercial"?: string | null
          Observações?: string | null
          Prioridade?: string | null
          "Redes Sociais"?: string | null
          "Tamanho do Negócio"?: string | null
          Telefone?: string | null
          "Tipo de Empresa"?: string | null
          Website?: string | null
        }
        Relationships: []
      }
      "Manus3.0": {
        Row: {
          "Cidade/Estado": string | null
          Contato: string | null
          Nome: string | null
          Observações: string | null
          Tamanho: string | null
          Tipo: string | null
          "Tipo de Café": string | null
        }
        Insert: {
          "Cidade/Estado"?: string | null
          Contato?: string | null
          Nome?: string | null
          Observações?: string | null
          Tamanho?: string | null
          Tipo?: string | null
          "Tipo de Café"?: string | null
        }
        Update: {
          "Cidade/Estado"?: string | null
          Contato?: string | null
          Nome?: string | null
          Observações?: string | null
          Tamanho?: string | null
          Tipo?: string | null
          "Tipo de Café"?: string | null
        }
        Relationships: []
      }
      "Manus4.0": {
        Row: {
          Avaliação: number | null
          "Cidade/Estado": string | null
          Contato: string | null
          Endereço: string | null
          Nome: string | null
          "Número de Avaliações": number | null
          Observações: string | null
          Prioridade: string | null
          Tamanho: string | null
          Tipo: string | null
          "Tipo de Café": string | null
        }
        Insert: {
          Avaliação?: number | null
          "Cidade/Estado"?: string | null
          Contato?: string | null
          Endereço?: string | null
          Nome?: string | null
          "Número de Avaliações"?: number | null
          Observações?: string | null
          Prioridade?: string | null
          Tamanho?: string | null
          Tipo?: string | null
          "Tipo de Café"?: string | null
        }
        Update: {
          Avaliação?: number | null
          "Cidade/Estado"?: string | null
          Contato?: string | null
          Endereço?: string | null
          Nome?: string | null
          "Número de Avaliações"?: number | null
          Observações?: string | null
          Prioridade?: string | null
          Tamanho?: string | null
          Tipo?: string | null
          "Tipo de Café"?: string | null
        }
        Relationships: []
      }
      "Manus5.0": {
        Row: {
          Cidade: string | null
          "E-mail": string | null
          Estado: string | null
          "Nome do Estabelecimento": string | null
          Observações: string | null
          "Redes Sociais": string | null
          Site: string | null
          "Tamanho do Negócio": string | null
          Telefone: string | null
          "Tipo de Empresa": string | null
          "Tipo(s) de Café Vendido": string | null
        }
        Insert: {
          Cidade?: string | null
          "E-mail"?: string | null
          Estado?: string | null
          "Nome do Estabelecimento"?: string | null
          Observações?: string | null
          "Redes Sociais"?: string | null
          Site?: string | null
          "Tamanho do Negócio"?: string | null
          Telefone?: string | null
          "Tipo de Empresa"?: string | null
          "Tipo(s) de Café Vendido"?: string | null
        }
        Update: {
          Cidade?: string | null
          "E-mail"?: string | null
          Estado?: string | null
          "Nome do Estabelecimento"?: string | null
          Observações?: string | null
          "Redes Sociais"?: string | null
          Site?: string | null
          "Tamanho do Negócio"?: string | null
          Telefone?: string | null
          "Tipo de Empresa"?: string | null
          "Tipo(s) de Café Vendido"?: string | null
        }
        Relationships: []
      }
      "Manus6.0": {
        Row: {
          Avaliação: number | null
          "Cidade/Estado": string | null
          Contato: string | null
          Endereço: string | null
          Nome: string | null
          "Número de Avaliações": number | null
          Observações: string | null
          Prioridade: string | null
          Tamanho: string | null
          Tipo: string | null
          "Tipo de Café": string | null
        }
        Insert: {
          Avaliação?: number | null
          "Cidade/Estado"?: string | null
          Contato?: string | null
          Endereço?: string | null
          Nome?: string | null
          "Número de Avaliações"?: number | null
          Observações?: string | null
          Prioridade?: string | null
          Tamanho?: string | null
          Tipo?: string | null
          "Tipo de Café"?: string | null
        }
        Update: {
          Avaliação?: number | null
          "Cidade/Estado"?: string | null
          Contato?: string | null
          Endereço?: string | null
          Nome?: string | null
          "Número de Avaliações"?: number | null
          Observações?: string | null
          Prioridade?: string | null
          Tamanho?: string | null
          Tipo?: string | null
          "Tipo de Café"?: string | null
        }
        Relationships: []
      }
      "Manus7.0": {
        Row: {
          "Cidade e estado": string | null
          "Forma(s) de contato válida(s)": string | null
          "Nome do estabelecimento": string | null
          "Observações adicionais": string | null
          "Tamanho do negócio": string | null
          "Tipo de empresa": string | null
          "Tipo(s) de café vendido": string | null
        }
        Insert: {
          "Cidade e estado"?: string | null
          "Forma(s) de contato válida(s)"?: string | null
          "Nome do estabelecimento"?: string | null
          "Observações adicionais"?: string | null
          "Tamanho do negócio"?: string | null
          "Tipo de empresa"?: string | null
          "Tipo(s) de café vendido"?: string | null
        }
        Update: {
          "Cidade e estado"?: string | null
          "Forma(s) de contato válida(s)"?: string | null
          "Nome do estabelecimento"?: string | null
          "Observações adicionais"?: string | null
          "Tamanho do negócio"?: string | null
          "Tipo de empresa"?: string | null
          "Tipo(s) de café vendido"?: string | null
        }
        Relationships: []
      }
      teste: {
        Row: {
          "Cidade e estado": string
          "Forma(s) de contato válida(s)": string
          "Nome do estabelecimento": string
          "Observações adicionais": string
          "Tamanho do negócio": string
          "Tipo de empresa": string
          "Tipo(s) de café vendido": string
        }
        Insert: {
          "Cidade e estado": string
          "Forma(s) de contato válida(s)": string
          "Nome do estabelecimento": string
          "Observações adicionais": string
          "Tamanho do negócio": string
          "Tipo de empresa": string
          "Tipo(s) de café vendido": string
        }
        Update: {
          "Cidade e estado"?: string
          "Forma(s) de contato válida(s)"?: string
          "Nome do estabelecimento"?: string
          "Observações adicionais"?: string
          "Tamanho do negócio"?: string
          "Tipo de empresa"?: string
          "Tipo(s) de café vendido"?: string
        }
        Relationships: []
      }
      teste2: {
        Row: {
          "Cidade e estado": string | null
          "Forma(s) de contato válida(s)": string | null
          "Nome do estabelecimento": string
          "Observações adicionais": string | null
          "Tamanho do negócio": string | null
          "Tipo de empresa": string | null
          "Tipo(s) de café vendido": string | null
        }
        Insert: {
          "Cidade e estado"?: string | null
          "Forma(s) de contato válida(s)"?: string | null
          "Nome do estabelecimento": string
          "Observações adicionais"?: string | null
          "Tamanho do negócio"?: string | null
          "Tipo de empresa"?: string | null
          "Tipo(s) de café vendido"?: string | null
        }
        Update: {
          "Cidade e estado"?: string | null
          "Forma(s) de contato válida(s)"?: string | null
          "Nome do estabelecimento"?: string
          "Observações adicionais"?: string | null
          "Tamanho do negócio"?: string | null
          "Tipo de empresa"?: string | null
          "Tipo(s) de café vendido"?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
