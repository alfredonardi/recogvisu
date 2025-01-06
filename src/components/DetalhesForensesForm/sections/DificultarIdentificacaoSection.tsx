import React from 'react';
import { FormSectionProps } from '../../../types';
import CheckboxWithSpecification from '../../shared/CheckboxWithSpecification';

const DificultarIdentificacaoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    const acoes = new Set(data.acoesIdentificacao || []);
    if (checked) {
      acoes.add(field);
    } else {
      acoes.delete(field);
    }
    onChange('acoesIdentificacao', Array.from(acoes));
  };

  return (
    <fieldset className="form-group">
      <legend><strong>Evidências de ação para dificultar a identificação da vítima</strong></legend>
      <div>
        {[
          'Desfiguração',
          'Amputação de Dedos',
          'Remoção de Dentes',
          'Queimaduras',
          'Ácido',
          'Corte de Cabelo',
          'Remoção de Roupas'
        ].map(acao => (
          <CheckboxWithSpecification
            key={acao}
            id={`acao-${acao}`}
            label={acao}
            checked={(data.acoesIdentificacao || []).includes(acao)}
            onChange={handleCheckboxChange(acao)}
          />
        ))}
        <CheckboxWithSpecification
          id="outrosAcaoIdentificacao"
          label="Outros"
          checked={(data.acoesIdentificacao || []).includes('outros')}
          onChange={handleCheckboxChange('outros')}
          specification={data.descricaoOutrosAcaoIdentificacao}
          onSpecificationChange={(value) => onChange('descricaoOutrosAcaoIdentificacao', value)}
          showSpecification={(data.acoesIdentificacao || []).includes('outros')}
        />
      </div>
    </fieldset>
  );
};

export default DificultarIdentificacaoSection;