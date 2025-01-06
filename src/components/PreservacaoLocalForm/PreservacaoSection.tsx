import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';
import VeiculoPreservacaoFields from './VeiculoPreservacaoFields';
import DocumentoFields from './DocumentoFields';

const PreservacaoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Preservação do Local</strong></legend>
      
      <SelectWithSpecification
        label="Local preservado por(pela):"
        id="preservadoPorSelect"
        value={data.preservadoPor || ''}
        specificationValue={data.especificacaoPreservadoPor || ''}
        onChange={(value) => onChange('preservadoPor', value)}
        onSpecificationChange={(value) => onChange('especificacaoPreservadoPor', value)}
        options={[
          { value: 'PC', label: 'Polícia Civil' },
          { value: 'PM', label: 'Polícia Militar' },
          { value: 'PF', label: 'Polícia Federal' },
          { value: 'GCM', label: 'Guarda Civil Metropolitana' },
          { value: 'BM', label: 'Bombeiro Militar' },
          { value: 'outros', label: 'Outro' }
        ]}
      />

      {data.preservadoPor && (
        <div id="additionalFields">
          <label htmlFor="responsavel"><strong>Responsável:</strong></label>
          <input 
            type="text" 
            id="responsavel"
            className="large-input"
            value={data.responsavel || ''}
            onChange={(e) => onChange('responsavel', e.target.value)}
          />

          <DocumentoFields data={data} onChange={onChange} />
          <VeiculoPreservacaoFields data={data} onChange={onChange} />
        </div>
      )}
    </fieldset>
  );
};

export default PreservacaoSection;