import * as React from 'react';
import { Link } from 'gatsby';
import {
  container,
  nav,
  navItem,
  navText
} from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={container}>
      <ul className={nav}>
        <li className={navItem}>
          <Link to="/" className={navText}>
            <span>About</span>
          </Link>
        </li>
        <li className={navItem}>
          <Link to="/experience" className={navText}>
            <span>Experience</span>
          </Link>
        </li>
        <li className={navItem}>
          <Link to="/projects" className={navText}>
            <span>Projects</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}