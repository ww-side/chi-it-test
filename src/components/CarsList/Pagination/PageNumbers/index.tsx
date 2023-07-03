import { FC } from 'react';

interface PageNumbersProps {
  pageNumbers: number[];
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const PageNumbers: FC<PageNumbersProps> = ({
  pageNumbers,
  currentPage,
  paginate,
}) => {
  return (
    <>
      {pageNumbers.map(pageNumber => (
        <li key={pageNumber}>
          <span
            onClick={() => paginate(pageNumber)}
            className={`cursor-pointer rounded-md ${
              pageNumber === currentPage
                ? 'bg-sky-600 border-2 border-sky-600 text-white'
                : 'bg-white border-2 border-gray-300'
            } px-3 py-2`}
          >
            {pageNumber}
          </span>
        </li>
      ))}
    </>
  );
};

export default PageNumbers;
