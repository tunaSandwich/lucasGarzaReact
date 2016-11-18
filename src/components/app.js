import React, { Component } from 'react';
import ChatMessenger from '../containers/chat-messenger';
import Navbar from '../containers/navbar';
import NavItemDetails from '../containers/nav-item-detail';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ChatMessenger />
        <NavItemDetails />
      </div>
    );
  }
}

export default App;
