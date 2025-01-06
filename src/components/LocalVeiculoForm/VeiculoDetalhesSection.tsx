import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';

const VeiculoDetalhesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <>
      <SelectWithSpecification
        label="Cor:"
        id="corVeiculo"
        value={data.corVeiculo || ''}
        specificationValue={data.outraCor || ''}
        onChange={(value) => onChange('corVeiculo', value)}
        onSpecificationChange={(value) => onChange('outraCor', value)}
        options={[
          { value: 'Branco', label: 'Branca' },
          { value: 'Preto', label: 'Preta' },
          { value: 'Prata', label: 'Prata' },
          { value: 'Vermelho', label: 'Vermelha' },
          { value: 'Azul', label: 'Azul' },
          { value: 'outros', label: 'Outra' }
        ]}
      />

      <div>
        <label><strong>Proprietário:</strong></label>
        <input
          type="text"
          id="proprietario"
          className="normal-input"
          value={data.proprietario || ''}
          onChange={(e) => onChange('proprietario', e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="tipoIdentificacao"><strong>Tipo de identificação:</strong></label>
        <select
          id="tipoIdentificacao"
          className="normal-input"
          value={data.tipoIdentificacao || ''}
          onChange={(e) => onChange('tipoIdentificacao', e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="CPF">CPF</option>
          <option value="CNPJ">CNPJ</option>
        </select>
      </div>

      {data.tipoIdentificacao && (
        <div>
          <input
            type="text"
            id="numeroIdentificacao"
            className="normal-input"
            placeholder={`Digite o ${data.tipoIdentificacao}`}
            value={data.numeroIdentificacao || ''}
            onChange={(e) => onChange('numeroIdentificacao', e.target.value)}
          />
        </div>
      )}
    </>
  );
};

export default VeiculoDetalhesSection;