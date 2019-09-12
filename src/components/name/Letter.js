import React from 'react';

const Letter = ({ item, index }) => {
  const { letter } = item;

  return (
    <span className="name__letter" style={{ animation: `split 9s infinite ease-in ${index / 7}s` }}>{letter}</span>
  );
}

export default Letter;