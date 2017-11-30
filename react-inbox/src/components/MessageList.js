import React from 'react';
import Message from './Message';


const MessageList = (props) => {
    return(
    <div>
      {props.data.map((message) => {
        return <Message
          key={message.id}
          message={message}
          onStar={() => props.toggleStar(props.data.indexOf(message))}
          onSelect={() => props.toggleSelected(props.data.indexOf(message))}
        />
      })}
   </div>
   )
  }


export default MessageList
