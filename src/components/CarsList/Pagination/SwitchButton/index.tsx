import React, { MouseEvent, FC } from 'react';

interface SwitchButtonProps {
  onClick: (event: MouseEvent<HTMLSpanElement>) => void;
  children: React.ReactNode;
}

const SwitchButton: FC<SwitchButtonProps> = ({ onClick, children }) => {
  return (
    <li>
      <span
        className="text-4xl text-sky-500 hover:text-sky-400 cursor-pointer select-none"
        onClick={onClick}
      >
        {children}
      </span>
    </li>
  );
};

export default SwitchButton;
