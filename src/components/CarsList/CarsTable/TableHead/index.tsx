import { FC } from 'react';
import { tableTitles } from '../data.ts';

const TableHead: FC = () => {
  return (
    <thead>
      <tr>
        {tableTitles.map(item => (
          <th key={item.id} className={item.styles}>
            {item.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
