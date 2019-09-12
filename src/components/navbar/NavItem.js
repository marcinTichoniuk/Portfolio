import React, { Component } from 'react';

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.anchorTarget = null;
  }

  // get sections id
  componentDidMount() {
    this.anchorTarget = document.getElementById(this.props.item.name);
  }

  // smooth scroll to id's
  handleAnchorClick = (e) => {
    e.preventDefault();
    this.anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    const { item, handleClick } = this.props;
    const { name, active } = item;

    return (
      <li className="main-nav__item">
        <a
          href={'#' + this.anchorTarget}
          className={active ? "main-nav__link active" : "main-nav__link"}
          onClick={(e) => {
            handleClick(name, e);
            this.handleAnchorClick(e)
          }}>
          {name}
        </a>
      </li>
    );
  }
}

export default NavItem;