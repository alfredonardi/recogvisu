import React from 'react';
import { FormSectionProps } from '../../types';

const PapiloscopistaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Seção de Atendimento Papiloscópico</strong></legend>
      <input 
        type="text" 
        id="papiloscopista1" 
        className="large-input" 
        placeholder="Papiloscopista 1"
        value={data.papiloscopista1 || ''}
        onChange={(e) => onChange('papiloscopista1', e.target.value)}
      />
      <input 
        type="text" 
        id="papiloscopista2" 
        className="large-input" 
        placeholder="Papiloscopista 2"
        value={data.papiloscopista2 || ''}
        onChange={(e) => onChange('papiloscopista2', e.target.value)}
      />
    </fieldset>
  );
};

export default PapiloscopistaSection;