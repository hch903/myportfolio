import * as React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  card,
  mainContainer,
  mainTextContainer,
  iconContainer,
  employerName,
  detailContainer,
  techStackContainer,
  techStack,
  techStackImage,
  techStackName
} from './experience.module.css';

export default function Experience({ data }) {
  const frontmatter = data.frontmatter;
  const companyImage = getImage(frontmatter.icon);
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'var(--bs-color3)',
        color: 'var(--bs-color5)',
        borderBottom: '5px solid white'
      }}
      contentArrowStyle={{ borderRight: "7px solid var(--bs-color3)" }}
      date={frontmatter.time}
      iconStyle={{ background: frontmatter.iconbg }}
      icon={
        <div className={iconContainer}>
          <GatsbyImage
            image={companyImage}
            alt={frontmatter}
            style={{ width: '80%', height: '80%' }}
          ></GatsbyImage>
        </div>
      }
    >
      <div>
        <div className='d-flex flex-row justify-content-between align-items-center'>
          <h3 className={`mb-0 ${employerName}`}>{frontmatter.employer}</h3>
          <p className='m-0' style={{ fontWeight: '200' }}>{frontmatter.location}</p>
        </div>
        <p className='mt-2 mb-0'><i>{frontmatter.title}</i></p>
      </div>
      <ul className='mt-3'>
        {frontmatter.exp_description.map((point, index) => (
          <li
            key={`experience-point-${index}`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}