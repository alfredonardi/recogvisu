import React from 'react';
import { FormSectionProps } from '../../types';

const VeiculoEstadoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <>
      <div>
        <label htmlFor="motorLigado"><strong>Motor ligado?</strong></label>
        <select
          id="motorLigado"
          className="normal-input"
          value={data.motorLigado || ''}
          onChange={(e) => onChange('motorLigado', e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
      </div>

      <div>
        <label htmlFor="danosVeiculo"><strong>Danos ao veículo?</strong></label>
        <select
          id="danosVeiculo"
          className="normal-input"
          value={data.danosVeiculo || ''}
          onChange={(e) => onChange('danosVeiculo', e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>

        {data.danosVeiculo === 'Sim' && (
          <textarea
            id="descricaoDanos"
            className="large-input"
            placeholder="Descreva os danos"
            value={data.descricaoDanos || ''}
            onChange={(e) => onChange('descricaoDanos', e.target.value)}
          />
        )}
      </div>
    </>
  );
};

export default VeiculoEstadoSection;