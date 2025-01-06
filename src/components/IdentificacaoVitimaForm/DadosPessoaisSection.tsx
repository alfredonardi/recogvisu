import React from 'react';
import { FormSectionProps } from '../../types';
import IdentificacaoDetalhesSection from './sections/IdentificacaoDetalhesSection';
import EnderecoSection from './sections/EnderecoSection';
import GenitoresSection from './sections/GenitoresSection';
import NascimentoSection from './sections/NascimentoSection';
import NaturalidadeSection from './sections/NaturalidadeSection';
import ProfissaoSection from './sections/ProfissaoSection';

const DadosPessoaisSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  if (data.identificacaoVitima !== 'identificada') {
    return null;
  }

  return (
    <fieldset className="form-group">
      <legend><strong>Dados Pessoais</strong></legend>
      <IdentificacaoDetalhesSection data={data} onChange={onChange} />
      <EnderecoSection data={data} onChange={onChange} />
      <GenitoresSection data={data} onChange={onChange} />
      <NascimentoSection data={data} onChange={onChange} />
      <NaturalidadeSection data={data} onChange={onChange} />
      <ProfissaoSection data={data} onChange={onChange} />
    </fieldset>
  );
};

export default DadosPessoaisSection;