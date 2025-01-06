import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectWithSpecificationProps {
  label: string;
  id: string;
  value: string;
  specificationValue: string;
  onChange: (value: string) => void;
  onSpecificationChange: (value: string) => void;
  options: SelectOption[];
}

const SelectWithSpecification: React.FC<SelectWithSpecificationProps> = ({
  label,
  id,
  value,
  specificationValue,
  onChange,
  onSpecificationChange,
  options,
}) => {
  return (
    <div>
      <label htmlFor={id}><strong>{label}</strong></label>
      <select
        id={id}
        className="select-com-especificacao"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Selecione...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {value === 'outros' && (
        <input
          type="text"
          className="campo-especificacao"
          placeholder="Especifique"
          value={specificationValue}
          onChange={(e) => onSpecificationChange(e.target.value)}
        />
      )}
    </div>
  );
};

export default SelectWithSpecification;