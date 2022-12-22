import * as React from 'react';
import { Link } from 'gatsby';
import { 
  container,
  revealNavbar,
  nav,
  navItem
} from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={container}>
      <div className={revealNavbar}>
        <ul className={nav}>
          <li className={navItem}>
            <Link to="/about">
              <span>About</span>
            </Link>
          </li>
          <li className={navItem}>
            <Link to="/experience">
              <span>Experience</span>
            </Link>
          </li>
          <li className={navItem}>
            <Link to="/side-project">
              <span>Side Project</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
