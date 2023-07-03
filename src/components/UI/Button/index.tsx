import { FC, ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  onClickHandler?: (event: MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
  color: string;
  type?: string;
}

enum Colors {
  basic = 'w-1/12 cursor-pointer bg-sky-600 hover:bg-sky-400 text-white',
  green = 'w-4/12 max-md:w-5/12 max-sm:w-8/12 cursor-pointer bg-green-500 hover:bg-green-600',
  red = 'w-4/12 max-md:w-5/12 max-sm:w-8/12 cursor-pointer bg-red-600 hover:bg-red-700',
}

const GREEN_COLOR = 'green';
const RED_COLOR = 'red';

const Button: FC<ButtonProps> = ({ children, onClickHandler, color }) => {
  const getColor = (color: string) => {
    switch (color) {
      case GREEN_COLOR:
        return Colors.green;
      case RED_COLOR:
        return Colors.red;
      default:
        return Colors.basic;
    }
  };

  return (
    <div
      className={`text-center font-bold p-2 rounded-xl ${getColor(color)}`}
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
};

export default Button;
