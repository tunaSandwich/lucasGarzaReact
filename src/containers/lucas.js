import React, { Component } from 'react';
import { connect } from 'react-redux';

class Lucas extends Component {
  handleSkills(arr){
    var rowArr = [];
    var finalArr=[];
    console.log(arr.length);
    //TODO Need to print out skillsets in increments of 4 <tr>
    // for(var i = 0 ; i < arr.length;i+4){
    //   console.log(i);
    //   }
    //   console.log(finalArr);
    return(
      <h1>h</h1>
    )
  }

  render(){
    return (
      <div>
        <h3>{this.props.nav.title}</h3>
        <h5>{this.props.nav.occupation}</h5>
        <table className="table table-striped">
          <tbody>
            {this.handleSkills(this.props.nav.skills)}
          </tbody>
        </table>
        <div className='alignBtn'>
          {/* <button type="button" className="btn btn-primary githubBtn">Github</button>
          <button type="button" className="btn btn-default linkedInBtn">LinkedIn</button> */}
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
