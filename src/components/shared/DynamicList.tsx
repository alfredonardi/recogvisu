import React, { useCallback } from 'react';
import { useDynamicList } from '../../hooks/useDynamicList';

interface DynamicListProps {
  items: any[];
  onChange: (items: any[]) => void;
  addButtonText: string;
  fields: {
    name: string;
    placeholder: string;
    type?: 'text' | 'textarea';
  }[];
}

const DynamicList: React.FC<DynamicListProps> = ({
  items: initialItems,
  onChange,
  addButtonText,
  fields
}) => {
  const { items, addItem, removeItem, updateItem } = useDynamicList(initialItems);

  const handleUpdate = useCallback((index: number, field: string, value: string) => {
    updateItem(index, field, value);
    const updatedItems = items.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    onChange(updatedItems);
  }, [items, onChange, updateItem]);

  const handleAdd = useCallback(() => {
    addItem({});
    onChange([...items, {}]);
  }, [items, addItem, onChange]);

  const handleRemove = useCallback((index: number) => {
    removeItem(index);
    onChange(items.filter((_, i) => i !== index));
  }, [items, removeItem, onChange]);

  return (
    <div className="dynamic-list">
      {items.map((item, index) => (
        <div key={index} className="dynamic-item">
          {fields.map(field => (
            field.type === 'textarea' ? (
              <textarea
                key={field.name}
                className="medium-input"
                placeholder={field.placeholder}
                value={item[field.name] || ''}
                onChange={(e) => handleUpdate(index, field.name, e.target.value)}
                rows={2}
              />
            ) : (
              <input
                key={field.name}
                type="text"
                className="medium-input"
                placeholder={field.placeholder}
                value={item[field.name] || ''}
                onChange={(e) => handleUpdate(index, field.name, e.target.value)}
              />
            )
          ))}
          <button 
            type="button" 
            onClick={() => handleRemove(index)}
            className="remove-button"
          >
            Remover
          </button>
        </div>
      ))}
      <button 
        type="button" 
        onClick={handleAdd}
        className="add-button"
      >
        {addButtonText}
      </button>
    </div>
  );
};

export default DynamicList;