import React from 'react';
import { FormSectionProps } from '../../types';
import CheckboxWithSpecification from '../shared/CheckboxWithSpecification';

const EstabelecimentosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    onChange(field, checked);
  };

  return (
    <fieldset className="form-group">
      <label><strong>Estabelecimentos próximos</strong></label>
      <div>
        <CheckboxWithSpecification
          id="escolas"
          label="Escola(s)"
          checked={data.escolas || false}
          onChange={handleCheckboxChange('escolas')}
        />
        <CheckboxWithSpecification
          id="bares"
          label="Bar(es) ou Adega(s)"
          checked={data.bares || false}
          onChange={handleCheckboxChange('bares')}
        />
        <CheckboxWithSpecification
          id="prostibulos"
          label="Casa(s) de Massagem e/ou Lupanar(es)"
          checked={data.prostibulos || false}
          onChange={handleCheckboxChange('prostibulos')}
        />
        <CheckboxWithSpecification
          id="igrejas"
          label="Religioso(s)"
          checked={data.igrejas || false}
          onChange={handleCheckboxChange('igrejas')}
        />
        <CheckboxWithSpecification
          id="outrosEstabelecimentos"
          label="Outros"
          checked={data.outrosEstabelecimentos || false}
          onChange={handleCheckboxChange('outrosEstabelecimentos')}
          specification={data.outrosEstabelecimentosEspecificacao}
          onSpecificationChange={(value) => onChange('outrosEstabelecimentosEspecificacao', value)}
          showSpecification={data.outrosEstabelecimentos}
        />
      </div>
    </fieldset>
  );
};

export default EstabelecimentosSection;