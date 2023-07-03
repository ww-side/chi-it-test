import { FC, useState } from 'react';
import ModalAdd from './ModalAdd/index.tsx';
import Button from '../../UI/Button/index.tsx';

const AddForm: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button color="basic" onClickHandler={() => setIsModalOpen(!isModalOpen)}>
        Add car
      </Button>
      <ModalAdd isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default AddForm;
