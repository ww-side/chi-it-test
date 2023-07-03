import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car } from '../../interfaces/car.ts';

interface CarsState {
  cars: Car[];
  loading: boolean;
  searchCar: string;
  searchCarModel: string;
  searchCarColor: string;
  searchCarModelYear: string;
  searchCarVin: string;
  searchPrice: string;
  selectedAvailability: string;
}

const initialState: CarsState = {
  cars: [],
  loading: true,
  searchCar: '',
  searchCarModel: '',
  searchCarColor: '',
  searchCarModelYear: '',
  searchCarVin: '',
  searchPrice: '',
  selectedAvailability: '',
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCars: (state, action: PayloadAction<Car[]>) => {
      state.cars = action.payload;
      localStorage.setItem('cars', JSON.stringify(action.payload));
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSearchCar: (state, action: PayloadAction<string>) => {
      state.searchCar = action.payload;
    },
    setSearchCarModel: (state, action: PayloadAction<string>) => {
      state.searchCarModel = action.payload;
    },
    setSearchCarColor: (state, action: PayloadAction<string>) => {
      state.searchCarColor = action.payload;
    },
    setSearchCarModelYear: (state, action: PayloadAction<string>) => {
      state.searchCarModelYear = action.payload;
    },
    setSearchCarVin: (state, action: PayloadAction<string>) => {
      state.searchCarVin = action.payload;
    },
    setSearchPrice: (state, action: PayloadAction<string>) => {
      state.searchPrice = action.payload;
    },
    setSelectedAvailability: (state, action: PayloadAction<string>) => {
      state.selectedAvailability = action.payload;
    },
    deleteCar: (state, action: PayloadAction<number>) => {
      state.cars = state.cars.filter(car => car.id !== action.payload);
      localStorage.setItem('cars', JSON.stringify(state.cars));
    },
    addCar: (state, action: PayloadAction<Car>) => {
      state.cars.push(action.payload);
      localStorage.setItem('cars', JSON.stringify(state.cars));
    },
  },
});

export default carsSlice.reducer;
