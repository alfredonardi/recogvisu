import React from 'react';
import { FormSectionProps } from '../../types';

const PeriodoLuzSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handlePeriodoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange('periodo', e.target.value);
  };

  const handleLuzChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange('luz', e.target.value);
  };

  return (
    <div>
      <label htmlFor="periodo"><strong>Período e condição de luz</strong></label>
      <select
        id="periodo"
        className="normal-input"
        value={data.periodo || ''}
        onChange={handlePeriodoChange}
      >
        <option value="">Selecione...</option>
        <option value="Manhã">Manhã</option>
        <option value="Tarde">Tarde</option>
        <option value="Noite">Noite</option>
        <option value="Madrugada">Madrugada</option>
      </select>
      
      {data.periodo && (
        <select
          id="luz"
          className="normal-input"
          value={data.luz || ''}
          onChange={handleLuzChange}
        >
          <option value="">Selecione...</option>
          <option value="Clara">Clara</option>
          <option value="Escura">Escura</option>
        </select>
      )}
    </div>
  );
};

export default PeriodoLuzSection;