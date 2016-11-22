import React, { Component } from 'react';

export default class ChatMessenger extends Component{
  render(){
    return (
      <div>
        <div className='test'>
          {alert()}
        </div>
      </div>
    );
  }
}

// renderMessenger(){
//   console.log("hello");
//     // return(
//     //   <div className='col-md-6 chatContainer'>
//     //     <ul className='messages'></ul>
//     //     <form action='' className='messageForm'>
//     //       <input className="messageInput" autocomplete="off" /><button>Send</button>
//     //     </form>
//     //   </div>
//     // )
// }
