import { FormData } from '../types';

export const validateRequired = (value: string): boolean => {
  return value.trim() !== '';
};

export const validateDate = (date: string): boolean => {
  return !isNaN(Date.parse(date));
};

export const validateTime = (time: string): boolean => {
  const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(time);
};

export const validateForm = (data: FormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  // Validações obrigatórias
  if (!validateRequired(data.naturezaDelito)) {
    errors.naturezaDelito = 'A natureza do delito é obrigatória';
  }

  if (!validateRequired(data.data)) {
    errors.data = 'A data é obrigatória';
  } else if (!validateDate(data.data)) {
    errors.data = 'Data inválida';
  }

  if (!validateRequired(data.hora)) {
    errors.hora = 'A hora é obrigatória';
  } else if (!validateTime(data.hora)) {
    errors.hora = 'Hora inválida';
  }

  // Validações condicionais
  if (data.naturezaDelito === 'outros' && !validateRequired(data.especificacaoNaturezaDelito || '')) {
    errors.especificacaoNaturezaDelito = 'Especificação da natureza do delito é obrigatória';
  }

  if (data.estadoVitima === 'Coberta' && !validateRequired(data.materialQueCobria || '')) {
    errors.materialQueCobria = 'Material que cobria a vítima é obrigatório';
  }

  return errors;
};