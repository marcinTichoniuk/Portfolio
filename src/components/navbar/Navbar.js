import React, { Component } from 'react';
import NavItem from './NavItem';


class Navbar extends Component {
  state = {
    navItems: [
      { name: 'about', active: false, top: 0, },
      { name: 'work', active: false, top: 0, },
      { name: 'contact', active: false, top: 0, },
    ],
  }

  getTop = () => {
    // current position of scroll
    const currentScroll = window.pageYOffset;
    const items = this.state.navItems.map(item => {
      // top + current scroll position - window height --> anchor change when section will be at the bottom of the window
      const top = document.getElementById(item.name).getBoundingClientRect().top + currentScroll - window.innerHeight;
      item.top = top;
      return item;
    })
    this.setState({
      navItems: items,
    })
  }

  handleScroll = () => {
    // need to update tops while using routing
    this.getTop();
    let currentPosition = window.pageYOffset;
    let sections = [];
    let currentSection = '';
    this.state.navItems.map(item => sections.push(item.top));
    // start from the bottom of the page to the top
    if (currentPosition > sections[2]) {
      currentSection = 'contact';
    } else if (currentPosition > sections[1]) {
      currentSection = 'work';
    } else {
      currentSection = 'about';
    }

    const items = this.state.navItems.map(item => {
      if (currentSection === item.name) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    })

    this.setState({
      navItems: items,
    })

  }

  // get offset top of the section when everything (images) is loaded
  componentDidMount() {
    window.addEventListener('load', this.getTop);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.getTop);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.getTop);
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.getTop);
  }


  handleClick = (name, e) => {
    e.preventDefault();
    const navItems = this.state.navItems.map(item => {
      if (item.name === name) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    })
    this.setState({
      navItems,
    })
  }

  render() {
    const items = this.state.navItems.map(item => (
      <NavItem
        key={item.name}
        item={item}
        handleClick={this.handleClick}
      />
    ));

    return (
      <>
        <nav className="main-nav">
          <ul className="main-nav__menu">
            {items}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;