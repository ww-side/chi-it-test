import React, { FC, useEffect } from 'react';
import Modal from 'react-modal';
import 'animate.css';

Modal.setAppElement('#root');

interface CustomModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
}

const CustomModal: FC<CustomModalProps> = ({
  isModalOpen,
  handleCloseModal,
  children,
}) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isModalOpen]);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        className="fixed top-35 inset-x-1/3 max-lg:inset-x-1/4 bg-white
        p-20 outline-none w-300 text-center shadow-sm rounded-2xl
        animate__animated animate__fadeInDown"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0"
      >
        <span
          className="cursor-pointer absolute top-4 right-5 text-2xl"
          onClick={handleCloseModal}
        >
          X
        </span>
        {children}
      </Modal>
    </>
  );
};

export default CustomModal;
