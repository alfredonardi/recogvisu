import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';

const DocumentoResgateFields: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <>
      <SelectWithSpecification
        label="Tipo de documento:"
        id="documentoResgateSelect"
        value={data.tipoDocumentoResgate || ''}
        specificationValue={data.especificacaoTipoDocumentoResgate || ''}
        onChange={(value) => onChange('tipoDocumentoResgate', value)}
        onSpecificationChange={(value) => onChange('especificacaoTipoDocumentoResgate', value)}
        options={[
          { value: 'RE', label: 'RE' },
          { value: 'RG', label: 'RG' },
          { value: 'CRM', label: 'CRM' },
          { value: 'CRE', label: 'CRE' },
          { value: 'CNH', label: 'CNH' },
          { value: 'CPF', label: 'CPF' },
          { value: 'Passaporte', label: 'Passaporte' },
          { value: 'outros', label: 'Outro' }
        ]}
      />

      <label htmlFor="numeroDocumentoResgate"><strong>Nº do Documento:</strong></label>
      <input
        type="text"
        id="numeroDocumentoResgate"
        className="normal-input"
        value={data.numeroDocumentoResgate || ''}
        onChange={(e) => onChange('numeroDocumentoResgate', e.target.value)}
      />

      <label htmlFor="tipoVtrResgate"><strong>Detalhes do Veículo do Resgate:</strong></label>
      <select
        id="tipoVtrResgate"
        className="normal-input"
        value={data.tipoVtrResgate || ''}
        onChange={(e) => onChange('tipoVtrResgate', e.target.value)}
      >
        <option value="">Selecione o número do patrimônio ou a placa de identificação veicular</option>
        <option value="patrimoniovtr">Número do Patrimônio</option>
        <option value="placavtr">Placa de Identificação Veicular</option>
      </select>

      <input
        type="text"
        id="vtrNumeroResgate"
        className="normal-input"
        placeholder="Número do patrimônio ou placa de identificação veicular"
        value={data.vtrNumeroResgate || ''}
        onChange={(e) => onChange('vtrNumeroResgate', e.target.value)}
      />
    </>
  );
};

export default DocumentoResgateFields;