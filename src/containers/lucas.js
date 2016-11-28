import React, { Component } from 'react';
import { connect } from 'react-redux';

//TODO Swich with skillSymbols
class Lucas extends Component {


  render(){
    return (
      <div>
        <div className='col-md-6 col-md-offset-1 profContainer'>
          <div className='profileImg'></div>
        </div>

        <div className='col-md-3 col-md-offset-1 profileText'>
          <div className='centerText lucasHeader'>
            <h3>{this.props.nav.occupation}</h3>
            <hr className='redLine' />
            </div>
            <div className='centerText marginup'>
            <a href={this.props.nav.linkedin.link}>
              <img className='profIcon' src={this.props.nav.linkedin.imgLink} title={this.props.nav.linkedin.title} />
            </a>
            <a href={this.props.nav.github.link}>
              <img className='profIcon' src={this.props.nav.github.imgLink} title={this.props.nav.github.title} />
            </a>
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
