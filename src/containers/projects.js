import React, { Component } from 'react';
import { connect } from 'react-redux';

class Projects extends Component {
  renderProjects(project){
    return (
      <div className='project'>
        <div className="media" key={project.title}>
        <div className="media-left media-middle">
        </div>
        <div className="media-body">
        <h4 className="media-heading"><strong>{project.title}</strong></h4>
        <h5>{project.projectStack}</h5>
        <p> {project.description} <a href={project.link} className='projectLink'>{project.link}</a> </p>
        </div>
        </div>
      </div>

    )
  }

  render(){
    return (
      <div className='col-md-10 col-md-offset-1'>
        <div className='detailContainer'>
        {this.props.nav.project.map(this.renderProjects)}
        </div>
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
