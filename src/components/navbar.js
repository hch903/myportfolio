import * as React from 'react';
import { Link } from 'gatsby';
import {
  container
} from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={container}>
      <ul>
        <li>
          <Link to="/">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/experience">
            <span>Experience</span>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <span>Projects</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}