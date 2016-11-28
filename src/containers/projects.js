import React, { Component } from 'react';
import { connect } from 'react-redux';

class Projects extends Component {
  renderProjects(project){
    return (
      <div className="media" key={project.title}>
          <div className="media-left media-middle">
            <a href="#">
              <img className="media-object img-circle thumbImg" src={project.imgLink} alt="..." />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{project.title}</h4>
            <h5>{project.projectStack}</h5>
            <p>{project.description}</p>
            <a href={project.link} className='projectLink'>{project.link}</a>
          </div>
        </div>
    )
  }

  render(){
    return (
      <div>
        {this.props.nav.project.map(this.renderProjects)}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    nav: state.activeNav
  }
}

export default connect(mapStateToProps)(Projects);
