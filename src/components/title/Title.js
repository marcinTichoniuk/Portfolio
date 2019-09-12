import React from 'react';

const Title = ({ title, id }) => {
  return (
    <div className="title"  >
      <h1 id={id} className="title__name">{title}</h1>
    </div>
  );
}

export default Title;