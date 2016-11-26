import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lucas from './lucas';
import Projects from './projects';
import Resume from './resume';

class NavItemDetails extends Component {

  selectDetail(){
    console.log($(this));
    $(this).addClass("select");
    switch(this.props.nav.title){
      case 'Lucas Garza': return <Lucas />;
      case 'Projects': return <Projects />;
      case 'Résumé': return <Resume />
    }
    return 'err';
  }

  render(){
    return (
      <div>
        <div className='col-md-8 col-md-offset-2 detailContainer'>
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
