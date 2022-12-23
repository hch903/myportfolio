import React from "react";
import { Script } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import '../styles/global.css';
import {
  container,
  title,
  introduction,
  revealTitle,
  revealIntro,
  socialIcon,
  socialIcons
} from '../styles/index.module.css';

const IndexPage = () => {
  return (
    <>
      <Script
        src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
        crossorigin="anonymous"
      ></Script>
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

        <div className={socialIcons}>
          <a
            className={socialIcon}
            href="https://www.linkedin.com/in/hch903/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className={socialIcon} href="https://github.com/hch903">
            <i className="fab fa-github"></i>
          </a>
          <a className={socialIcon} href="https://twitter.com/hch903">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className={socialIcon}
            href="https://www.facebook.com/profile.php?id=100000240454920"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <title>HaoChen Hsieh</title>
      <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
    </>
  );
}