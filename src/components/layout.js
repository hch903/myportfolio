import * as React from 'react';
import { containerCover, container } from './layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <div className={containerCover}></div>
      <div className={container}>{ children }</div>
    </>
  );
}