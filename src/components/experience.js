import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  card,
  mainContainer,
  mainTextContainer,
  employerName,
  detailContainer,
} from './experience.module.css';
import exp from '../source/experience.json';

export default function Experience() {
  return (
    <div className={card}>
      <div className={mainContainer}>
        <div className='image'>
          <StaticImage 
            src='../images/aws_logo.jpg' 
            alt="aws"
            width={100} 
            height={100}
          ></StaticImage>
        </div>
        <div className={mainTextContainer}>
          <h2 className={employerName}>{exp['Amazon']['employer']}</h2>
          <span className='title'><i>Software Development Engineer Intern</i></span>
        </div>
      </div>
      <div className={detailContainer}>
        <h4 className='tech-stack'>Tech Stack</h4>
        <div className="tech-stack-container">
          {/* {exp['Amazon']['tech-stack']} */}
          <StaticImage
            src='../images/java_logo.jpg'
            alt='java'
            width={50}
            height={50}
          ></StaticImage>
          <span>Java</span>
          <StaticImage
            src='../images/gson_logo.jpg'
            alt='gson'
            width={50}
            height={50}
          ></StaticImage>
          <StaticImage
            src='../images/mockito_logo.jpg'
            alt='mockito'
            width={50}
            height={50}
          ></StaticImage>
          <StaticImage
            src='../images/amazon_connect_logo.jpg'
            alt='amazon_connect'
            width={50}
            height={50}
          ></StaticImage>
          <StaticImage
            src='../images/amazon_lambda_logo.jpg'
            alt='amazon_lambda'
            width={50}
            height={50}
          ></StaticImage>
          <StaticImage
            src='../images/amazon_lex_logo.jpg'
            alt='amazon_lex'
            width={50}
            height={50}
          ></StaticImage>
        </div>
        <h4 className='tech-stack'>Description</h4>
        {
          exp['Amazon']['description'].map(item => {
            return (
              <>
                <span>{item}</span>
                <br></br>
              </>
            )}
          )
        }
      </div>
    </div>
  )
}