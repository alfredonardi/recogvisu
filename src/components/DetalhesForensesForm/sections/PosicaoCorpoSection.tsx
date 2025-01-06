import React from 'react';
import { FormSectionProps } from '../../../types';
import SelectWithSpecification from '../../shared/SelectWithSpecification';

const PosicaoCorpoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Do óbito</strong></legend>
      
      <SelectWithSpecification
        label="Posição do corpo:"
        id="posicaoCorpo"
        value={data.posicaoCorpo || ''}
        specificationValue={data.especificarOutraPosicao || ''}
        onChange={(value) => onChange('posicaoCorpo', value)}
        onSpecificationChange={(value) => onChange('especificarOutraPosicao', value)}
        options={[
          { value: 'DecubitoDorsal', label: 'Decúbito dorsal' },
          { value: 'DecubitoVentral', label: 'Decúbito ventral' },
          { value: 'DecubitoLateralDireito', label: 'Decúbito lateral direito' },
          { value: 'DecubitoLateralEsquerdo', label: 'Decúbito lateral esquerdo' },
          { value: 'SuspensaoCompleta', label: 'Suspensão completa' },
          { value: 'SuspensaoIncompleta', label: 'Suspensão incompleta' },
          { value: 'Sentado', label: 'Sentado' },
          { value: 'Genupeitoral', label: 'Genupeitoral' },
          { value: 'Submerso', label: 'Submerso (completa ou incompleta)' },
          { value: 'PosicaoDeBoxeador', label: 'Posição de boxeador' },
          { value: 'Fowler', label: 'Posição de Fowler' },
          { value: 'Trendelenburg', label: 'Posição de Trendelenburg' },
          { value: 'PosicaoOrtostatica', label: 'Posição ortostática (em pé)' },
          { value: 'JoelhoPeito', label: 'Posição joelho-peito' },
          { value: 'PosicaoSims', label: 'Posição de Sims' },
          { value: 'Prone', label: 'Posição prone (deitado de barriga para baixo)' },
          { value: 'Supine', label: 'Posição supine (deitado de barriga para cima)' },
          { value: 'PosicaoLitotomica', label: 'Posição litotômica (com pernas elevadas e dobradas)' },
          { value: 'outros', label: 'Outra' }
        ]}
      />

      <label htmlFor="posicaoCorpo1"><strong>Estado da posição do corpo:</strong></label>
      <select
        id="posicaoCorpo1"
        className="normal-input"
        value={data.posicaoCorpo1 || ''}
        onChange={(e) => onChange('posicaoCorpo1', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Natural">Natural ou comum</option>
        <option value="NaoNatural">Não natural ou incomum</option>
      </select>

      {data.posicaoCorpo1 === 'NaoNatural' && (
        <input
          type="text"
          className="normal-input"
          placeholder="Explique a posição incomum ou não natural"
          value={data.explicacaoPosicao || ''}
          onChange={(e) => onChange('explicacaoPosicao', e.target.value)}
        />
      )}
    </fieldset>
  );
};

export default PosicaoCorpoSection;