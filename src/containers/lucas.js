import React, { Component } from 'react';
import { connect } from 'react-redux';

class Lucas extends Component {
  renderSkills(tableRow){
    return (
      <tr key={tableRow}>
        <td>{tableRow[0]}</td>
        <td>{tableRow[1]}</td>
        <td>{tableRow[2]}</td>
        <td>{tableRow[3]}</td>
      </tr>
    )
  }

  render(){
    return (
      <div>
        <h3 className='centerText'>{this.props.nav.title}</h3>
        <h5 className='centerText'>{this.props.nav.occupation}</h5>
        <table className="table borderless">
          <tbody>
            {this.props.nav.skills.map(this.renderSkills)}
          </tbody>
        </table>
        <div className='alignBtn'>
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
