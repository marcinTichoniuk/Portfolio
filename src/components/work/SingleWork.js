import React from 'react';
import { Link } from 'react-router-dom';
import Plx from 'react-plx';

const SingleWork = ({ project, disabled }) => {
  const { slug, img, className, parallax } = project;

  return (
    <Plx className={className} parallaxData={parallax} disabled={disabled}>
      <div className="work__container">
        <Link to={`/project/${slug}`} className="work__link">
          <img className="work__image" src={img} alt="" />
        </Link>
      </div>
    </Plx>
  );
}

export default SingleWork;