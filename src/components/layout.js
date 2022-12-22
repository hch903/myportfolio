import * as React from 'react';
import { container } from './layout.module.css';

export default function Layout({ children }) {
  return <div className={container}>{ children }</div>;
}