import React from 'react';
import { FormSectionProps } from '../../../types';
import { useDynamicList } from '../../../hooks/useDynamicList';

const VestimentasSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const { items, addItem, removeItem } = useDynamicList(data.vestimentas || []);

  const handleChange = (index: number, field: string, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    onChange('vestimentas', newItems);
  };

  return (
    <fieldset>
      <div id="vestimentasContainer">
        {items.map((item, index) => (
          <div key={index} className="dynamic-item">
            <textarea
              className="medium-input"
              placeholder="Tipo de Vestimenta"
              value={item.tipo || ''}
              onChange={(e) => handleChange(index, 'tipo', e.target.value)}
              rows={2}
            />
            <textarea
              className="medium-input"
              placeholder="Descrição"
              value={item.descricao || ''}
              onChange={(e) => handleChange(index, 'descricao', e.target.value)}
              rows={2}
            />
            <button type="button" onClick={() => removeItem(index)} className="remove-button">
              Remover
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addItem({})} className="add-button">
          Adicionar Vestimenta
        </button>
      </div>
    </fieldset>
  );
};

export default VestimentasSection;