import { FC } from 'react';
import TableRow from './TableRow/index.tsx';
import { Car } from '../../../../interfaces/car.ts';

interface TableBodyProps {
  cars: Car[];
  isModalOpen: boolean;
  selectedAction: string;
  carIdToDelete: number;
  handleActionSelect: (action: string, carId: number) => void;
  handleDeleteCar: (carId: number) => void;
  handleCloseModal: () => void;
}

const TableBody: FC<TableBodyProps> = ({
  cars,
  isModalOpen,
  selectedAction,
  carIdToDelete,
  handleActionSelect,
  handleDeleteCar,
  handleCloseModal,
}) => {
  return (
    <tbody>
      {cars.map((car: Car, index: number) => (
        <TableRow
          key={car.id}
          car={car}
          index={index}
          isModalOpen={isModalOpen}
          selectedAction={selectedAction}
          carIdToDelete={carIdToDelete}
          handleActionSelect={handleActionSelect}
          handleDeleteCar={handleDeleteCar}
          handleCloseModal={handleCloseModal}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
