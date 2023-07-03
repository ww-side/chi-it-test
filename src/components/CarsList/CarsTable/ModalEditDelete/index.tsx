import { FC } from 'react';
import CustomModal from '../../../UI/CustomModal/index.tsx';
import EditWindow from './EditWindow/index.tsx';
import DeleteWindow from './DeleteWindow/index.tsx';
import { useAppSelector } from '../../../../hooks/redux.ts';

interface ModalEditDeleteProps {
  isModalOpen: boolean;
  selectedAction: string;
  carIdToDelete: number;
  handleDeleteCar: (carId: number) => void;
  handleCloseModal: () => void;
}

const ModalEditDelete: FC<ModalEditDeleteProps> = ({
  handleDeleteCar,
  carIdToDelete,
  selectedAction,
  handleCloseModal,
  isModalOpen,
}) => {
  const cars = useAppSelector(state => state.cars.cars);
  const selectedCar = cars.find(car => car.id === carIdToDelete);

  return (
    <CustomModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
      {selectedAction === 'edit' && selectedCar && (
        <EditWindow
          selectedCar={selectedCar}
          handleCloseModal={handleCloseModal}
        />
      )}
      {selectedAction === 'delete' && (
        <DeleteWindow
          carIdToDelete={carIdToDelete}
          handleDeleteCar={handleDeleteCar}
          handleCloseModal={handleCloseModal}
        />
      )}
    </CustomModal>
  );
};

export default ModalEditDelete;
