import React, { Component } from 'react';
import SmoothScroll from "smoothscroll-for-websites";

import Name from '../../components/name/Name';
import Navbar from '../../components/navbar/Navbar';
import Title from '../../components/title/Title';
import Description from '../../components/description/Description';
import Columns from '../../components/columns/Columns';
import Work from '../../components/work/Work';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';


class Home extends Component {
  componentDidMount() {
    SmoothScroll({
      animationTime: 750, // [ms]
      accelerationDelta: 30, // 50
      accelerationMax: 3 // 3
    });
  }

  render() {
    return (
      <div className="content-wrap">
        <Name />
        <Navbar />
        <Title title="about" id="about" />
        <Description text="My name is Marcin Tichoniuk. I want to become a front-end developer. I am very determined and hard-working person." />
        <Columns />
        <Title title="work" id="work" />
        <Description text="portfolio" />
        <Work />
        <Title title="contact" id="contact" />
        <Description text="get in touch" />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;