import React from 'react';

const Description = ({ text }) => {
  return (
    <article className="description">
      <p className="description__text">{text}</p>
    </article>
  );
}

export default Description;