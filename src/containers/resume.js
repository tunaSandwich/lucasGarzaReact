import React, { Component } from 'react';
import { connect } from 'react-redux';
import PDF from 'react-pdf';
import SPDF from 'simple-react-pdf';

//Figure out how pdf react packages work
  //check npm simple-react-pdf and react-pdf
class Resume extends Component {
  _onPdfCompleted(page, pages){
    this.setState({page: page, pages: pages});
  }

  render(){
    return (
      <div className='alignToCenter'>
        <PDF file={this.props.resume.file} page={this.props.resume.page} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    resume: state.activeNav
  }
}

export default connect(mapStateToProps)(Resume);
