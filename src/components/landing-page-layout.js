import * as React from 'react';
import { container, wrapper } from './landing-page-layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={container}>
      <div className={wrapper}>
        { children }
      </div>
    </div>
  );
}