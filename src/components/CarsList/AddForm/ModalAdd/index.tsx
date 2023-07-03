import React, { FC, useState } from 'react';
import CustomModal from '../../../UI/CustomModal/index.tsx';
import Input from '../../../UI/Input/index.tsx';
import Checkbox from '../../../UI/Checkbox/index.tsx';
import ButtonSubmit from '../ButtonSubmit/index.tsx';
import { Car } from '../../../../interfaces/car.ts';
import { carsSlice } from '../../../../store/reducers/carsSlice.ts';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.ts';

interface ModalAddProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const ModalAdd: FC<ModalAddProps> = ({ isModalOpen, handleCloseModal }) => {
  const dispatch = useAppDispatch();
  const cars = useAppSelector(state => state.cars.cars);
  const { addCar } = carsSlice.actions;
  const [carData, setCarData] = useState<Car>({
    id: 0,
    car: '',
    car_model: '',
    car_color: '',
    car_model_year: '',
    car_vin: '',
    price: '',
    availability: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addCar(carData));
    setCarData({
      id: cars.length + 1,
      car: '',
      car_model: '',
      car_color: '',
      car_model_year: '',
      car_vin: '',
      price: '',
      availability: false,
    });

    handleCloseModal();
  };

  const handleChange = (name: string, value: string | boolean) => {
    setCarData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <CustomModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <Input
          value={carData.car}
          type="text"
          placeholder="Car"
          onChange={(value: string) => handleChange('car', value)}
          required={true}
        />
        <Input
          value={carData.car_model}
          type="text"
          placeholder="Car Model"
          onChange={(value: string) => handleChange('car_model', value)}
          required={true}
        />
        <Input
          value={carData.car_color}
          type="text"
          placeholder="Car Color"
          onChange={(value: string) => handleChange('car_color', value)}
          required={true}
        />
        <Input
          value={carData.car_model_year}
          type="number"
          placeholder="Car Model Year"
          onChange={(value: string) => handleChange('car_model_year', value)}
          required={true}
        />
        <Input
          value={carData.car_vin}
          type="text"
          placeholder="Car VIN"
          onChange={(value: string) => handleChange('car_vin', value)}
          required={true}
        />
        <Input
          type="number"
          placeholder="Price"
          value={carData.price}
          onChange={(value: string) => handleChange('price', value)}
          required={true}
        />
        <span
          className="flex gap-2 items-center text-gray-400 border
        border-gray-300 focus:outline-none focus:border-blue-500 rounded-xl
        px-4 py-2"
        >
          Availability:
          <Checkbox
            checked={carData.availability}
            onChange={checked =>
              setCarData(prevData => ({
                ...prevData,
                availability: checked,
              }))
            }
          />
        </span>
        <ButtonSubmit>Add car</ButtonSubmit>
      </form>
    </CustomModal>
  );
};

export default ModalAdd;
