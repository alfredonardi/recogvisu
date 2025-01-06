import React from 'react';
import { FormSectionProps } from '../../types';
import { generateTemperatureOptions } from '../../utils/temperatureUtils';

const TemperaturaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const temperatureOptions = generateTemperatureOptions(-10, 50);
  
  return (
    <>
      <label htmlFor="temperatura"><strong>Temperatura</strong></label>
      <select
        id="temperatura"
        className="normal-input"
        value={data.temperatura || ''}
        onChange={(e) => onChange('temperatura', e.target.value)}
      >
        <option value="">Selecione...</option>
        {temperatureOptions.map(temp => (
          <option key={temp} value={temp}>{temp}°C</option>
        ))}
      </select>

      <label htmlFor="sensacaoTermica"><strong>Sensação térmica:</strong></label>
      <select
        id="sensacaoTermica"
        className="normal-input"
        value={data.sensacaoTermica || ''}
        onChange={(e) => onChange('sensacaoTermica', e.target.value)}
      >
        <option value="">Selecione...</option>
        {temperatureOptions.map(temp => (
          <option key={temp} value={temp}>{temp}°C</option>
        ))}
      </select>

      <label htmlFor="umidadeAr"><strong>Umidade relativa do ar:</strong></label>
      <select
        id="umidadeAr"
        className="normal-input"
        value={data.umidadeAr || ''}
        onChange={(e) => onChange('umidadeAr', e.target.value)}
      >
        <option value="">Selecione...</option>
        {Array.from({ length: 101 }, (_, i) => (
          <option key={i} value={i}>{i}%</option>
        ))}
      </select>
    </>
  );
};

export default TemperaturaSection;