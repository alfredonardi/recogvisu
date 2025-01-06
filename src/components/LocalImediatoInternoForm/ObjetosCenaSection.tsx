import React from 'react';
import { FormSectionProps } from '../../types';
import CheckboxWithSpecification from '../shared/CheckboxWithSpecification';

const ObjetosCenaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    onChange(field, checked);
  };

  return (
    <fieldset className="form-group">
      <legend><strong>Objetos observados na cena de crime</strong></legend>
      <div>
        <CheckboxWithSpecification
          id="arma"
          label="Arma"
          checked={data.arma || false}
          onChange={handleCheckboxChange('arma')}
        />
        <CheckboxWithSpecification
          id="drogaCena"
          label="Drogas"
          checked={data.drogaCena || false}
          onChange={handleCheckboxChange('drogaCena')}
        />
        <CheckboxWithSpecification
          id="ferramenta"
          label="Ferramenta"
          checked={data.ferramenta || false}
          onChange={handleCheckboxChange('ferramenta')}
        />
        <CheckboxWithSpecification
          id="documento"
          label="Documento"
          checked={data.documento || false}
          onChange={handleCheckboxChange('documento')}
        />
        <CheckboxWithSpecification
          id="eletronico"
          label="Eletrônico"
          checked={data.eletronico || false}
          onChange={handleCheckboxChange('eletronico')}
        />
        <CheckboxWithSpecification
          id="pertencesDeTerceiros"
          label="Pertences de Terceiros"
          checked={data.pertencesDeTerceiros || false}
          onChange={handleCheckboxChange('pertencesDeTerceiros')}
        />
        <CheckboxWithSpecification
          id="outrosObjetosCena"
          label="Outros"
          checked={data.outrosObjetosCena || false}
          onChange={handleCheckboxChange('outrosObjetosCena')}
          specification={data.especificacaoObjetosCena}
          onSpecificationChange={(value) => onChange('especificacaoObjetosCena', value)}
          showSpecification={data.outrosObjetosCena}
        />
      </div>
    </fieldset>
  );
};

export default ObjetosCenaSection;