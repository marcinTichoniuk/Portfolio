import React from 'react';
import Letter from './Letter';

const name = [
  { id: 1, letter: 'M' },
  { id: 2, letter: 'a' },
  { id: 3, letter: 'r' },
  { id: 4, letter: 'c' },
  { id: 5, letter: 'i' },
  { id: 6, letter: 'n' },
];

const lastName = [
  { id: 1, letter: 'T' },
  { id: 2, letter: 'i' },
  { id: 3, letter: 'c' },
  { id: 4, letter: 'h' },
  { id: 5, letter: 'o' },
  { id: 6, letter: 'n' },
  { id: 7, letter: 'i' },
  { id: 8, letter: 'u' },
  { id: 9, letter: 'k' },
]

const Name = () => {
  const newName = name.map((item, index) => (
    <Letter key={item.id} item={item} index={index} />
  ))
  const newLastName = lastName.map((item) => (
    <Letter key={item.id} item={item} />
  ))

  return (
    <div className="name">
      {newName}
      <br />
      {newLastName}
    </div>
  );
}

export default Name;