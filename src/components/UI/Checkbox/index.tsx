import React, { FC } from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <input
      name="checkbox"
      className="form-checkbox text-indigo-600 h-5 w-5"
      type="checkbox"
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default Checkbox;
