import { useState, useEffect } from 'react';
import { FormData } from '../types';

const STORAGE_KEY = 'reco_form_data';

const getInitialState = (): FormData => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  return savedData ? JSON.parse(savedData) : {
    // Initialize arrays for dynamic lists
    tatuagensDeformidades: [],
    vestimentas: [],
    aderecos: [],
    lesoes: [],
    testemunhas: [],
    // Other initial fields...
  };
};

export const useForm = () => {
  const [formData, setFormData] = useState<FormData>(getInitialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const resetForm = () => {
    if (window.confirm('Tem certeza que deseja gerar uma nova RECO? Todos os dados preenchidos serão excluídos.')) {
      localStorage.removeItem(STORAGE_KEY);
      setFormData(getInitialState());
      setErrors({});
    }
  };

  return {
    formData,
    errors,
    handleChange,
    resetForm
  };
};