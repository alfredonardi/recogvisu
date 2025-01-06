import React from 'react';
import { FormSectionProps } from '../../types';
import { generateDPOptions } from '../../utils/dpOptions';
import { formatBONumber } from '../../utils/formatters';

const LocalFatosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const dpOptions = generateDPOptions();

  return (
    <fieldset className="form-group">
      <legend><strong>Local dos Fatos</strong></legend>
      
      <label htmlFor="localFatos"><strong>Endereço:</strong></label>
      <input 
        type="text" 
        id="localFatos" 
        className="large-input"
        value={data.localFatos || ''}
        onChange={(e) => onChange('localFatos', e.target.value)}
      />

      <label htmlFor="pontoReferencia"><strong>Ponto de referência:</strong></label>
      <input 
        type="text" 
        id="pontoReferencia" 
        className="large-input" 
        placeholder="Especifique"
        value={data.pontoReferencia || ''}
        onChange={(e) => onChange('pontoReferencia', e.target.value)}
      />

      <label htmlFor="tipoLocal"><strong>Tipo de local:</strong></label>
      <select 
        id="tipoLocal" 
        className="normal-input" 
        required
        value={data.tipoLocal || ''}
        onChange={(e) => onChange('tipoLocal', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Externo">Externo</option>
        <option value="Interno">Interno</option>
      </select>

      <label htmlFor="circunscricaoPolicial"><strong>Circunscrição:</strong></label>
      <select 
        id="circunscricaoPolicial" 
        className="normal-input"
        value={data.circunscricaoPolicial || ''}
        onChange={(e) => onChange('circunscricaoPolicial', e.target.value)}
      >
        <option value="">Selecione...</option>
        {dpOptions.map(dp => (
          <option key={dp.value} value={dp.value}>{dp.label}</option>
        ))}
      </select>

      <label htmlFor="boDPInfo"><strong>Boletim de Ocorrência lavrado no DP:</strong></label>
      <div className="flex gap-4">
        <select 
          id="boDP" 
          className="normal-input"
          value={data.boDP || ''}
          onChange={(e) => onChange('boDP', e.target.value)}
        >
          <option value="">Selecione o DP</option>
          {dpOptions.map(dp => (
            <option key={dp.value} value={dp.value}>{dp.label}</option>
          ))}
        </select>
        <input 
          type="text" 
          id="boDPInfo" 
          maxLength={11} 
          className="normal-input" 
          placeholder="XX1234/25"
          value={data.boDPInfo || ''}
          onChange={(e) => onChange('boDPInfo', formatBONumber(e.target.value))}
        />
      </div>

      <label htmlFor="boDHPP"><strong>Atendimento pelo DHPP</strong></label>
      <select 
        id="boDHPP" 
        className="normal-input"
        value={data.boDHPP || ''}
        onChange={(e) => onChange('boDHPP', e.target.value)}
      >
        <option value="">Selecione o DHPP</option>
        <option value="Geacrim 1">Geacrim 1</option>
        <option value="Geacrim 2">Geacrim 2</option>
        <option value="Geacrim 3">Geacrim 3</option>
        <option value="Geacrim 4">Geacrim 4</option>
        <option value="Geacrim 5">Geacrim 5</option>
      </select>
    </fieldset>
  );
};

export default LocalFatosSection;