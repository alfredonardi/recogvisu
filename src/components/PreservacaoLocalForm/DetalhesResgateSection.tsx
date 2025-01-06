import React from 'react';
import { FormSectionProps } from '../../types';
import TipoResgateFields from './TipoResgateFields';
import DocumentoResgateFields from './DocumentoResgateFields';

const DetalhesResgateSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Tentativa de Resgate</strong></legend>
      
      <select
        id="tentativaResgate"
        className="normal-input"
        value={data.tentativaResgate || ''}
        onChange={(e) => onChange('tentativaResgate', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>

      {data.tentativaResgate === 'Sim' && (
        <>
          <TipoResgateFields data={data} onChange={onChange} />
          <DocumentoResgateFields data={data} onChange={onChange} />
        </>
      )}
    </fieldset>
  );
};

export default DetalhesResgateSection;