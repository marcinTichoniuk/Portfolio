import React, { Component } from 'react';
import { projects } from '../../data';
import SingleWork from './SingleWork';

const mql = window.matchMedia('(max-width: 767px)');

class Work extends Component {
  state = {
    disabled: false,
  }

  checkMedia = (e) => {
    if (e.matches) {
      this.setState({
        disabled: true,
      })
    } else {
      this.setState({
        disabled: false,
      })
    }
  }

  componentDidMount() {
    mql.addListener(this.checkMedia);
    this.checkMedia(mql);
  }

  componentWillUnmount() {
    mql.removeListener(this.checkMedia);
  }

  render() {
    const newProjects = projects.map(project => (
      <SingleWork
        key={project.id}
        project={project}
        disabled={this.state.disabled}
      />
    ))
    return (
      <section className="work">
        {newProjects}
        <p className="work__text">More on<a href="https://github.com/marcinTichoniuk" className="work__link-out"> gitHub</a></p>
      </section>
    );
  }
}

export default Work;