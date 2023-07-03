import { FC, useEffect, useState } from 'react';
import Input from '../../../../UI/Input/index.tsx';
import Select from '../../../../UI/Select/index.tsx';
import Button from '../../../../UI/Button/index.tsx';
import { Car } from '../../../../../interfaces/car.ts';
import { carsSlice } from '../../../../../store/reducers/carsSlice.ts';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux.ts';

interface EditWindowProps {
  selectedCar: Car;
  handleCloseModal: () => void;
}

interface InputField {
  key: string;
  label: string;
  value: string | number;
  placeholder: string;
  type: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const EditWindow: FC<EditWindowProps> = ({ selectedCar, handleCloseModal }) => {
  const [editedColor, setEditedColor] = useState('');
  const [editedPrice, setEditedPrice] = useState('');
  const [editedAvailability, setEditedAvailability] = useState('');
  const cars = useAppSelector(state => state.cars.cars);
  const { setCars } = carsSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedCar) {
      setEditedColor(selectedCar.car_color);
      setEditedPrice(selectedCar.price.replace('$', ''));
      setEditedAvailability(selectedCar.availability.toString());
    }
  }, [selectedCar]);

  const saveCarChanges = (updatedCar: Car) => {
    const updatedCars = cars.map(car =>
      car.id === updatedCar.id ? updatedCar : car
    );

    dispatch(setCars(updatedCars));
  };

  const handleSaveChanges = () => {
    if (selectedCar && editedPrice && editedColor) {
      const updatedCar: Car = {
        ...selectedCar,
        car_color: editedColor,
        price: `$${editedPrice}`,
        availability: editedAvailability === 'true',
      };

      saveCarChanges(updatedCar);
    }

    handleCloseModal();
  };

  const inputFields: InputField[] = [
    {
      key: 'id',
      label: 'ID',
      value: selectedCar.id,
      placeholder: 'ID',
      type: 'number',
      disabled: true,
    },
    {
      key: 'car',
      label: 'Car',
      value: selectedCar.car,
      placeholder: 'Car',
      type: 'text',
      disabled: true,
    },
    {
      key: 'car_model',
      label: 'Car Model',
      value: selectedCar.car_model,
      placeholder: 'Car Model',
      type: 'text',
      disabled: true,
    },
    {
      key: 'car_color',
      label: 'Car Color',
      value: editedColor,
      placeholder: 'Car Color',
      type: 'text',
      onChange: setEditedColor,
    },
    {
      key: 'car_vin',
      label: 'Car VIN',
      value: selectedCar.car_vin,
      placeholder: 'Car VIN',
      type: 'text',
      disabled: true,
    },
    {
      key: 'price',
      label: 'Edit price',
      value: editedPrice,
      placeholder: 'Edit price',
      type: 'number',
      onChange: setEditedPrice,
    },
  ];

  return (
    <span className="flex flex-col gap-2">
      <h2 className="text-3xl font-semibold">Edit</h2>
      {inputFields.map(field => (
        <Input
          key={field.key}
          value={field.value}
          placeholder={field.placeholder}
          type={field.type}
          disabled={field.disabled}
          onChange={field.onChange}
        />
      ))}
      <Select
        value={editedAvailability}
        options={[
          { value: 'true', name: 'True' },
          { value: 'false', name: 'False' },
        ]}
        onChange={setEditedAvailability}
      />
      <Button color="green" onClickHandler={handleSaveChanges}>
        Save
      </Button>
    </span>
  );
};

export default EditWindow;
