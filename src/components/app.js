import React, { Component } from 'react';
import ChatMessengerBtn from '../components/messenger-button';
import Navbar from '../containers/navbar';
import NavItemDetails from '../containers/nav-item-detail';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NavItemDetails />
        <ChatMessengerBtn />
      </div>
    );
  }
}

export default App;
