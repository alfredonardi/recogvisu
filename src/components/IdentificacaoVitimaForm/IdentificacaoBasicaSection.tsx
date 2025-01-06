import React from 'react';
import { FormSectionProps } from '../../types';

const IdentificacaoBasicaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Vítima:</strong></legend>
      <select
        id="identificacaoVitima"
        className="normal-input"
        value={data.identificacaoVitima || ''}
        onChange={(e) => onChange('identificacaoVitima', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="identificada">Identificada</option>
        <option value="nao_identificada">Não identificada</option>
      </select>

      {data.identificacaoVitima === 'nao_identificada' && (
        <textarea
          id="motivo"
          className="large-input"
          placeholder="Descreva o motivo"
          value={data.motivo || ''}
          onChange={(e) => onChange('motivo', e.target.value)}
        />
      )}
    </fieldset>
  );
};

export default IdentificacaoBasicaSection;