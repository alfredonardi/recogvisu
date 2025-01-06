import React from 'react';
import { FormSectionProps } from '../../types';

const VeiculoPreservacaoFields: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <>
      <label htmlFor="tipovtrNumero"><strong>Detalhes do Veículo de Preservação:</strong></label>
      <select
        id="tipovtrNumero"
        className="normal-input"
        value={data.tipoVtrNumero || ''}
        onChange={(e) => onChange('tipoVtrNumero', e.target.value)}
      >
        <option value="">Selecione o número do patrimônio ou a placa de identificação veicular</option>
        <option value="patrimoniovtr">Número do Patrimônio</option>
        <option value="placavtr">Placa de Identificação Veicular</option>
      </select>

      <input
        type="text"
        id="vtrNumero"
        className="normal-input"
        placeholder="Número do patrimônio ou placa de identificação veicular"
        value={data.vtrNumero || ''}
        onChange={(e) => onChange('vtrNumero', e.target.value)}
      />
    </>
  );
};

export default VeiculoPreservacaoFields;