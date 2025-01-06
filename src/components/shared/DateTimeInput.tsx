import React from 'react';

interface DateTimeInputProps {
  label: string;
  dateId: string;
  timeId: string;
  dateValue: string;
  timeValue: string;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
  required?: boolean;
}

const DateTimeInput: React.FC<DateTimeInputProps> = ({
  label,
  dateId,
  timeId,
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
  required = false,
}) => {
  return (
    <div className="input-group">
      <label className="block mb-2"><strong>{label}</strong></label>
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="date"
            id={dateId}
            className="w-full p-2 border rounded-md"
            value={dateValue}
            onChange={(e) => onDateChange(e.target.value)}
            required={required}
            max="9999-12-31"
          />
        </div>
        <div className="flex-1">
          <input
            type="time"
            id={timeId}
            className="w-full p-2 border rounded-md"
            value={timeValue}
            onChange={(e) => onTimeChange(e.target.value)}
            required={required}
          />
        </div>
      </div>
    </div>
  );
};

export default DateTimeInput;