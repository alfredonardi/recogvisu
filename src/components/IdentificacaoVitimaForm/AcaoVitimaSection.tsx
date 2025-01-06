import React from 'react';
import { FormSectionProps } from '../../types';

const AcaoVitimaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <label><strong>Ação da vítima no local:</strong></label>
      <select
        id="acaoVitima"
        className="normal-input"
        value={data.acaoVitima || ''}
        onChange={(e) => onChange('acaoVitima', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Trabalhando">Trabalhando</option>
        <option value="Visitando amigos ou família">Visitando amigos ou família</option>
        <option value="Passando pelo local">Passando pelo local</option>
        <option value="Praticando esporte">Praticando esporte</option>
        <option value="Fazendo compras">Fazendo compras</option>
        <option value="Turismo">Turismo</option>
        <option value="Atividades ilícitas">Atividades ilícitas</option>
        <option value="naoIdentificada">Não identificada</option>
        <option value="outros">Outra(s)</option>
      </select>

      {data.acaoVitima === 'outros' && (
        <input
          type="text"
          id="descricaoAcaoVitimaOutros"
          className="normal-input"
          placeholder="O que ela fazia no local?"
          value={data.descricaoAcaoVitimaOutros || ''}
          onChange={(e) => onChange('descricaoAcaoVitimaOutros', e.target.value)}
        />
      )}
    </fieldset>
  );
};

export default AcaoVitimaSection;