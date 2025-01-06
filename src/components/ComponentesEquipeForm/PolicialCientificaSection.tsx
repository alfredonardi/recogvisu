import React from 'react';
import { FormSectionProps } from '../../types';

const PolicialCientificaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Polícia Científica</strong></legend>
      
      <input 
        type="text" 
        id="perito" 
        className="large-input" 
        placeholder="Perito(a) Criminal"
        value={data.perito || ''}
        onChange={(e) => onChange('perito', e.target.value)}
      />
  
      <input 
        type="text" 
        id="fotografo" 
        className="large-input" 
        placeholder="Fotógrafo(a) Pericial"
        value={data.fotografo || ''}
        onChange={(e) => onChange('fotografo', e.target.value)}
      />
    </fieldset>
  );
};

export default PolicialCientificaSection;