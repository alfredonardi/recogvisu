import React from 'react';

interface CheckboxWithSpecificationProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  specification?: string;
  onSpecificationChange?: (value: string) => void;
  showSpecification?: boolean;
}

const CheckboxWithSpecification: React.FC<CheckboxWithSpecificationProps> = ({
  id,
  label,
  checked,
  onChange,
  specification,
  onSpecificationChange,
  showSpecification,
}) => {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
      
      {showSpecification && onSpecificationChange && (
        <input
          type="text"
          className="normal-input"
          placeholder="Especifique"
          value={specification || ''}
          onChange={(e) => onSpecificationChange(e.target.value)}
        />
      )}
    </div>
  );
};

export default CheckboxWithSpecification;