import React from 'react';
import { FormSectionProps } from '../../types';
import ColetaMaterialSection from './sections/ColetaMaterialSection';
import LesoesSection from './sections/LesoesSection';
import RegistroBensSection from './sections/RegistroBensSection';
import TestemunhasSection from './sections/TestemunhasSection';

const InformacoesAdicionaisForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="informacoesAdicionais">
      <h2>8. Informações Adicionais</h2>
      <ColetaMaterialSection data={data} onChange={onChange} />
      <LesoesSection data={data} onChange={onChange} />
      <RegistroBensSection data={data} onChange={onChange} />
      <TestemunhasSection data={data} onChange={onChange} />
    </section>
  );
};

export default InformacoesAdicionaisForm;