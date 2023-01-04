import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  card,
  mainContainer,
  mainTextContainer,
  employerName,
  detailContainer,
} from './experience.module.css';

export default function Experience({ data }) {
  console.log(data.frontmatter.description);
  const companyImage = getImage(data.frontmatter.image);
  return (
    <div className={card}>
      <div className={mainContainer}>
        <div className='image'>
          <GatsbyImage 
            image={companyImage}
            alt={data.frontmatter.employer}
          ></GatsbyImage>
        </div>
        <div className={mainTextContainer}>
          <h2 className={employerName}>{data.frontmatter.employer}</h2>
          <span className='title'><i>{data.frontmatter.title}</i></span>
        </div>
      </div>
      <div className={detailContainer}>
        <h4 className='tech-stack'>Tech Stack</h4>
        <div className="tech-stack-container">
          {data.frontmatter.tech_stack.map(item => {
            const techStackImage = getImage(item.image_src);
            return (
              <GatsbyImage
                image={techStackImage}
                alt={item.name}
              ></GatsbyImage>
            )
          })}
        </div>
        <h4 className='tech-stack'>Description</h4>
        {data.frontmatter.description.map(item => <p>{item}</p>)}
      </div>
    </div>
  )
}