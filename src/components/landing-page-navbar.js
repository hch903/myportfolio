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
    <div className={`${container} mb-3`}>
      <div className={revealNavbar}>
        <ul className={nav}>
          <Link to="/experience">
            <li className={navItem}>
              <span>Experience</span>
            </li> 
          </Link>
          <Link to="/projects">
            <li className={navItem}>
              <span>Projects</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
