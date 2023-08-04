import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import {
  container,
  nav,
  navItem,
  navText
} from './navbar.module.css';

export default function Navbar({ onPaddingChange }) {
  const navbar = useRef(null);
  const [topOfNav, updateTopOfNav] = useState(0);
  const [offsetHeight, updateOffsetHeight] = useState(0);

  const fixNav = () => {
    if (navbar.current) {
      if (window.scrollY > topOfNav) {
        onPaddingChange(offsetHeight);
        navbar.current.classList.add('fixed-nav');
      } else {
        onPaddingChange(0);
        navbar.current.classList.remove('fixed-nav');
      }
    }
  };

  useEffect(() => {
    updateTopOfNav(navbar.current.offsetTop);
    updateOffsetHeight(navbar.current.offsetHeight);

    document.addEventListener('scroll', fixNav);
  });

  return (
    <div className={container} ref={navbar}>
      <nav>
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
      </nav>
    </div>
  );
}