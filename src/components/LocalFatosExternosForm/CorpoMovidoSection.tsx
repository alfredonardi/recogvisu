import React from 'react';
import { FormSectionProps } from '../../types';

const CorpoMovidoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Movimentação do Corpo</strong></legend>
      
      <label htmlFor="corpoMovido">
        <strong>Evidências que o corpo foi movido de outro local para o atual?</strong>
      </label>
      <select
        id="corpoMovido"
        className="normal-input"
        value={data.corpoMovido || ''}
        onChange={(e) => onChange('corpoMovido', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>

      {data.corpoMovido === 'Sim' && (
        <div className="mt-4">
          <label htmlFor="detalhesCorpoMovido">
            <strong>Descreva os detalhes:</strong>
          </label>
          <textarea
            id="detalhesCorpoMovido"
            className="large-input"
            placeholder="Descreva os detalhes sobre a movimentação do corpo"
            value={data.detalhesCorpoMovido || ''}
            onChange={(e) => onChange('detalhesCorpoMovido', e.target.value)}
            rows={4}
          />
        </div>
      )}
    </fieldset>
  );
};

export default CorpoMovidoSection;