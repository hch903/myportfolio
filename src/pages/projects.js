import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import {
  container,
  sectionHeading,
  projectContainer,
  titleContainer,
  textContainer,
  imageContainer,
  linkButton
} from '../styles/projects.module.css';

const ProjectsPage = () => {
  return (
    <>
      <Layout>
        <Navbar></Navbar>
        <div className={container}>
          <div className="row">
            <div className="col-lg-12 text-center mb-3">
              <span className={sectionHeading}>Projects</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className={projectContainer}>
                <div className="row">
                  <div className={`col-md-6 py-4 ${textContainer}`}>
                    <div className={titleContainer}>
                      <h1 className="h1">ESN</h1>
                    </div>
                    <div className="mb-3">
                      <Link 
                        to="https://www.youtube.com/watch?v=kTzSbIPMpWY&t=2s&ab_channel=AndrewPark"
                        className={linkButton}
                        >
                          Demo Link
                      </Link>
                    </div>
                    <div className="mb-3">
                      <span>
                        <b>Tech Stack: </b>
                        VanillaJS, Express.js, MongoDB, Webpack, Chart.js, Jest,
                        Heroku, CircleCI
                      </span>
                    </div>
                    <div>
                      <i>This is a course project which implements a social network for
                emergent situation.</i>
                    </div>
                  </div>
                  <div className={`col-md-6 py-4 ${imageContainer}`}>
                    <StaticImage
                      src="../images/ESN/ESN.png"
                      alt="ESN">
                    </StaticImage>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ProjectsPage

export const Head = () => <title>HaoChen Hsieh</title>