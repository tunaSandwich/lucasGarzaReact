import React, { Component } from 'react';
import { connect } from 'react-redux';//function connect to connect react to redux
import { bindActionCreators } from 'redux';//To push action to reducer
import { selectNav } from '../actions/index';

class Navbar extends Component{
  //Render NavBar List
  renderListDesktop(){
    return this.props.navs.map((navItem) => {
      return (
        <li key={navItem.title}
        id={navItem.id}
        onClick={() => this.props.selectNav(navItem)}
        className='navListItem'>
          <a href='#'>{navItem.title.toUpperCase()}</a>
        </li>
      );
    });
  }


  render() {
    return (
      <nav className='navbar navbar-default navPushFromTop'>
        <div className="container-fluid">

        {/* Dropdown Navbar for tablets, mobile  */}
        <div className='centerNavDropdown'>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        </div>

        {/* Nav */}
        <div className="col-md-12">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <ul className="nav nav-pills nav-justified navigate">
                  {this.renderListDesktop()}
                </ul>
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

//Sending nav item that gets selected to action index file to be processed
function mapDispatchToProps(dispatch){
  return bindActionCreators( { selectNav: selectNav }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
