import * as React from 'react';
import { container } from './landing-page-layout.module.css';

export default function Layout({ children }) {
  return <div className={container}>{ children }</div>;
}