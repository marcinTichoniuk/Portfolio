import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data';

class Project extends Component {
  state = {
    slug: this.props.match.params.slug,
    project: {},
  }

  componentDidMount() {
    const project = projects.find(project => project.slug === this.state.slug);
    this.setState({
      project,
    })
  }

  render() {
    const { project } = this.state;
    if (!project.name) return <div>there is no such project...</div>;

    const { name, images, description, tools, url } = project;
    const newImg = images.map(img => (
      <img key={img} src={img} alt="img" className="project__img" />
    ))

    return (
      <section className="project">
        <div className="project__text">
          <div className="project__container">
            <h3 className="project__title">{name}</h3>
            <p className="project__description">{description}</p>
            <p className="project__description project__description--above">{tools}</p>
          </div>
        </div>
        <div className="project__gallery">
          {newImg}
        </div>
        <div className="project__button">
          <div className="project__button-container">
            <Link to="/" className="project__link">
              home
            </Link>
            <a href={url} className="project__link">
              demo
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;