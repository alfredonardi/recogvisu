import React from 'react';
import { FormSectionProps } from '../../types';
import { formatPlaca } from '../../utils/formatters';

const VeiculoIdentificacaoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <>
      <div>
        <label htmlFor="tipoVeiculo"><strong>Tipo de veículo:</strong></label>
        <select
          id="tipoVeiculo"
          className="normal-input"
          value={data.tipoVeiculo || ''}
          onChange={(e) => onChange('tipoVeiculo', e.target.value)}
        >
          <option value="">Selecione o tipo de veículo</option>
          <option value="carros">Carros</option>
          <option value="motos">Motos</option>
          <option value="caminhoes">Caminhões</option>
        </select>
      </div>

      <div>
        <label htmlFor="marcaVeiculo"><strong>Marca:</strong></label>
        <textarea
          id="marcaVeiculo"
          className="normal-input"
          placeholder="Descreva a marca do veículo (ex: Volkswagen, Fiat, Honda, etc)"
          value={data.marcaVeiculo || ''}
          onChange={(e) => onChange('marcaVeiculo', e.target.value)}
          rows={2}
        />
      </div>

      <div>
        <label htmlFor="modeloVeiculo"><strong>Modelo:</strong></label>
        <textarea
          id="modeloVeiculo"
          className="normal-input"
          placeholder="Descreva o modelo do veículo (ex: Gol, Palio, Civic, etc)"
          value={data.modeloVeiculo || ''}
          onChange={(e) => onChange('modeloVeiculo', e.target.value)}
          rows={2}
        />
      </div>

      <div>
        <label htmlFor="placa"><strong>Placa:</strong></label>
        <input
          type="text"
          id="placa"
          className="normal-input"
          maxLength={8}
          placeholder="XXX-0000"
          value={data.placa || ''}
          onChange={(e) => onChange('placa', formatPlaca(e.target.value))}
        />
      </div>
    </>
  );
};

export default VeiculoIdentificacaoSection;