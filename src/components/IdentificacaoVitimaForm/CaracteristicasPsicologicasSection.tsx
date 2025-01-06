import React from 'react';
import { FormSectionProps } from '../../types';
import DesviosCondutaSection from './sections/DesviosCondutaSection';
import RelacionamentoFamiliarSection from './sections/RelacionamentoFamiliarSection';

const CaracteristicasPsicologicasSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group" id="identificacao-psicologica">
      <legend><strong>Características psicológicas/sociológicas</strong></legend>
      <DesviosCondutaSection data={data} onChange={onChange} />
      <RelacionamentoFamiliarSection data={data} onChange={onChange} />
    </fieldset>
  );
};

export default CaracteristicasPsicologicasSection;