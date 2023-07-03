import { FC, useState } from 'react';
import { Car } from '../../../interfaces/car.ts';
import { useAppDispatch } from '../../../hooks/redux.ts';
import { carsSlice } from '../../../store/reducers/carsSlice.ts';
import TableHead from './TableHead/index.tsx';
import TableBody from './TableBody/index.tsx';

interface CarsTableProps {
  cars: Car[];
}

const CarsTable: FC<CarsTableProps> = ({ cars }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');
  const [carIdToDelete, setCarIdToDelete] = useState(0);
  const [_, setSelectedCar] = useState<Car | null>(null);
  const { deleteCar } = carsSlice.actions;
  const dispatch = useAppDispatch();

  const handleActionSelect = (action: string, carId: number) => {
    setSelectedAction(action);
    setIsModalOpen(true);
    setCarIdToDelete(carId);

    const car = cars.find(car => car.id === carId);
    setSelectedCar(car || null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAction('');
  };

  const handleDeleteCar = (carId: number) => {
    dispatch(deleteCar(carId));
  };

  return (
    <table className="table-auto w-full">
      <TableHead />
      <TableBody
        cars={cars}
        isModalOpen={isModalOpen}
        selectedAction={selectedAction}
        carIdToDelete={carIdToDelete}
        handleActionSelect={handleActionSelect}
        handleDeleteCar={handleDeleteCar}
        handleCloseModal={handleCloseModal}
      />
    </table>
  );
};

export default CarsTable;
