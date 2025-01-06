import React from 'react';
import { FormSectionProps } from '../../../types';
import CheckboxWithSpecification from '../../shared/CheckboxWithSpecification';

const ColetaMaterialSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    const materiais = new Set(data.materialPericia || []);
    if (checked) {
      materiais.add(field);
    } else {
      materiais.delete(field);
    }
    onChange('materialPericia', Array.from(materiais));
  };

  return (
    <fieldset className="form-group">
      <legend><strong>Coleta de Material para Perícia</strong></legend>
      <div>
        {[
          'ImpressoesPapilares', 'Sangue', 'Esperma', 'Cabelo', 'Saliva',
          'Tecidos', 'Unhas', 'FluidoVaginal', 'FluidoRetal', 'Pele'
        ].map(material => (
          <CheckboxWithSpecification
            key={material}
            id={`material-${material}`}
            label={material}
            checked={(data.materialPericia || []).includes(material)}
            onChange={handleCheckboxChange(material)}
          />
        ))}
        <CheckboxWithSpecification
          id="outrosMaterialPericia"
          label="Outros"
          checked={(data.materialPericia || []).includes('outros')}
          onChange={handleCheckboxChange('outros')}
          specification={data.descricaoOutrosMaterial}
          onSpecificationChange={(value) => onChange('descricaoOutrosMaterial', value)}
          showSpecification={(data.materialPericia || []).includes('outros')}
        />
      </div>
    </fieldset>
  );
};

export default ColetaMaterialSection;