import React from 'react';
import Message from './Message';
import Toolbar from './Toolbar';


const MessageList = (props) => {
  // console.log(props.data)
    return(
    <div>
      {props.data.map((message) => {
        return <Message
          key={message.id}
          message={message} />
      })}
   </div>
   )
  }


export default MessageList
