import React from 'react';

const Columns = () => {
  return (
    <section className="columns">
      <div className="columns__text-box">
        <p className="columns__text">hello</p>
        <p className="columns__text">hello</p>
        <p className="columns__text">hello</p>
        <p className="columns__text">hello</p>
      </div>
      <div className="columns__text-box columns__text-box--bottom">
        <p className="columns__text columns__text--longer">nice to <span className="columns__stroke">meet you</span></p>
        <p className="columns__text columns__text--longer">nice to <span className="columns__stroke">meet you</span></p>
        <p className="columns__text columns__text--longer">nice to <span className="columns__stroke">meet you</span></p>
      </div>
      <div className="columns__column columns__column-first"></div>
      <div className="columns__column columns__column-second"></div>
      <div className="columns__column columns__column-third"></div>
      <div className="columns__column columns__column-fourth"></div>
    </section>
  );
}

export default Columns;