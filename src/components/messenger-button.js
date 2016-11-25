import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Messenger from '../containers/chat-messenger'

export default class ChatMessenger extends Component{
  renderMessenger(){
      return(
        <div>
          <Messenger />
        </div>
      )
  }

  render(){
    return (
      <div className="chatMessenger">
        <button
        type="button"
        onClick={() => this.renderMessenger()}
        className="btn btn-default btn-lg">
          <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
        </button>
      </div>
    );
  }
}
