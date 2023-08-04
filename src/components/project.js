import { Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from "react";
import {
  projectContainer,
  titleContainer,
  textContainer,
  imageContainer,
  linkButton
} from './project.module.css';
export default function Project({ data }) {
  const frontmatter = data.frontmatter;
  const projectImage = getImage(frontmatter.image);
  return (
    <div className={projectContainer}>
      <div className="row">
        <div className={`col-md-6 py-4 ${textContainer}`}>
          <div className={titleContainer}>
            <h1 className="h1">{frontmatter.title}</h1>
          </div>
          <div className="mb-3">
            {
              frontmatter.links
                .map(link => 
                  <Link 
                    to={link.url}
                    className={linkButton}
                  >
                    {link.name}
                  </Link>
                )
            }
            
          </div>
          <div className="mb-3">
            <span>
              <b>Tech Stack: </b>
              {
                frontmatter.tech_stack
                  .map(tech => tech.name)
                  .join(', ')
              }
            </span>
          </div>
          <div>
            <i>{frontmatter.description}</i>
          </div>
        </div>
        <div className={`col-md-6 py-4 ${imageContainer}`}>
          <GatsbyImage
            image={projectImage}
            alt={frontmatter.title}
          ></GatsbyImage>
        </div>
      </div>
    </div>
  )
}