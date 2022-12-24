import * as React from 'react';
import { Link } from 'gatsby';
import { 
  container,
  revealNavbar,
  nav,
  navItem
} from './landing-page-navbar.module.css';

export default function Navbar() {
  return (
    <div className={container}>
      <div className={revealNavbar}>
        <ul className={nav}>
          <li className={navItem}>
            <Link to="/">
              <span>About</span>
            </Link>
          </li>
          <li className={navItem}>
            <Link to="/experience">
              <span>Experience</span>
            </Link>
          </li>
          <li className={navItem}>
            <Link to="/projects">
              <span>Projects</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
