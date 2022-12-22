import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import '../styles/global.css';
import {
  container,
  title,
  introduction,
  revealTitle,
  revealIntro
} from '../styles/index.module.css';

const IndexPage = () => {
  return (
    <Layout>
      <Navbar></Navbar>
      <div className={container}>
        <div className={title}>
          <h1 className={revealTitle}>
            <span>Hey, I'm HaoChen Hsieh</span>
          </h1>
        </div>
        <div className={introduction}>
          <p className={revealIntro}>
            <span>I majored in Software Engineering and graduated from Carnegie Mellon University. </span>
          </p>
          <p className={revealIntro}>
            <span>I had multiple internship experiences at AWS, Dent&Co, and Cathay United Bank.</span>
          </p>
          <p className={revealIntro}>
            <span>I am familiar with backend development and full-stack development.</span>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>HaoChen Hsieh</title>
