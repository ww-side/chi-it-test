import { combineReducers, configureStore } from '@reduxjs/toolkit';
import carsSlice from './reducers/carsSlice.ts';
import paginationSlice from './reducers/paginationSlice.ts';

const rootReducer = combineReducers({
  cars: carsSlice,
  pagination: paginationSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
