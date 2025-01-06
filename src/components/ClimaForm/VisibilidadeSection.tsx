import React from 'react';
import { FormSectionProps } from '../../types';

const VisibilidadeSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <div>
      <label htmlFor="visibilidade"><strong>Visibilidade</strong></label>
      <select
        id="visibilidade"
        className="normal-input"
        value={data.visibilidade || ''}
        onChange={(e) => onChange('visibilidade', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Boa">Boa</option>
        <option value="Moderada">Moderada</option>
        <option value="Ruim">Ruim</option>
        <option value="Péssima">Péssima</option>
      </select>
    </div>
  );
};

export default VisibilidadeSection;