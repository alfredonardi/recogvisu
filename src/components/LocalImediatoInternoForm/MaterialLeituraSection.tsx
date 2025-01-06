import React from 'react';
import { FormSectionProps } from '../../types';
import CheckboxWithSpecification from '../shared/CheckboxWithSpecification';

const MaterialLeituraSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    onChange(field, checked);
  };

  return (
    <fieldset className="form-group">
      <legend><strong>Livros/Jornais/Revistas no local</strong></legend>
      <div>
        <CheckboxWithSpecification
          id="livros"
          label="Livros"
          checked={data.livros || false}
          onChange={handleCheckboxChange('livros')}
        />
        <CheckboxWithSpecification
          id="jornais"
          label="Jornais"
          checked={data.jornais || false}
          onChange={handleCheckboxChange('jornais')}
        />
        <CheckboxWithSpecification
          id="revistas"
          label="Revistas"
          checked={data.revistas || false}
          onChange={handleCheckboxChange('revistas')}
        />
        <CheckboxWithSpecification
          id="academicos"
          label="Acadêmicos"
          checked={data.academicos || false}
          onChange={handleCheckboxChange('academicos')}
        />
        <CheckboxWithSpecification
          id="recreativos"
          label="Recreativos"
          checked={data.recreativos || false}
          onChange={handleCheckboxChange('recreativos')}
        />
        <CheckboxWithSpecification
          id="outrosMateriais"
          label="Outros"
          checked={data.outrosMateriais || false}
          onChange={handleCheckboxChange('outrosMateriais')}
          specification={data.especificacaoMaterialLeitura}
          onSpecificationChange={(value) => onChange('especificacaoMaterialLeitura', value)}
          showSpecification={data.outrosMateriais}
        />
      </div>
    </fieldset>
  );
};

export default MaterialLeituraSection;