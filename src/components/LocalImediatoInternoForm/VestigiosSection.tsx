import React from 'react';
import { FormSectionProps } from '../../types';
import CheckboxWithSpecification from '../shared/CheckboxWithSpecification';

const VestigiosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    onChange(field, checked);
  };

  return (
    <fieldset className="form-group">
      <label htmlFor="localDisparo"><strong>Vestígios de disparo de arma de fogo:</strong></label>
      <select
        id="localDisparo"
        className="normal-input"
        value={data.localDisparo || ''}
        onChange={(e) => onChange('localDisparo', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Sim">Sim</option>
        <option value="Nao">Não</option>
      </select>

      {data.localDisparo === 'Sim' && (
        <div>
          <label><strong>Localização dos Vestígios:</strong></label>
          <div>
            <CheckboxWithSpecification
              id="paredes"
              label="Paredes"
              checked={data.paredes || false}
              onChange={handleCheckboxChange('paredes')}
            />
            <CheckboxWithSpecification
              id="teto"
              label="Teto"
              checked={data.teto || false}
              onChange={handleCheckboxChange('teto')}
            />
            <CheckboxWithSpecification
              id="mobilia"
              label="Mobília"
              checked={data.mobilia || false}
              onChange={handleCheckboxChange('mobilia')}
            />
            <CheckboxWithSpecification
              id="janelas"
              label="Janelas"
              checked={data.janelas || false}
              onChange={handleCheckboxChange('janelas')}
            />
            <CheckboxWithSpecification
              id="portas"
              label="Portas"
              checked={data.portas || false}
              onChange={handleCheckboxChange('portas')}
            />
            <CheckboxWithSpecification
              id="outrosVestigios"
              label="Outros"
              checked={data.outrosVestigios || false}
              onChange={handleCheckboxChange('outrosVestigios')}
              specification={data.especificacaoVestigios}
              onSpecificationChange={(value) => onChange('especificacaoVestigios', value)}
              showSpecification={data.outrosVestigios}
            />
          </div>
        </div>
      )}
    </fieldset>
  );
};

export default VestigiosSection;