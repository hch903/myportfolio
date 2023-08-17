import React, { useState } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Experience from "../components/experience";
import {
  container,
  sectionHeading,
} from '../styles/experience.module.css';
import { graphql } from "gatsby";

const ExperiencePage = ({ data }) => {
  const [paddingTop, setPaddingTop] = useState(0);

  const handlePaddingChange = (padding) => {
      setPaddingTop(padding);
  }

  let paddingStyle = {
    paddingTop: `${paddingTop}px`
  };
  
  return (
    <>
      <Layout>
        <Navbar onPaddingChange={handlePaddingChange}></Navbar>
        <div className={container} style={paddingStyle}>
          <div className="row">
            <div className="col-lg-12 text-center mb-3">
              <span className={`${sectionHeading}`}>Experience</span>
            </div>
          </div>
          <VerticalTimeline>
            {data.allMdx.nodes.map((node, index) => 
              <Experience key={`experience-${index}`} data={node}></Experience>
            )}
          </VerticalTimeline>
        </div>
      </Layout>
    </>
  )
}

export default ExperiencePage

export const Head = () => <title>HaoChen Hsieh</title>

export const query = graphql`
  query {
    allMdx( 
      filter: { frontmatter: { slug: { eq: "experience" } } }
      sort: { frontmatter: { index: ASC } }
    ) {
      nodes {
        frontmatter {
          index
          employer
          location
          time
          title
          icon {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 100, height: 100)
            }
          }
          iconbg
          tech_stack {
            name
            image_src {
              relativePath
              childImageSharp {
                gatsbyImageData(width: 50, height: 50)
              }
            }
          }
          exp_description
        }
        id
      }
    }
  }
`