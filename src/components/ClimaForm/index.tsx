import React from 'react';
import { FormSectionProps } from '../../types';
import PeriodoLuzSection from './PeriodoLuzSection';
import ClimaSection from './ClimaSection';
import VisibilidadeSection from './VisibilidadeSection';
import TemperaturaSection from './TemperaturaSection';

const ClimaForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="doclima">
      <h2>4. Do Clima</h2>
      <fieldset className="form-group">
        <legend><strong>Características</strong></legend>
        <PeriodoLuzSection data={data} onChange={onChange} />
        <ClimaSection data={data} onChange={onChange} />
        <VisibilidadeSection data={data} onChange={onChange} />
        <TemperaturaSection data={data} onChange={onChange} />
      </fieldset>
    </section>
  );
};

export default ClimaForm;