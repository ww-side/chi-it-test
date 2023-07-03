import { nanoid as id } from 'nanoid';

const basicStylesTitle = 'px-1 text-lg font-normal text-white bg-sky-600';

export const tableTitles = [
  {
    id: id(),
    title: 'ID',
    styles: `${basicStylesTitle} rounded-tl-lg`,
  },
  {
    id: id(),
    title: 'Car',
    styles: `${basicStylesTitle}`,
  },
  {
    id: id(),
    title: 'Car Model',
    styles: `${basicStylesTitle}`,
  },
  {
    id: id(),
    title: 'Car Color',
    styles: `${basicStylesTitle}`,
  },
  {
    id: id(),
    title: 'Car Model Year',
    styles: `${basicStylesTitle}`,
  },
  {
    id: id(),
    title: 'Car VIN',
    styles: `${basicStylesTitle}`,
  },
  {
    id: id(),
    title: 'Price',
    styles: `${basicStylesTitle}`,
  },
  {
    id: id(),
    title: 'Availability',
    styles: `${basicStylesTitle}`,
  },
  {
    id: id(),
    title: 'Actions',
    styles: `${basicStylesTitle} rounded-tr-lg`,
  },
];
