import React from 'react';
import { FormSectionProps } from '../../types';
import CheckboxWithSpecification from '../shared/CheckboxWithSpecification';

const VestigiosSangueSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    onChange(field, checked);
  };

  return (
    <fieldset className="form-group">
      <label htmlFor="vestigiosSangue"><strong>Vestígios de sangue:</strong></label>
      <select
        id="vestigiosSangue"
        className="normal-input"
        value={data.vestigiosSangue || ''}
        onChange={(e) => onChange('vestigiosSangue', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>

      {data.vestigiosSangue === 'Sim' && (
        <>
          <div>
            <label htmlFor="quantidade"><strong>Quantidade de Sangue:</strong></label>
            <select
              id="quantidade"
              className="normal-input"
              value={data.quantidadeSangue || ''}
              onChange={(e) => onChange('quantidadeSangue', e.target.value)}
            >
              <option value="">Selecione a quantidade...</option>
              <option value="Escassa">Escassa</option>
              <option value="Moderada">Moderada</option>
              <option value="Abundante">Abundante</option>
            </select>
          </div>

          <div>
            <label><strong>Localização dos vestígios:</strong></label>
            <div>
              <CheckboxWithSpecification
                id="parede"
                label="Parede"
                checked={data.parede || false}
                onChange={handleCheckboxChange('parede')}
              />
              <CheckboxWithSpecification
                id="chao"
                label="Chão"
                checked={data.chao || false}
                onChange={handleCheckboxChange('chao')}
              />
              <CheckboxWithSpecification
                id="mobilia2"
                label="Mobília"
                checked={data.mobilia2 || false}
                onChange={handleCheckboxChange('mobilia2')}
              />
              <CheckboxWithSpecification
                id="teto2"
                label="Teto"
                checked={data.teto2 || false}
                onChange={handleCheckboxChange('teto2')}
              />
              <CheckboxWithSpecification
                id="outrosLocaisSangue"
                label="Outros"
                checked={data.outrosLocaisSangue || false}
                onChange={handleCheckboxChange('outrosLocaisSangue')}
                specification={data.especificacaoVestigiosSangue}
                onSpecificationChange={(value) => onChange('especificacaoVestigiosSangue', value)}
                showSpecification={data.outrosLocaisSangue}
              />
            </div>
          </div>
        </>
      )}
    </fieldset>
  );
};

export default VestigiosSangueSection;