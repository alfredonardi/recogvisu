import React from 'react';
import { FormSectionProps } from '../../types';

const InformacoesPertinentesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <label htmlFor="informacoesPertinentesLocalFatos"><strong>Informações pertinentes:</strong></label>
      <input
        type="text"
        id="informacoesPertinentesLocalFatos"
        className="normal-input"
        value={data.informacoesPertinentesLocalFatos || ''}
        onChange={(e) => onChange('informacoesPertinentesLocalFatos', e.target.value)}
      />
    </fieldset>
  );
};

export default InformacoesPertinentesSection;