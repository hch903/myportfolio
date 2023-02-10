import React, { useState } from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Experience from "../components/experience";
import {
  container,
  sectionHeading
} from '../styles/experience.module.css';
import { graphql } from "gatsby";

const COMPANIES = ["AWS, Amazon Connect", "Dent&Co", "Cathay United Bank"];
const IS_ACTIVE_STATUS = [true, false, false];

const ExperiencePage = ({ data }) => {
  const getNodeId = (companyName) => {
    const node = data.allMdx.nodes.find(node => 
      node.frontmatter.employer.includes(companyName)  
    )
    return node.id;
  }

  const [isActiveObj, setActive] = useState(
    COMPANIES.reduce((acc, company, index) => {
      acc[company] = IS_ACTIVE_STATUS[index];
      return acc;
    }, {})
  );


  const handleClick = (e) => {
    const company = e.target.textContent;
    const tmpIsActive = {...isActiveObj};

    for (let key in tmpIsActive) {
      if (key === company) {
        tmpIsActive[key] = true;
      } else {
        tmpIsActive[key] = false;
      }
    }

    setActive(tmpIsActive);
  }
  
  return (
    <>
      <Layout>
        <Navbar></Navbar>
        <div className={container}>
          <div className="row">
            <div className="col-lg-12 text-center mb-3">
              <span className={sectionHeading}>Experience</span>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
              <div className="btn-group" role="group" aria-label="Basic example">
                {COMPANIES.map(company => 
                  <button 
                    type="button"
                    id={getNodeId(company)} 
                    key={company}
                    className={`btn btn-outline-primary ${isActiveObj[company] ? "active" : ""}`}
                    onClick={handleClick}
                  >{company}</button>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              {data.allMdx.nodes.map(node => 
                <div>
                  {isActiveObj[node.frontmatter.employer] ? <Experience data={node}></Experience> : null }
                </div>
              )}
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

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          employer
          location
          time
          title
          image {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 100, height: 100)
            }
          }
          tech_stack {
            name
            image_src {
              relativePath
              childImageSharp {
                gatsbyImageData(width: 50, height: 50)
              }
            }
          }
          description
        }
        id
      }
    }
  }
`