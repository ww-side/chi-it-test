import { FC, useEffect } from 'react';
import axios from 'axios';
import CarsTable from './CarsTable/index.tsx';
import Pagination from './Pagination/index.tsx';
import Search from './Search/index.tsx';
import AddForm from './AddForm/index.tsx';
import Header from '../UI/Header/index.tsx';
import Footer from '../UI/Footer/index.tsx';
import { Car } from '../../interfaces/car.ts';
import { carsSlice } from '../../store/reducers/carsSlice.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts';

const CarsList: FC = () => {
  const {
    cars,
    loading,
    selectedAvailability,
    searchCar,
    searchCarVin,
    searchCarColor,
    searchPrice,
    searchCarModelYear,
    searchCarModel,
  } = useAppSelector(state => state.cars);
  const { currentPage, itemsPerPage } = useAppSelector(
    state => state.pagination
  );
  const { setCars, setLoading } = carsSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedCars = localStorage.getItem('cars');
        if (storedCars) {
          dispatch(setCars(JSON.parse(storedCars)));
          dispatch(setLoading(false));
        } else {
          const response = await axios.get('https://myfakeapi.com/api/cars/');
          const data: Record<string, Car[]> = response.data;
          const arrays = Object.values(data);

          const fetchedCars = arrays.flat();
          localStorage.setItem('cars', JSON.stringify(fetchedCars));

          dispatch(setCars(fetchedCars));
          dispatch(setLoading(false));
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  let filteredCars = cars;

  const filters = [
    { key: 'car', value: searchCar },
    { key: 'car_model', value: searchCarModel },
    { key: 'car_color', value: searchCarColor },
    { key: 'car_model_year', value: searchCarModelYear },
    { key: 'car_vin', value: searchCarVin },
    { key: 'price', value: searchPrice },
  ];

  filteredCars = filteredCars.filter(car => {
    return filters.every(filter => {
      const { key, value } = filter;
      if (value) {
        const normalizedValue = value.trim().toLowerCase();
        return String(car[key as keyof Car])
          .toLowerCase()
          .includes(normalizedValue);
      }
      return true;
    });
  });

  if (selectedAvailability === 'true') {
    filteredCars = filteredCars.filter(car => car.availability);
  } else if (selectedAvailability === 'false') {
    filteredCars = filteredCars.filter(car => !car.availability);
  }

  const currentItems = filteredCars.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-8 mx-16">
        <span className="flex gap-2 mb-3">
          <Search />
          <AddForm />
        </span>
        {loading ? (
          'Loading'
        ) : (
          <>
            <CarsTable cars={currentItems} />
            <Pagination totalItems={filteredCars.length} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CarsList;
