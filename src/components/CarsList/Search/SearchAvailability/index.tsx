import { FC } from 'react';
import Select from '../../../UI/Select/index.tsx';
import { carsSlice } from '../../../../store/reducers/carsSlice.ts';
import { paginationSlice } from '../../../../store/reducers/paginationSlice.ts';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.ts';

const SearchAvailability: FC = () => {
  const { selectedAvailability } = useAppSelector(state => state.cars);
  const { setCurrentPage } = paginationSlice.actions;
  const { setSelectedAvailability } = carsSlice.actions;
  const dispatch = useAppDispatch();

  const handleSelectedAvailabilityChange = (value: string) => {
    dispatch(setSelectedAvailability(value));
    dispatch(setCurrentPage(1));
  };

  return (
    <>
      <Select
        value={selectedAvailability}
        defaultValue="All cars"
        options={[
          { value: 'true', name: 'True' },
          { value: 'false', name: 'False' },
        ]}
        onChange={handleSelectedAvailabilityChange}
      />
    </>
  );
};

export default SearchAvailability;
