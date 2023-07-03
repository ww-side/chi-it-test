import { FC, ReactNode } from 'react';

interface ButtonSubmitProps {
  children: ReactNode;
}

const ButtonSubmit: FC<ButtonSubmitProps> = ({ children }) => {
  return (
    <button
      className="bg-sky-600 hover:bg-sky-400 text-white font-semibold rounded-xl p-2"
      type="submit"
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
