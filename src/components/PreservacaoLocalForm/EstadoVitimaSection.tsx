import React from 'react';
import { FormSectionProps } from '../../types';

const EstadoVitimaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Estado da vítima</strong></legend>
      <div>
        <select 
          id="estadoVitima" 
          className="normal-input"
          value={data.estadoVitima || ''}
          onChange={(e) => onChange('estadoVitima', e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="Coberta">Coberta</option>
          <option value="Descoberta">Descoberta</option>
        </select>
      </div>
      
      {data.estadoVitima === 'Coberta' && (
        <div id="materialCobertura">
          <label htmlFor="materialQueCobria">
            <strong>Material que a cobria:</strong>
          </label>
          <input 
            type="text" 
            id="materialQueCobria" 
            name="materialQueCobria" 
            placeholder="Especifique o material"
            value={data.materialQueCobria || ''}
            onChange={(e) => onChange('materialQueCobria', e.target.value)}
          />
        </div>
      )}
    </fieldset>
  );
};

export default EstadoVitimaSection;