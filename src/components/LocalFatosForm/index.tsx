import React from 'react';
import { FormSectionProps } from '../../types';
import InformacoesGeraisSection from './InformacoesGeraisSection';
import EstabelecimentosSection from './EstabelecimentosSection';
import PessoasPresentesSection from './PessoasPresentesSection';
import InformacoesPertinentesSection from './InformacoesPertinentesSection';

const LocalFatosForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="local-fatos">
      <h2>5. Do Local dos Fatos</h2>
      <InformacoesGeraisSection data={data} onChange={onChange} />
      <EstabelecimentosSection data={data} onChange={onChange} />
      <PessoasPresentesSection data={data} onChange={onChange} />
      <InformacoesPertinentesSection data={data} onChange={onChange} />
    </section>
  );
};

export default LocalFatosForm;