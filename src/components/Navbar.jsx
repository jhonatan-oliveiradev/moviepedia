import React from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <h2>
          <Link to="/">
            <BiCameraMovie />
            Moviepedia
          </Link>
        </h2>
        <form action="">
          <input type="text" placeholder="Pesquise um filme" />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
