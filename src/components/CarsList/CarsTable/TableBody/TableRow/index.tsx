import { FC } from 'react';
import Select from '../../../../UI/Select/index.tsx';
import ModalEditDelete from '../../ModalEditDelete/index.tsx';
import { Car } from '../../../../../interfaces/car.ts';

interface TableRowProps {
  car: Car;
  index: number;
  isModalOpen: boolean;
  selectedAction: string;
  carIdToDelete: number;
  handleActionSelect: (action: string, carId: number) => void;
  handleDeleteCar: (carId: number) => void;
  handleCloseModal: () => void;
}

const TableRow: FC<TableRowProps> = ({
  car,
  index,
  isModalOpen,
  selectedAction,
  carIdToDelete,
  handleActionSelect,
  handleDeleteCar,
  handleCloseModal,
}) => {
  const cellClassName = `px-1 ${
    index % 2 === 0 ? 'bg-zinc-100' : ''
  } text-center`;

  return (
    <tr key={car.id}>
      <td className={cellClassName}>{car.id}</td>
      <td className={cellClassName}>{car.car}</td>
      <td className={cellClassName}>{car.car_model}</td>
      <td className={cellClassName}>{car.car_color}</td>
      <td className={cellClassName}>{car.car_model_year}</td>
      <td className={cellClassName}>{car.car_vin}</td>
      <td className={cellClassName}>{car.price}</td>
      <td className={cellClassName}>{car.availability ? 'True' : 'False'}</td>
      <td className={cellClassName}>
        <Select
          defaultValue="Action"
          value={isModalOpen ? '' : selectedAction}
          options={[
            { value: 'edit', name: 'Edit' },
            { value: 'delete', name: 'Delete' },
          ]}
          onChange={action => handleActionSelect(action, car.id)}
        />
        <ModalEditDelete
          isModalOpen={isModalOpen}
          selectedAction={selectedAction}
          carIdToDelete={carIdToDelete}
          handleDeleteCar={handleDeleteCar}
          handleCloseModal={handleCloseModal}
        />
      </td>
    </tr>
  );
};

export default TableRow;
