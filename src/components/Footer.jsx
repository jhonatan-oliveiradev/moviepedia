import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          Moviepedia
        </Link>
      </h2>
      <span>
        Foi feito com 💜 por{' '}
        <a target="_blank" href="https://www.jhonatanoliveira.com">
          Jhonatan Oliveira
        </a>
        .
      </span>
    </div>
  );
};

export default Footer;
