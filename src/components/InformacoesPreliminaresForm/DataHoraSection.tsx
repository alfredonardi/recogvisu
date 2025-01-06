import React from 'react';
import { FormSectionProps } from '../../types';
import { useDateTimeSync } from '../../hooks/useDateTimeSync';

const DataHoraSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  useDateTimeSync(data, onChange);

  return (
    <fieldset className="form-group">
      <legend><strong>Data e Hora do Evento</strong></legend>
      <div className="date-time-wrapper">
        <div className="date-input-group">
          <input 
            type="date" 
            id="data" 
            className="date-input"
            value={data.data || ''}
            onChange={(e) => onChange('data', e.target.value)}
            required
            max="9999-12-31"
          />
        </div>

        <div className="time-input-group">
          <input 
            type="time" 
            id="hora" 
            className="time-input"
            value={data.hora || ''}
            onChange={(e) => onChange('hora', e.target.value)}
            required
          />
        </div>
      </div>
    </fieldset>
  );
};

export default DataHoraSection;