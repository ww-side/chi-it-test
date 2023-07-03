import { FC } from 'react';
import Button from '../../../../UI/Button/index.tsx';

interface DeleteWindowProps {
  carIdToDelete: number;
  handleDeleteCar: (carId: number) => void;
  handleCloseModal: () => void;
}

const DeleteWindow: FC<DeleteWindowProps> = ({
  handleCloseModal,
  handleDeleteCar,
  carIdToDelete,
}) => {
  const handleDelete = () => {
    handleDeleteCar(carIdToDelete);
    handleCloseModal();
  };

  return (
    <>
      <h2>Are you sure you want to delete?</h2>
      <span className="flex gap-3 justify-center mt-2">
        <Button color="red" onClickHandler={handleDelete}>
          Yes
        </Button>
        <Button color="green" onClickHandler={handleCloseModal}>
          No
        </Button>
      </span>
    </>
  );
};

export default DeleteWindow;
