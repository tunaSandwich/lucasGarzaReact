import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lucas from './lucas';
import Projects from './projects';
import Resume from './resume';

class NavItemDetails extends Component {

  selectDetail(){
    switch(this.props.nav.title){
      case 'Lucas Garza': return <Lucas />;
      case 'Projects': return <Projects />;
      case 'Resume': return <Resume />;
    }
    return 'err';
  }

  render(){
    return (
      <div>
        <div>
          {this.selectDetail()}
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

export default connect(mapStateToProps)(NavItemDetails);
