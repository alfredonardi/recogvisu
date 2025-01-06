import React from 'react';
import { FormSectionProps } from '../../types';
import ImovelSection from './ImovelSection';
import ComodoCorpoSection from './ComodoCorpoSection';
import ObjetosCenaSection from './ObjetosCenaSection';
import VestigiosSection from './VestigiosSection';
import VestigiosSangueSection from './VestigiosSangueSection';
import VestigiosBiologicosSection from './VestigiosBiologicosSection';
import MedidasContraforensesSection from './MedidasContraforensesSection';
import ObjetosOutrosComodosSection from './ObjetosOutrosComodosSection';
import AnimaisSection from './AnimaisSection';
import MaterialLeituraSection from './MaterialLeituraSection';
import InformacoesPertinentesSection from './InformacoesPertinentesSection';

const LocalImediatoInternoForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="local-imediato-interno">
      <h2>5i. Local imediato interno</h2>
      <ImovelSection data={data} onChange={onChange} />
      <ComodoCorpoSection data={data} onChange={onChange} />
      <ObjetosCenaSection data={data} onChange={onChange} />
      <VestigiosSection data={data} onChange={onChange} />
      <VestigiosSangueSection data={data} onChange={onChange} />
      <VestigiosBiologicosSection data={data} onChange={onChange} />
      <MedidasContraforensesSection data={data} onChange={onChange} />
      <ObjetosOutrosComodosSection data={data} onChange={onChange} />
      <AnimaisSection data={data} onChange={onChange} />
      <MaterialLeituraSection data={data} onChange={onChange} />
      <InformacoesPertinentesSection data={data} onChange={onChange} />
    </section>
  );
};

export default LocalImediatoInternoForm;