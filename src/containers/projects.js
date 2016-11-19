import React, { Component } from 'react';
import { connect } from 'react-redux';

class Projects extends Component {
  renderProjects(project){
    
  }

  render(){
    return (
      <div>
      {this.props.nav.project.map(this.renderProjects)}
        <h3 className='centerText'>{this.props.nav.title}</h3>
        <div className="media">
            <div className="media-left media-middle">
              <a href="#">
                <img className="media-object img-circle thumbImg" src={this.props.nav.project[0].imgLink} alt="..." />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{this.props.nav.project[0].title}</h4>
              <h5>{this.props.nav.project[0].projectStack}</h5>
              <p>{this.props.nav.project[0].description}</p>
              <a>{this.props.nav.project[0].link}</a>

            </div>
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
