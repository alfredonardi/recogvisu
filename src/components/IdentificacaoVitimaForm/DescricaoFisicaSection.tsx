import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';
import CabeloSection from './sections/CabeloSection';
import OlhosCaracteristicasSection from './sections/OlhosCaracteristicasSection';

const DescricaoFisicaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group" id="descricaofisica">
      <legend><strong>Descrição física da vítima</strong></legend>

      <SelectWithSpecification
        label="Identidade racial:"
        id="etnia"
        value={data.etnia || ''}
        specificationValue={data.especificarEtnia || ''}
        onChange={(value) => onChange('etnia', value)}
        onSpecificationChange={(value) => onChange('especificarEtnia', value)}
        options={[
          { value: 'Branca', label: 'Branca' },
          { value: 'Preta', label: 'Preta' },
          { value: 'Parda', label: 'Parda' },
          { value: 'Amarela', label: 'Amarela' },
          { value: 'Indígena', label: 'Indígena' },
          { value: 'outros', label: 'Outra' }
        ]}
      />

      <SelectWithSpecification
        label="Compleição Física:"
        id="compleicaoFisica"
        value={data.compleicaoFisica || ''}
        specificationValue={data.especificarCompleicaoFisica || ''}
        onChange={(value) => onChange('compleicaoFisica', value)}
        onSpecificationChange={(value) => onChange('especificarCompleicaoFisica', value)}
        options={[
          { value: 'Magro', label: 'Magro' },
          { value: 'Esbelto/Athlético', label: 'Esbelto/Athlético' },
          { value: 'Médio/Normolíneo', label: 'Médio/Normolíneo' },
          { value: 'Robusto/Forte', label: 'Robusto/Forte' },
          { value: 'Obeso', label: 'Obeso' },
          { value: 'outros', label: 'Outra' }
        ]}
      />

      <label htmlFor="altura"><strong>Altura (em metros):</strong></label>
      <input
        type="number"
        id="altura"
        className="normal-input"
        min={0.0}
        max={2.50}
        step={0.01}
        placeholder="Exemplo: 1.75"
        value={data.altura || ''}
        onChange={(e) => onChange('altura', parseFloat(e.target.value))}
      />

      <CabeloSection data={data} onChange={onChange} />
      <OlhosCaracteristicasSection data={data} onChange={onChange} />
    </fieldset>
  );
};

export default DescricaoFisicaSection;