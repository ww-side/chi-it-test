import { nanoid as id } from 'nanoid';
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram } from 'react-icons/bs';

export const links = [
  {
    id: id(),
    href: 'https://www.instagram.com/ww_side/',
    icon: <BsInstagram size={30} color="white" />,
  },
  {
    id: id(),
    href: 'https://t.me/side_culture',
    icon: <BsTelegram size={30} color="white" />,
  },
  {
    id: id(),
    href: 'https://github.com/ww-side',
    icon: <BsGithub size={30} color="white" />,
  },
  {
    id: id(),
    href: 'https://www.linkedin.com/in/daniil-metelia-371218274/',
    icon: <BsLinkedin size={30} color="white" />,
  },
];
