import React, { Component } from 'react';
import { connect } from 'react-redux';

//TODO Swich with skillSymbols
class Lucas extends Component {
  renderSkills(tableRow){
    return (
      <tr key={tableRow[0].name}>
        <td><img id={tableRow.id} className='tableImg' src={tableRow[0].icon} title={tableRow[0].name} /></td>
        <td><img id={tableRow.id} className='tableImg' src={tableRow[1].icon} title={tableRow[1].name} /></td>
        <td><img id={tableRow.id} className='tableImg' src={tableRow[2].icon} title={tableRow[2].name} /></td>
        <td><img id={tableRow.id} className='tableImg' src={tableRow[3].icon} title={tableRow[3].name} /></td>
      </tr>
    )
  }


  render(){
    return (
      <div>
        <div className='centerText lucasHeader'>
          <p>{this.props.nav.title}</p>
          <h3>{this.props.nav.occupation}</h3>
          <hr className='redLine' />
        </div>
        {/* <table className="table borderless">
          <tbody>
            {this.props.nav.skillSets.map(this.renderSkills)}
          </tbody>
        </table> */}
        <div className='centerText marginup'>
        <a href={this.props.nav.linkedin.link}>
        <img className='profIcon' src={this.props.nav.linkedin.imgLink} title={this.props.nav.linkedin.title} />
        </a>
        <a href={this.props.nav.github.link}>
        <img className='profIcon' src={this.props.nav.github.imgLink} title={this.props.nav.github.title} />
        </a>

        </div>
        {/* <div className='alignContactInfo margincontact'>
          <h5><strong>{this.props.nav.occupation}</strong>    • </h5>
          <h5><strong>{this.props.nav.email}</strong>    • </h5>
          <h6><strong>{this.props.nav.phone}</strong></h6>
        </div> */}
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
