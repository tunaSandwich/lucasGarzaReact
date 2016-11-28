import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChatMessenger extends Component{
  renderMessenger(){
    $('#chatContainer').toggleClass('show');

    // $('form').submit(function(){
    //   socket.emit('chat message', $('#message').val());
    //   $('#message').val('');
    //   return false;
    // });
      return
  }

  closeWindow(){
    $('#chatContainer').removeClass('show');
      return
  }

  render(){
    return (

      <div>
        <div id='chatContainer' className='chatContainer'>
          <ul id="messages">
            {/* <nav>
              <div className='close' onClick={this.closeWindow}>X</div>
            </nav> */}
            <li><p>Begin Chatting with Lucas.... </p></li>
          </ul>
              <form action="" className="form-horizontal">
                <input type="text" id="message" className="form-control" autoComplete="off"  placeholder="Send Message..." />
              </form>
        </div>

        <div className="chatMessengerBtn">
          <button
          type="button"
          onClick={this.renderMessenger}
          className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    );
  }
}

//This function is the 'glue' between react and redux.
//If this state ever changes the Component(BookList) will rerender with
//current state
function mapStateToProps(state){
  //Whatever is returned will show up as props inside BookLists
  return {
    messenger: state.messenger
  }
}


//Anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all reducers.
  //this.props.selectBook will call our action creator
  return bindActionCreators( { selectBook: selectBook }, dispatch );
}

export default connect(mapStateToProps)(ChatMessenger);
