import React from 'react';
import Message from './Message'



const MessageList = ({data}) => {

  return(
    <div>
      {data.map( message => <Message key={message.id} message={ message.subject } />)}
    </div>
  )
}




export default MessageList
