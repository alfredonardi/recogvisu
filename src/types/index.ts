export interface FormData {
  // Informações Preliminares
  naturezaDelito: string;
  especificacaoNaturezaDelito?: string;
  data: string;
  hora: string;
  localFatos?: string;
  pontoReferencia?: string;
  tipoLocal?: string;
  circunscricaoPolicial?: string;
  boDP?: string;
  boDPInfo?: string;
  boDHPP?: string;

  // Componentes Equipe
  delegado?: string;
  escrivao?: string;
  policial1?: string;
  policial2?: string;
  perito?: string;
  fotografo?: string;
  papiloscopista1?: string;
  papiloscopista2?: string;

  // Preservação Local
  estadoVitima?: string;
  materialQueCobria?: string;
  preservadoPor?: string;
  especificacaoPreservadoPor?: string;
  responsavel?: string;
  tipoDocumento?: string;
  documentoNumero?: string;
  tentativaResgate?: string;

  // All other form fields...
  [key: string]: any; // Allow dynamic fields
}

export interface FormSectionProps {
  data: FormData;
  onChange: (field: string, value: any) => void;
}

// Re-export all types from other type files
export * from './internalLocationTypes';
export * from './vehicleTypes';
export * from './victimTypes';