import React from 'react';
import Message from './Message';
// import Toolbar from './Toolbar';


const MessageList = (props) => {
  // console.log(props.data)
    return(
    <div>
      {props.data.map((message) => {
        // console.log(message.id)
        return <Message
          key={message.id}
          message={message}
          onStar={() => props.toggleStar(message.id-1)}
          onSelect={() => props.toggleSelected(message.id-1)}
        />
      })}
   </div>
   )
  }


export default MessageList
