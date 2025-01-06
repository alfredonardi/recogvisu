import React from 'react';
import { FormSectionProps } from '../../types';
import IdentificacaoBasicaSection from './IdentificacaoBasicaSection';
import DadosPessoaisSection from './DadosPessoaisSection';
import DescricaoFisicaSection from './DescricaoFisicaSection';
import CaracteristicasPsicologicasSection from './CaracteristicasPsicologicasSection';
import IdentificadoresExternosSection from './IdentificadoresExternosSection';
import AcaoVitimaSection from './AcaoVitimaSection';

const IdentificacaoVitimaForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="identificacao-vitima">
      <h2>6. Informações Importantes sobre a Vítima</h2>
      <IdentificacaoBasicaSection data={data} onChange={onChange} />
      <DadosPessoaisSection data={data} onChange={onChange} />
      <DescricaoFisicaSection data={data} onChange={onChange} />
      <CaracteristicasPsicologicasSection data={data} onChange={onChange} />
      <IdentificadoresExternosSection data={data} onChange={onChange} />
      <AcaoVitimaSection data={data} onChange={onChange} />
    </section>
  );
};

export default IdentificacaoVitimaForm;