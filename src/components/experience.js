import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  card,
  mainContainer,
  mainTextContainer,
  employerName,
  detailContainer,
  techStackContainer,
  techStack,
  techStackImage,
  techStackName
} from './experience.module.css';

export default function Experience({ data }) {
  const frontmatter = data.frontmatter;
  const companyImage = getImage(frontmatter.image);
  return (
    <div className={card}>
      <div className={mainContainer}>
        <GatsbyImage 
          image={companyImage}
          alt={frontmatter.employer}
        ></GatsbyImage>
        <div className={mainTextContainer}>
          <h2 className={employerName}>{frontmatter.employer}</h2>
          <span className='title'><i>{frontmatter.title}</i></span>
        </div>
      </div>
      <div className={detailContainer}>
        <h4>Tech Stack</h4>
        <div className={techStackContainer}>
          {frontmatter.tech_stack.map(item => {
            const logo = getImage(item.image_src);
            return (
              <div className={techStack}>
                <GatsbyImage
                  className={techStackImage}
                  image={logo}
                  alt={item.name}
                ></GatsbyImage>
                <span className={techStackName}>{item.name + " "}</span>
              </div>
            )
          })}
        </div>
        <h4>Description</h4>
        {frontmatter.description.map(item => <p>{item}</p>)}
      </div>
    </div>
  )
}