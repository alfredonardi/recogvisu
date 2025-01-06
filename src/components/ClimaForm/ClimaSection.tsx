import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';

const ClimaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <SelectWithSpecification
      label="Clima:"
      id="climaSelect"
      value={data.clima || ''}
      specificationValue={data.especificacaoClima || ''}
      onChange={(value) => onChange('clima', value)}
      onSpecificationChange={(value) => onChange('especificacaoClima', value)}
      options={[
        { value: 'Ensolarado', label: 'Ensolarado' },
        { value: 'Nublado', label: 'Nublado' },
        { value: 'Chuvoso', label: 'Chuvoso' },
        { value: 'Tempestuoso', label: 'Tempestuoso' },
        { value: 'Ventoso', label: 'Ventoso' },
        { value: 'Frio', label: 'Frio' },
        { value: 'Quente', label: 'Quente' },
        { value: 'Ameno', label: 'Ameno' },
        { value: 'outros', label: 'Outro' }
      ]}
    />
  );
};

export default ClimaSection;