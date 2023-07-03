import { links } from './data.tsx';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-sky-900 h-14 text-white text-2xl p-1 px-5">
      <span>AppCar</span>
      <span className="flex gap-3">
        {links.map(item => (
          <a
            key={item.id}
            className="hover:opacity-50 transition duration-200"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </span>
    </footer>
  );
};

export default Footer;
