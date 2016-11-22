import React, { Component } from 'react';
import { connect } from 'react-redux';

//TODO Swich with skillSymbols
class Lucas extends Component {
  renderSkills(tableRow){
    return (
      <tr key={tableRow}>
        <td><img className='tableImg' src={tableRow[0]} title={tableRow[0]}  /></td>
        <td><img className='tableImg' src={tableRow[1]} title={tableRow[1]} /></td>
        <td><img className='tableImg' src={tableRow[2]} title={tableRow[2]} /></td>
        <td><img className='tableImg' src={tableRow[3]} title={tableRow[3]} /></td>
      </tr>
    )
  }

  render(){
    return (
      <div>
        <div className='centerText'>
          <h3>{this.props.nav.occupation}</h3>
          <h5>{this.props.nav.cell}</h5>
          <h5>{this.props.nav.email}</h5>

        </div>
        <table className="table borderless">
          <tbody>
            {this.props.nav.skillSymbols.map(this.renderSkills)}
          </tbody>
        </table>
          <a className='githubBtn' src='#' >Link to Github </a><br/>
          <a src='#' >Link to LinkedIn</a>
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
