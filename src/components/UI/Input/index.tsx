import { FC, ChangeEvent } from 'react';
import { nanoid as id } from 'nanoid';

interface InputProps {
  value: string | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  type: string;
  disabled?: boolean;
  required?: boolean;
}

const NUMBER = 'number';
const TEXT = 'text';

enum InputTypes {
  text = TEXT,
  number = NUMBER,
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  disabled,
  required,
}) => {
  const getInputType = (type: string) => {
    switch (type) {
      case NUMBER:
        return InputTypes.number;
      case TEXT:
        return InputTypes.text;
      default:
        return InputTypes.text;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      id={id()}
      disabled={disabled}
      required={required}
      className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded-xl px-4 py-2"
      type={getInputType(type)}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
