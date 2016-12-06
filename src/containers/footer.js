import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  render(){
    return (
      <div>
        <div className='footerContainer'>
          <div className='email'>{this.props.navs[0].email}</div>
          <div className='icons'>
              <a href={this.props.navs[0].github.link} title='github'><img src={this.props.navs[0].github.imgLink} /></a>
            </div>

            <div className='icons'>
              <a href={this.props.navs[0].linkedin.link} title='linkedIn'><img src={this.props.navs[0].linkedin.imgLink} /></a>
            </div>
        </div>
      </div>
    )
  }
}

// //connect react views and redux states
function mapStateToProps(state){
  //whatever is returned will show up as props
  return {
    navs: state.navs
  }
}


export default connect(mapStateToProps)(Footer);
