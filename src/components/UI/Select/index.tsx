import { FC } from 'react';
import { nanoid as id } from 'nanoid';

interface Option {
  value: string;
  name: string;
}

interface SelectProps {
  value: string;
  defaultValue?: string;
  options: Option[];
  onChange?: (sort: string) => void;
}

const Select: FC<SelectProps> = ({
  value,
  defaultValue,
  options,
  onChange,
}) => {
  return (
    <select
      id={id()}
      className="rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2"
      value={value}
      onChange={e => onChange?.(e.target.value)}
    >
      {defaultValue && (
        <option className="text-gray-800" value="basic">
          {defaultValue}
        </option>
      )}
      {options.map(option => (
        <option
          className="text-gray-800"
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
