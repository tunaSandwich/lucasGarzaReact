import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class ChatMessenger extends Component{
  render(){
    return (
      <div className="chatMessenger">
        <button type="button" className="btn btn-default btn-lg">
          <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
        </button>
      </div>
    );
  }
}
