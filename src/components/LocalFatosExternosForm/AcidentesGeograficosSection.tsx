import React from 'react';
import { FormSectionProps } from '../../types';
import CheckboxWithSpecification from '../shared/CheckboxWithSpecification';

const AcidentesGeograficosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    onChange(field, checked);
  };

  return (
    <fieldset className="form-group">
      <label><strong>Acidente(s) Geográfico(s):</strong></label>
      <div>
        <CheckboxWithSpecification
          id="rio"
          label="Rio"
          checked={data.rio || false}
          onChange={handleCheckboxChange('rio')}
        />
        <CheckboxWithSpecification
          id="lago"
          label="Lago"
          checked={data.lago || false}
          onChange={handleCheckboxChange('lago')}
        />
        <CheckboxWithSpecification
          id="monte"
          label="Monte"
          checked={data.monte || false}
          onChange={handleCheckboxChange('monte')}
        />
        <CheckboxWithSpecification
          id="represa"
          label="Represa"
          checked={data.represa || false}
          onChange={handleCheckboxChange('represa')}
        />
        <CheckboxWithSpecification
          id="corrego"
          label="Córrego"
          checked={data.corrego || false}
          onChange={handleCheckboxChange('corrego')}
        />
        <CheckboxWithSpecification
          id="outrosAcidentes"
          label="Outro(s)"
          checked={data.outrosAcidentes || false}
          onChange={handleCheckboxChange('outrosAcidentes')}
          specification={data.outrosAcidentesEspecificacao}
          onSpecificationChange={(value) => onChange('outrosAcidentesEspecificacao', value)}
          showSpecification={data.outrosAcidentes}
        />
      </div>
    </fieldset>
  );
};

export default AcidentesGeograficosSection;