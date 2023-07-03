import { FC, useState } from 'react';
import Select from '../../../UI/Select/index.tsx';
import Input from '../../../UI/Input/index.tsx';
import { carsSlice } from '../../../../store/reducers/carsSlice.ts';
import { paginationSlice } from '../../../../store/reducers/paginationSlice.ts';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.ts';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SearchField: FC = () => {
  const {
    searchCar,
    searchCarVin,
    searchCarColor,
    searchPrice,
    searchCarModelYear,
    searchCarModel,
  } = useAppSelector(state => state.cars);
  const {
    setSearchCar,
    setSearchCarModel,
    setSearchCarColor,
    setSearchCarModelYear,
    setSearchCarVin,
    setSearchPrice,
  } = carsSlice.actions;
  const { setCurrentPage } = paginationSlice.actions;
  const dispatch = useAppDispatch();
  const [selectedOption, setSelectedOption] = useState('searchCar');

  const handleSearchCarChange = (value: string) => {
    dispatch(setSearchCar(value));
    dispatch(setCurrentPage(1));
  };

  const handleSearchCarModelChange = (value: string) => {
    dispatch(setSearchCarModel(value));
    dispatch(setCurrentPage(1));
  };

  const handleSearchCarColorChange = (value: string) => {
    dispatch(setSearchCarColor(value));
    dispatch(setCurrentPage(1));
  };

  const handleSearchCarModelYearChange = (value: string) => {
    dispatch(setSearchCarModelYear(value));
    dispatch(setCurrentPage(1));
  };

  const handleSearchCarVinChange = (value: string) => {
    dispatch(setSearchCarVin(value));
    dispatch(setCurrentPage(1));
  };

  const handleSearchPriceChange = (value: string) => {
    dispatch(setSearchPrice(value));
    dispatch(setCurrentPage(1));
  };

  const inputPropsMap: Record<string, InputProps> = {
    searchCar: {
      value: searchCar,
      onChange: handleSearchCarChange,
      placeholder: 'Search by car',
    },
    searchCarModel: {
      value: searchCarModel,
      onChange: handleSearchCarModelChange,
      placeholder: 'Search by car model',
    },
    searchCarColor: {
      value: searchCarColor,
      onChange: handleSearchCarColorChange,
      placeholder: 'Search by car color',
    },
    searchCarModelYear: {
      value: searchCarModelYear,
      onChange: handleSearchCarModelYearChange,
      placeholder: 'Search by car model year',
    },
    searchCarVin: {
      value: searchCarVin,
      onChange: handleSearchCarVinChange,
      placeholder: 'Search by car VIN',
    },
    searchPrice: {
      value: searchPrice,
      onChange: handleSearchPriceChange,
      placeholder: 'Search by price',
    },
  };

  let inputComponent = null;
  if (selectedOption in inputPropsMap) {
    const { value, onChange, placeholder } = inputPropsMap[selectedOption];
    inputComponent = (
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }

  return (
    <>
      {inputComponent}
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        options={[
          { value: 'searchCar', name: 'Search by car' },
          { value: 'searchCarModel', name: 'Search by car model' },
          { value: 'searchCarColor', name: 'Search by car color' },
          { value: 'searchCarModelYear', name: 'Search by car model year' },
          { value: 'searchCarVin', name: 'Search by car vin' },
          { value: 'searchPrice', name: 'Search by car price' },
        ]}
      />
    </>
  );
};

export default SearchField;
