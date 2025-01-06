import React from 'react';
import { FormSectionProps } from '../../types';
import InvestigacoesPreliminares from './sections/InvestigacoesPreliminares';
import ConsideracoesFinais from './sections/ConsideracoesFinais';

const ConsideracoesFinaisForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="consideracoes-finais">
      <h2>9. Considerações Finais</h2>
      <InvestigacoesPreliminares data={data} onChange={onChange} />
      <ConsideracoesFinais data={data} onChange={onChange} />
    </section>
  );
};

export default ConsideracoesFinaisForm;