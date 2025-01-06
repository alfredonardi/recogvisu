import React from 'react';
import { FormSectionProps } from '../../types';
import CheckboxWithSpecification from '../shared/CheckboxWithSpecification';

const PessoasPresentesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    onChange(field, checked);
  };

  return (
    <fieldset className="form-group">
      <label><strong>Pessoas Presentes no Local</strong></label>
      <div>
        <CheckboxWithSpecification
          id="curiosos"
          label="Curiosos"
          checked={data.curiosos || false}
          onChange={handleCheckboxChange('curiosos')}
        />
        <CheckboxWithSpecification
          id="parentes"
          label="Parentes"
          checked={data.parentes || false}
          onChange={handleCheckboxChange('parentes')}
        />
        <CheckboxWithSpecification
          id="vizinhos"
          label="Vizinho(s)"
          checked={data.vizinhos || false}
          onChange={handleCheckboxChange('vizinhos')}
        />
        <CheckboxWithSpecification
          id="imprensa"
          label="Imprensa"
          checked={data.imprensa || false}
          onChange={handleCheckboxChange('imprensa')}
        />
        <CheckboxWithSpecification
          id="outrosPresentes"
          label="Outros"
          checked={data.outrosPresentes || false}
          onChange={handleCheckboxChange('outrosPresentes')}
          specification={data.outrosPresentesEspecificacao}
          onSpecificationChange={(value) => onChange('outrosPresentesEspecificacao', value)}
          showSpecification={data.outrosPresentes}
        />
      </div>
    </fieldset>
  );
};

export default PessoasPresentesSection;