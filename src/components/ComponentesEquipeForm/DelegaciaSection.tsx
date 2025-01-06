import React from 'react';
import { FormSectionProps } from '../../types';

const DelegaciaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Delegacia</strong></legend>
      
      <input 
        type="text" 
        id="delegado" 
        className="large-input" 
        placeholder="Delegado(a)"
        value={data.delegado || ''}
        onChange={(e) => onChange('delegado', e.target.value)}
      />
  
      <input 
        type="text" 
        id="escrivao" 
        className="large-input" 
        placeholder="Escrivão(ã)"
        value={data.escrivao || ''}
        onChange={(e) => onChange('escrivao', e.target.value)}
      />
  
      <input 
        type="text" 
        id="policial1" 
        className="large-input" 
        placeholder="Policial Civil 1"
        value={data.policial1 || ''}
        onChange={(e) => onChange('policial1', e.target.value)}
      />
      <input 
        type="text" 
        id="policial2" 
        className="large-input" 
        placeholder="Policial Civil 2"
        value={data.policial2 || ''}
        onChange={(e) => onChange('policial2', e.target.value)}
      />
    </fieldset>
  );
};

export default DelegaciaSection;