import React from 'react';
import { FormSectionProps } from '../../types';

const InformacoesGeraisSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Informações gerais do local</strong></legend>
      
      <label htmlFor="area"><strong>Área:</strong></label>
      <select 
        id="area" 
        className="normal-input"
        value={data.area || ''}
        onChange={(e) => onChange('area', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Área Urbana">Área Urbana</option>
        <option value="Área Rural">Área Rural</option>
      </select>

      <label htmlFor="perfilSocial"><strong>Perfil social:</strong></label>
      <select 
        id="perfilSocial" 
        className="normal-input"
        value={data.perfilSocial || ''}
        onChange={(e) => onChange('perfilSocial', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="baixíssimo">Baixíssimo</option>
        <option value="baixo">Baixo</option>
        <option value="médio-baixo">Médio-baixo</option>
        <option value="médio">Médio</option>
        <option value="médio-alto">Médio-alto</option>
        <option value="alto">Alto</option>
        <option value="altíssimo">Altíssimo</option>
      </select>

      <label htmlFor="iluminacaoPublica"><strong>Iluminação pública:</strong></label>
      <select 
        id="iluminacaoPublica" 
        className="normal-input"
        value={data.iluminacaoPublica || ''}
        onChange={(e) => onChange('iluminacaoPublica', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="presente">Presente</option>
        <option value="ausente">Ausente</option>
      </select>

      <label htmlFor="redeEsgoto"><strong>Rede de esgoto:</strong></label>
      <select 
        id="redeEsgoto" 
        className="normal-input"
        value={data.redeEsgoto || ''}
        onChange={(e) => onChange('redeEsgoto', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="presente">Presente</option>
        <option value="ausente">Ausente</option>
      </select>

      <label htmlFor="pavimentacao1"><strong>Pavimentação:</strong></label>
      <select 
        id="pavimentacao1" 
        className="normal-input"
        value={data.pavimentacao1 || ''}
        onChange={(e) => onChange('pavimentacao1', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="presente">Presente</option>
        <option value="ausente">Ausente</option>
      </select>

      <label htmlFor="trafegoVeiculos"><strong>Tráfego de veículos:</strong></label>
      <select 
        id="trafegoVeiculos" 
        className="normal-input"
        value={data.trafegoVeiculos || ''}
        onChange={(e) => onChange('trafegoVeiculos', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Congestionado">Congestionado</option>
        <option value="Intenso">Intenso</option>
        <option value="Regular">Regular</option>
        <option value="Reduzido">Reduzido</option>
        <option value="Inexistente">Inexistente</option>
      </select>
    </fieldset>
  );
};

export default InformacoesGeraisSection;