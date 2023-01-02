import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Experience from "../components/experience";
import {
  sectionHeading
} from '../styles/experience.module.css';

const ExperiencePage = () => {
  return (
    <>
      <Layout>
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className={sectionHeading}>Experience</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <Experience></Experience>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ExperiencePage

export const Head = () => {
  return (
    <>
      <title>HaoChen Hsieh</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
      <link rel="stylesheet" type="text/css" href="/commons.css" as="style"></link>
    </>
  )
}