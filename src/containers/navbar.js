import React, { Component } from 'react';
import { connect } from 'react-redux';//function connect to connect react to redux
import { bindActionCreators } from 'redux';//To push action to reducer
import { selectNav } from '../actions/index';

class Navbar extends Component{
  renderList(){
    return this.props.navs.map((navItem) => {
      return (
        <li key={navItem.title}
        onClick={() => this.props.selectNav(navItem)}
        className='navListItem {navItem.title}'>
          <a href='#'>{navItem.title}</a>
        </li>
      );
    });
  }

  render() {
    return (
      <nav className="navbar navbar-default transparent">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="col-md-6 col-md-offset-3 ">
              <ul className="nav nav-pills nav-justified navigate">
                {this.renderList()}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

// //connect react views and redux states
function mapStateToProps(state){
  //whatever is returned will show up as props
  return {
    navs: state.navs
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { selectNav: selectNav }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
