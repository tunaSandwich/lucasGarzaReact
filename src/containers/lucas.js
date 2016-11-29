import React, { Component } from 'react';
import { connect } from 'react-redux';

//TODO Swich with skillSymbols
class Lucas extends Component {


  render(){
    return (
      <div>
      {/* Image of me */}
        <div className='col-md-6 col-md-offset-1 profileContainer'>
          <div className='profileImg'></div>
        </div>
      {/* Title section */}
        <div className='col-md-4 profileText'>
          <div className='centerText'>
            <div className='lucasHeader'>
              <h3>{this.props.nav.occupation}</h3>
              </div>
              <hr className='redLine' />
              <div className='marginup'>
      {/* About description */}
                <div className='aboutDescription'>
                  <p>{this.props.nav.about}</p>
                </div>
      {/* Git and LinkedIn Icons */}
                <div className='professionalIcons'>
                  <a href={this.props.nav.linkedin.link}>
                    <img className='profIcon' src={this.props.nav.linkedin.imgLink} title={this.props.nav.linkedin.title} />
                  </a>
                  <a href={this.props.nav.github.link}>
                    <img className='profIcon' src={this.props.nav.github.imgLink} title={this.props.nav.github.title} />
                  </a>
                </div>
              </div>
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

export default connect(mapStateToProps)(Lucas);
