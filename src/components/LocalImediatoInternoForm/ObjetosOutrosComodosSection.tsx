import React from 'react';
import { FormSectionProps } from '../../types';
import CheckboxWithSpecification from '../shared/CheckboxWithSpecification';

const ObjetosOutrosComodosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    onChange(field, checked);
  };

  return (
    <fieldset className="form-group">
      <legend><strong>Objetos encontrados em outros cômodos</strong></legend>
      <div>
        <CheckboxWithSpecification
          id="armas"
          label="Armas"
          checked={data.armas || false}
          onChange={handleCheckboxChange('armas')}
        />
        <CheckboxWithSpecification
          id="drogas"
          label="Drogas"
          checked={data.drogas || false}
          onChange={handleCheckboxChange('drogas')}
        />
        <CheckboxWithSpecification
          id="manchasSangue"
          label="Manchas de sangue"
          checked={data.manchasSangue || false}
          onChange={handleCheckboxChange('manchasSangue')}
        />
        <CheckboxWithSpecification
          id="documentos"
          label="Documentos"
          checked={data.documentos || false}
          onChange={handleCheckboxChange('documentos')}
        />
        <CheckboxWithSpecification
          id="ferramentas"
          label="Ferramentas"
          checked={data.ferramentas || false}
          onChange={handleCheckboxChange('ferramentas')}
        />
        <CheckboxWithSpecification
          id="eletronicos"
          label="Eletrônicos"
          checked={data.eletronicos || false}
          onChange={handleCheckboxChange('eletronicos')}
        />
        <CheckboxWithSpecification
          id="pertencesDeTerceiros1"
          label="Pertences de Terceiros"
          checked={data.pertencesDeTerceiros1 || false}
          onChange={handleCheckboxChange('pertencesDeTerceiros1')}
        />
        <CheckboxWithSpecification
          id="outrosObjetos"
          label="Outros"
          checked={data.outrosObjetos || false}
          onChange={handleCheckboxChange('outrosObjetos')}
          specification={data.especificacaoObjetosOutrosComodos}
          onSpecificationChange={(value) => onChange('especificacaoObjetosOutrosComodos', value)}
          showSpecification={data.outrosObjetos}
        />
      </div>
    </fieldset>
  );
};

export default ObjetosOutrosComodosSection;