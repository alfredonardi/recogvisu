import React from 'react';
import { FormSectionProps } from '../../types';
import CheckboxWithSpecification from '../shared/CheckboxWithSpecification';

const MedidasContraforensesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    onChange(field, checked);
  };

  return (
    <fieldset className="form-group">
      <label htmlFor="medidasContraforenses">
        <strong>Indícios de medidas contraforenses:</strong>
      </label>
      <select
        id="medidasContraforenses"
        className="normal-input"
        value={data.medidasContraforenses || ''}
        onChange={(e) => onChange('medidasContraforenses', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>

      {data.medidasContraforenses === 'Sim' && (
        <div>
          <CheckboxWithSpecification
            id="inutilizacaoCCTV"
            label="Inutilização do CCTV"
            checked={data.inutilizacaoCCTV || false}
            onChange={handleCheckboxChange('inutilizacaoCCTV')}
          />
          <CheckboxWithSpecification
            id="usoLuvas"
            label="Uso de luvas"
            checked={data.usoLuvas || false}
            onChange={handleCheckboxChange('usoLuvas')}
          />
          <CheckboxWithSpecification
            id="limpezaCenaCrime"
            label="Limpeza da cena do crime"
            checked={data.limpezaCenaCrime || false}
            onChange={handleCheckboxChange('limpezaCenaCrime')}
          />
          <CheckboxWithSpecification
            id="destruicaoEvidencias"
            label="Destruição de evidências"
            checked={data.destruicaoEvidencias || false}
            onChange={handleCheckboxChange('destruicaoEvidencias')}
          />
          <CheckboxWithSpecification
            id="disfarceCaracteristicas"
            label="Disfarce ou alteração de características"
            checked={data.disfarceCaracteristicas || false}
            onChange={handleCheckboxChange('disfarceCaracteristicas')}
          />
          <CheckboxWithSpecification
            id="outrosContraforenses"
            label="Outros"
            checked={data.outrosContraforenses || false}
            onChange={handleCheckboxChange('outrosContraforenses')}
            specification={data.especificacaoContraforenses}
            onSpecificationChange={(value) => onChange('especificacaoContraforenses', value)}
            showSpecification={data.outrosContraforenses}
          />
        </div>
      )}
    </fieldset>
  );
};

export default MedidasContraforensesSection;