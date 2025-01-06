import React from 'react';
import { FormSectionProps } from '../../types';

const InformacoesPertinentesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Informações pertinentes</strong></legend>
      <textarea
        className="large-input"
        placeholder="Observação"
        value={data.informacoesPertinentesLocalInterno || ''}
        onChange={(e) => onChange('informacoesPertinentesLocalInterno', e.target.value)}
      />
    </fieldset>
  );
};

export default InformacoesPertinentesSection;