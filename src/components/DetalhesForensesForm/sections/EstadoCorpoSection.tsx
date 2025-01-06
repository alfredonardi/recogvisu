import React from 'react';
import { FormSectionProps } from '../../../types';
import CheckboxWithSpecification from '../../shared/CheckboxWithSpecification';

const EstadoCorpoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    const estados = new Set(data.estadoCorpo || []);
    if (checked) {
      estados.add(field);
    } else {
      estados.delete(field);
    }
    onChange('estadoCorpo', Array.from(estados));
  };

  return (
    <fieldset className="form-group">
      <legend><strong>Estado do Corpo</strong></legend>
      <div>
        {[
          'Descoberto', 'Enterrado', 'Na água', 'Inchado', 'Não inchado',
          'Em decomposição', 'Semi-enterrado', 'Coberto', 'Mumificado',
          'CarbonizadoParcial', 'CarbonizadoTotal', 'Esqueletizado',
          'Fragmentado', 'Congelado', 'Com sinais de violência'
        ].map(estado => (
          <CheckboxWithSpecification
            key={estado}
            id={`estado-${estado}`}
            label={estado}
            checked={(data.estadoCorpo || []).includes(estado)}
            onChange={handleCheckboxChange(estado)}
          />
        ))}
        <CheckboxWithSpecification
          id="outrosEstadoCorpo"
          label="Outros"
          checked={(data.estadoCorpo || []).includes('outros')}
          onChange={handleCheckboxChange('outros')}
          specification={data.descricaoOutrosEstadoCorpo}
          onSpecificationChange={(value) => onChange('descricaoOutrosEstadoCorpo', value)}
          showSpecification={(data.estadoCorpo || []).includes('outros')}
        />
      </div>
    </fieldset>
  );
};

export default EstadoCorpoSection;