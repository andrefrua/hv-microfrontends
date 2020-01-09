import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ol>
        <li>
          <NavLink to="/people">People</NavLink>
        </li>
        <li>
          <NavLink to="/starships">Starships</NavLink>
        </li>
        <li>
          <NavLink to="/page">Page</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default Header;
