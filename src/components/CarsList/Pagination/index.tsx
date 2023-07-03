import { FC } from 'react';
import SwitchButton from './SwitchButton/index.tsx';
import PageNumbers from './PageNumbers/index.tsx';
import { paginationSlice } from '../../../store/reducers/paginationSlice.ts';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';

interface PaginationProps {
  totalItems: number;
}

const Pagination: FC<PaginationProps> = ({ totalItems }) => {
  const { currentPage, itemsPerPage } = useAppSelector(
    state => state.pagination
  );
  const { setCurrentPage } = paginationSlice.actions;
  const dispatch = useAppDispatch();

  const pageNumbers = [];

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  let startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(startPage + 4, totalPages);

  if (endPage - startPage < 4) startPage = Math.max(1, endPage - 4);

  for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

  const paginate = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <ul className="flex gap-3 items-center justify-center mt-2">
      {currentPage > 1 && (
        <SwitchButton onClick={() => paginate(currentPage - 1)}>
          &lt;
        </SwitchButton>
      )}
      <PageNumbers
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        paginate={paginate}
      />
      {currentPage < totalPages && (
        <SwitchButton onClick={() => paginate(currentPage + 1)}>
          &gt;
        </SwitchButton>
      )}
    </ul>
  );
};

export default Pagination;
