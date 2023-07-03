import { FC } from 'react';
import SearchField from './SearchField/index.tsx';
import SearchAvailability from './SearchAvailability/index.tsx';

const Search: FC = () => {
  return (
    <span className="flex gap-2">
      <SearchField />
      <SearchAvailability />
    </span>
  );
};

export default Search;
