import Link from 'next/link';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { GoRepoClone } from 'react-icons/go';

import Container from './styles';

interface CardProps {
  key: string
  link: string
  description: string
  title: string
  label: string
  userAvatar: string
  username: string
  alt: string
  slug: string
}

const Card: React.FC<CardProps> = ({ key, link, description, title, label, userAvatar, username, alt, slug }) => {
  return (

        <div className="card" key={key}>
          <Link prefetch href={link}  >
            <a title={alt} >
              <h2> <FiGithub size={16} />  {title}</h2>
              <p>{!description ? '' : `${description.substring(0, 80)} ...`}</p>
            </a>
          </Link>
          {!label ? '' :
            <span className="label"> {label} </span>
          }
          <div className="card-footer">
            <Link href={link} >
              <a className="card-footer-link">
                <img src={userAvatar} alt={username} />
              </a>
            </Link>
            <Link href={link} >
              <a title={alt} ><GoRepoClone size={20} /></a>
            </Link>
          </div>
        </div>
  );
}

export default Card;