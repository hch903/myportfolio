import React, { useState } from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Project from "../components/project";
import {
  container,
  sectionHeading,
} from '../styles/projects.module.css';
import { graphql } from "gatsby";

const ProjectsPage = ({ data }) => {
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
              <span className={sectionHeading}>Projects</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              {data.allMdx.nodes.map(node => 
                <div className="mb-3">
                  <Project data={node}></Project>
                </div>
              )}
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

export const query = graphql `
  query {
    allMdx(filter: {frontmatter: { slug: { eq: "project"}}}) {
      nodes {
        frontmatter {
          title
          image {
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
          tech_stack {
            name
          }
          links {
            name
            url
          }
          description
        }
        id
      }
    }
  }
`