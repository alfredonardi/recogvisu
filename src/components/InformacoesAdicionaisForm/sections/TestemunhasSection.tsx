import React from 'react';
import { FormSectionProps } from '../../../types';
import { useDynamicList } from '../../../hooks/useDynamicList';

const TestemunhasSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const { items, addItem, removeItem } = useDynamicList(data.testemunhas || []);

  const handleChange = (index: number, field: string, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    onChange('testemunhas', newItems);
  };

  return (
    <fieldset className="form-group">
      <legend><strong>Identificação de Testemunhas</strong></legend>
      <div id="containerTestemunhas">
        {items.map((item, index) => (
          <div key={index} className="dynamic-item">
            <input
              type="text"
              className="medium-input"
              placeholder="Nome da testemunha"
              value={item.nome || ''}
              onChange={(e) => handleChange(index, 'nome', e.target.value)}
            />
            <input
              type="text"
              className="medium-input"
              placeholder="Contato"
              value={item.contato || ''}
              onChange={(e) => handleChange(index, 'contato', e.target.value)}
            />
            <textarea
              className="large-input"
              placeholder="Observações"
              value={item.observacoes || ''}
              onChange={(e) => handleChange(index, 'observacoes', e.target.value)}
            />
            <button type="button" onClick={() => removeItem(index)}>Remover</button>
          </div>
        ))}
        <button type="button" onClick={() => addItem({})}>Adicionar Testemunha</button>
      </div>
    </fieldset>
  );
};

export default TestemunhasSection;