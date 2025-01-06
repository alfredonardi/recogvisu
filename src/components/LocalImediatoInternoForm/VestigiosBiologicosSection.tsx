import React from 'react';
import { FormSectionProps } from '../../types';
import CheckboxWithSpecification from '../shared/CheckboxWithSpecification';

const VestigiosBiologicosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    onChange(field, checked);
  };

  return (
    <fieldset className="form-group">
      <label htmlFor="vestigioBiologico"><strong>Vestígio de outro material biológico:</strong></label>
      <select
        id="vestigioBiologico"
        className="normal-input"
        value={data.vestigioBiologico || ''}
        onChange={(e) => onChange('vestigioBiologico', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>

      {data.vestigioBiologico === 'Sim' && (
        <div>
          <label><strong>Tipo de material biológico:</strong></label>
          <div>
            <CheckboxWithSpecification
              id="cabelos"
              label="Cabelos"
              checked={data.cabelos || false}
              onChange={handleCheckboxChange('cabelos')}
            />
            <CheckboxWithSpecification
              id="pele"
              label="Pele"
              checked={data.pele || false}
              onChange={handleCheckboxChange('pele')}
            />
            <CheckboxWithSpecification
              id="unhas"
              label="Unhas"
              checked={data.unhas || false}
              onChange={handleCheckboxChange('unhas')}
            />
            <CheckboxWithSpecification
              id="sangueBiologico"
              label="Sangue"
              checked={data.sangueBiologico || false}
              onChange={handleCheckboxChange('sangueBiologico')}
            />
            <CheckboxWithSpecification
              id="outrosBiologicos"
              label="Outros"
              checked={data.outrosBiologicos || false}
              onChange={handleCheckboxChange('outrosBiologicos')}
              specification={data.especificacaoBiologicos}
              onSpecificationChange={(value) => onChange('especificacaoBiologicos', value)}
              showSpecification={data.outrosBiologicos}
            />
          </div>
        </div>
      )}
    </fieldset>
  );
};

export default VestigiosBiologicosSection;